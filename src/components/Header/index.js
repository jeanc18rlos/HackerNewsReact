import React from 'react';
import { CodingHeader,Search } from '../'
const Header = props => {
    const {error,onSearchChange,onSearchSubmit,searchTerm} = props;
   return <div> 
   {
      error ? <header className="masthead">
      <div className="overlay" >
          <CodingHeader/>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-10 mx-auto">
            <div className="site-heading">
            <h1>This is embarrasing</h1>
            
              <span className="subheading">Our application gets an error, make sure you are conected and reload the page</span>
            </div>
          </div>
        </div>
      </div>
      <style dangerouslySetInnerHTML={{__html: `
      pre { color: #ff1100;
        text-shadow: 0 0 2px #ff1100, 1px -1px 2px #f00000}
    `}} />
      
    </header> : <header className="masthead" style={{backgroundImage: 'url("img/home-bg.jpg")'}}>
     <div className="overlay" >
         <CodingHeader/>
     </div>
     <div className="container">
       <div className="row">
         <div className="col-lg-8 col-md-10 mx-auto">
           <div className="site-heading">
           <Search
           value={searchTerm}
           onChange={onSearchChange}
           onSubmit={onSearchSubmit}
           >
           <i className="fa fa-search"></i>
           </Search>
           
             <span className="subheading">Search stories by title, url or author </span>
           </div>
         </div>
       </div>
     </div>
   </header>
  

   }</div>
}
export default Header;