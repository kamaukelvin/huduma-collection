import React from 'react'
import {Link} from 'react-router-dom'

const Footer = () => {
    const date = new Date().getFullYear()
    return (
        <div>
        <small className="text-muted footer">
        Copyright &copy; {date} <Link  to="#">Ministry of Interior and Coordination Of National Government</Link>
        </small> 
        </div>
    )
}

export default Footer
