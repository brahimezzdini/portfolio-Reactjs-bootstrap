import React from 'react';
import Typed from "react-typed";

const Header = () => {
      return (
            <div className="header-wrapper" >
                  <div className="main-info" >
                        
                        <h1>Nice To Meet You !!</h1>
                        <Typed
                        className="typed-text"
                        strings={["Welcome To My Website","web Design" , "web Development"]}
                        typeSpeed={40}
                        backSpeed={60}
                        loop
                        />
                      
                        <a href="#" className="btn-main-offer">contact me</a>
                  </div>  
            </div>
      )
}

export default Header
