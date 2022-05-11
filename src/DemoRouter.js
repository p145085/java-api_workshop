import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link, useHistory, useLocation, useParams, Redirect } from "react-router-dom";

const DemoRouter = () => {    
    return  (
        <div className="container">
            <Router>
                <Header />
                <Switch>
                    <Route exact path="/" component={Welcome} />
                    <Route path="/welcome" component={Welcome} />
                    <Route path="/home" component={Home} />
                    <Route path="/about" component={About} />


                    <Redirect from="/person/:id" to="/data/:id" />
                    <Route path={"/data/:id"} component={ShowData} />

                    <Route path={"/notfound"} component={NotFound} />
                </Switch>
            </Router>
        </div>
    );


    const Welcome = () => {
        return (
            <h3>Welcome</h3>
        )
    }
    const About = () => {
        return (
            <Fragment>
                I am a "About" fragment.
            </Fragment>
        )
    }

    const Home = () => {
        return (
            <Fragment>
                I am a "Home" fragment.
            </Fragment>
        )
    }

    const Person = () => {
        return (
            <Fragment>
                I am a "Person" fragment.
            </Fragment>
        )
    }

    const NotFound = () => {
        return (
            <Fragment>
                I am a "Not Found" fragment.
            </Fragment>
        )
    }

    const Header = () => {
        return (
            <Fragment>
                <ul className="nav nav-pills nav-fill bg-dark text-white">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Welcome</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/home">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/about">About Us</Link>
                    </li>
                </ul>
            </Fragment>
        );
    }


};
export default DemoRouter
