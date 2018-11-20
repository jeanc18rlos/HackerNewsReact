import React from 'react';

const Footer = props => {
    return <footer>
    <div className="container">
      <div className="row">
        <div className="col-lg-8 col-md-10 mx-auto">
          <ul className="list-inline text-center">
            <li className="list-inline-item">
              <a href="https://twitter.com/zyrtech1">
                <span className="fa-stack fa-lg">
                  <i className="fas fa-circle fa-stack-2x" />
                  <i className="fab fa-twitter fa-stack-1x fa-inverse" />
                </span>
              </a>
            </li>
            <li className="list-inline-item">
              <a href="https://www.linkedin.com/in/jean-carlos-a579a5101/">
                <span className="fa-stack fa-lg">
                  <i className="fas fa-circle fa-stack-2x" />
                  <i className="fab fa-linkedin fa-stack-1x fa-inverse" />
                </span>
              </a>
            </li>
            <li className="list-inline-item">
              <a href="https://github.com/jeanc18rlos">
                <span className="fa-stack fa-lg">
                  <i className="fas fa-circle fa-stack-2x" />
                  <i className="fab fa-github fa-stack-1x fa-inverse" />
                </span>
              </a>
            </li>
          </ul>
          <p className="copyright text-muted">Copyright © <a href="http://zyrtech.tk">zyrtech</a> 2018</p>
        </div>
      </div>
    </div>
  </footer>
  
  
}

export default Footer;