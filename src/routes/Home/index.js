import React from 'react';
import {Header,List,Loader} from '../../components';
import ScrollUpButton from "react-scroll-up-button";
import axios from 'axios';
import PropTypes from 'prop-types';
import {
  DEFAULT_QUERY,
  DEFAULT_HPP,
  PATH_BASE,
  PATH_SEARCH,
  PARAM_SEARCH,
  PARAM_PAGE,
  PARAM_HPP,
  } from '../../constants';

class Home extends React.Component {
    _isMounted = false;
    constructor(props){
        super(props)
        this.state = {
            
            searchTerm : DEFAULT_QUERY,
            results : null,
            searchKey: '',
            error : null,
            isLoading : false
        }
        this.needsToSearchTopStories = this.needsToSearchTopStories.bind(this);
        this.setSearchTopStories = this.setSearchTopStories.bind(this);
        this.onSearchChange = this.onSearchChange.bind(this);
        this.onSearchSubmit = this.onSearchSubmit.bind(this);
        this.fetchSearchTopStories = this.fetchSearchTopStories.bind(this);
    }
    fetchSearchTopStories(searchTerm, page = 0) {
        this.setState({ isLoading: true });
        axios(`${PATH_BASE}${PATH_SEARCH}?${PARAM_SEARCH}${searchTerm}&${PARAM_PAGE}${page}&${PARAM_HPP}${DEFAULT_HPP}`)
        .then(result => this._isMounted && this.setSearchTopStories(result.data))
        .catch(error => this._isMounted && this.setState({ error }));
    }
    componentDidMount(){
        this._isMounted = true;
        const { searchTerm } = this.state;
        this.setState({ searchKey: searchTerm });
        this.fetchSearchTopStories(searchTerm);
        
    }
    componentWillUnmount() {
      this._isMounted = false;
    }
    onSearchSubmit(event) {
      const { searchTerm } = this.state;
      this.setState({ searchKey: searchTerm });
      if (this.needsToSearchTopStories(searchTerm)) {
          this.fetchSearchTopStories(searchTerm);
        }
      event.preventDefault();
    }
    needsToSearchTopStories(searchTerm) {
      return !this.state.results[searchTerm];
    }    
    onSearchChange(event) {
      this.setState({ searchTerm: event.target.value });
    }
    setSearchTopStories(result) {
      const { hits, page } = result;
      const { searchKey, results } = this.state;
      const oldHits = results && results[searchKey]
      ? results[searchKey].hits
      : [];
      const updatedHits = [
      ...oldHits,
      ...hits
      ];
      this.setState({
      results: {
      ...results,
      [searchKey]: { hits: updatedHits, page },
      isLoading: false
      }
      })
      
    }
    render(){
      const {searchTerm, results,searchKey,error,isLoading } = this.state;
      const page = (
        results &&
        results[searchKey] &&
        results[searchKey].page
        ) || 0;
      const list = (
        results &&
        results[searchKey] &&
        results[searchKey].hits
        ) || [];

      Header.PropTypes = {
        error : PropTypes.bool,
        onSearchChange: PropTypes.func.isRequired,
        onSearchSubmit : PropTypes.func.isRequired,
        searchTerm : PropTypes.string
      }
      if (error) {
        return <Header error={true} onSearchChange={this.onSearchChange} onSearchSubmit={this.onSearchSubmit} searchTerm={searchTerm} /> ;
        }
      else{
        return<div>
          <Header error={false} onSearchChange={this.onSearchChange} onSearchSubmit={this.onSearchSubmit} searchTerm={searchTerm}/>
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-md-10 mx-auto">
                {
                  isLoading ? <List list={list} /> :<Loader />
                }
                <div className="clearfix">
                {
                  isLoading ? <button className="btn btn-primary float-right" onClick={() => this.fetchSearchTopStories(searchKey, page + 1)}>
                  Load More →</button> :<Loader />
                }
                  
                </div>
                <div>
                      <ScrollUpButton  AnimationDuration={2200} style={{borderRadius: '50%', background: 'lime', padding: 5}}/>
                      
                  </div>
              </div>
            </div>
          </div>  
          
        </div>   
    }
  }
}
export {Header,List};
export default Home;