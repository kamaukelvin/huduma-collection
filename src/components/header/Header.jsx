import React from 'react'
import coat from 'assets/images/coat_kenya.png'
import huduma from 'assets/images/huduma.png'
// import banner from 'assets/images/banner.png'

const Header = () => {
    return (
        <div>
                  <div className="circular"></div>
          
          <div className="banner">
              <div><img src={coat} alt="coat of arms" style={{width:"100px", height:"100px"}}/></div>
              <div>
                  <h1 className="title">Huduma Namba</h1>
                  <p className="text-center">"Huduma Namba kwa Huduma bora"</p>
              </div>
              <div><img src={huduma} alt="coat of arms" className="d-inline"/></div>
          {/* <img src={coat} alt="coat of arms" className="d-inline"/>
           <img src={huduma} className="d-inline" alt="huduma logo"/> */}
           {/* <img src={banner} className="d-inline" alt="huduma logo"/> */}
          </div>
        </div>
    )
}

export default Header
