import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import ProductItem from '../components/ProductItem';

class ProductsPage extends Component {
    render() {

        let {user} = this.props;

        if(!user.isLogin) {
            return <Redirect to= '/login' />
        }
        return(
            <div>
                <ProductItem />
            </div>
        )
    }
}

const mapStateToProps = (state) => {

    return {
        user: state.user
    }
}

export default connect(mapStateToProps, null)(ProductsPage);