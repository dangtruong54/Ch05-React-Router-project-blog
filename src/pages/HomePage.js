import React, { Component } from 'react';
import Intro from '../components/Intro';
import Promise from '../components/Promise';

class Homepage extends Component {
    render() {
        return(
            <div>
                <Intro />
                <Promise />                             
            </div>
        );
    }
}

export default Homepage;