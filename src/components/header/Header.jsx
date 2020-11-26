import React from 'react'
import coat from 'assets/images/coat_kenya.png'
import huduma from 'assets/images/huduma.png'
import routes from 'routes'
import {Link} from 'react-router-dom'
// import banner from 'assets/images/banner.png'

const Header = () => {
    return (
        <div>
                  <div className="circular"></div>
          
          <div className="banner">
              <div><img src={coat} alt="coat of arms" className="d-none d-md-block" style={{width:"100px", height:"100px"}}/></div>
              <div>
                  <h1 className="title d-none d-md-block">Huduma Namba</h1>
                  <p className="text-center d-none d-md-block">"Huduma Namba kwa Huduma bora"</p>
              </div>
              <div>  <Link to={routes.home}><img src={huduma} alt="coat of arms" className=""/></Link></div>
              <p className="d-block d-md-none">"Huduma Namba kwa Huduma bora"</p>
          </div>
        </div>
    )
}

export default Header
