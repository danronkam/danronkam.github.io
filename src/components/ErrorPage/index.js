import { Link } from "react-router-dom/cjs/react-router-dom"
import React from 'react'
import "./ErrorPage.css"


const ErrorPage = () => {


    return(
        <>
        <div className="error-container">
            <h1 className="error-title">
                page not found, return <Link className="error-link" exact to="/"> home?</Link>
            </h1>
        </div>
        
        </>
    )
}

export default ErrorPage