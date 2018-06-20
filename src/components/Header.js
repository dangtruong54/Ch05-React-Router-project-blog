import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <h1 className="site-heading text-center text-white d-none d-lg-block">
                <span className="site-heading-upper text-primary mb-3">A Free Bootstrap 4 Business Theme</span>
                <span className="site-heading-lower">Business Casual</span>
            </h1>
        );
    }
}

export default Header;
