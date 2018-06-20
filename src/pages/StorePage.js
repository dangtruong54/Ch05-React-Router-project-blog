import React, { Component } from 'react';
import StoreTiming from '../components/StoreTiming';
import StoreTaking from '../components/StoreTaking';

class StorePage extends Component {
    render() {
        return(
            <div>
                <StoreTiming />
                <StoreTaking />  
            </div>
        );
    }
}

export default StorePage;