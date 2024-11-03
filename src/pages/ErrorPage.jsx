import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="text-center space-y-5 py-10">
            <h1 className="text-5xl font-medium">Page not found.</h1>
            <p className="pb-5">404</p>
            <Link to='/'>
                <button className="btn btn-primary">Home</button>
            </Link>
        </div>
    );
};

export default ErrorPage;