import React from 'react';
import {IntlProvider, FormattedDate} from 'react-intl';
const List = props => {
    const list =props.list;
    return <div>
        {
              list!==null ? 
              list.map((item,index)=>{
                  return <div key={index}> <div  className="post-preview">
                  <a href={item.url}>
                    <h2 className="post-title">
                     {item.title}
                    </h2>
                  </a>
                  <p className="post-meta">Posted by &nbsp;
                    <b>{item.author}</b>&nbsp;
                    on&nbsp;<IntlProvider locale="en">
                    <FormattedDate
                      value={item.created_at}
                      day="numeric"
                      month={"long"}
                      year="numeric"
                    />
                  </IntlProvider></p>
                </div>
                <hr /> </div>
              })
              : null
          }
    </div>
}
export default List;