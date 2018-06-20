import React, { Component } from 'react';
import { NavLink, Route } from 'react-router-dom';

const routers = [
    {
        path: '/',
        exact: true,
        name: "Home",
    },
    {
        path: '/about',
        exact: false,
        name: "About",
    },
    {
        path: '/products',
        exact: false,
        name: "Products",
    },
    {
        path: '/store',
        exact: false,
        name: "Store",
    },
    {
        path: '/login',
        exact: false,
        name: "Login",
    }
]

const MenuLink = ({ router }) => {
    return (
        <Route
            path={router.path}
            exact={router.exact}
            children=
                {
                    ({ match }) => {
                        let active = match;  
                        if (active !== null) active = "active";
                        return (
                            <li className={`nav-item px-lg-4 ${active}`}>
                                <NavLink exact={router.exact} to={router.path} className="nav-link text-uppercase text-expanded">
                                    {router.name}
                                </NavLink>
                            </li>
                        )
                    }
                }
        />
    );
}

class Navigation extends Component {

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark py-lg-4" id="mainNav">
                <div className="container">
                    <NavLink to='/' className="navbar-brand text-uppercase text-expanded font-weight-bold d-lg-none">Start Bootstrap</NavLink>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav mx-auto">
                            {this.showNavLink(routers)}
                        </ul>
                    </div>
                </div>
            </nav >
        )
    }

    showNavLink = (routers) => {
        let xhtml = null

        xhtml = routers.map((router, index) => {
            return (
                <MenuLink key={index} router={router} />
            );
        })

        return xhtml;
    }

}

export default Navigation;