import { Link } from "react-router-dom/cjs/react-router-dom"


const ErrorPage = () => {


    return(
        <>
        <div className="error-container">
            <h1 className="error-title">
                Page not found, return <Link className="error-link"> home?</Link>
            </h1>
        </div>
        
        </>
    )
}

export default ErrorPage