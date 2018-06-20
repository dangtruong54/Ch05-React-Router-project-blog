import React, { Component } from 'react';
import { connect } from 'react-redux';

import FormLogin from '../components/FormLogin';
import UserControl from '../components/UserControl';

class LoginPage extends Component {
    render() {
        let {user} = this.props;    
        return(
            <div>
                {this.renderComponet(user)}
            </div>
        );
    }

    renderComponet(user) {
        let xhtml = null;
        if(user.isLogin) {
            xhtml = <UserControl username={user.username}/>
        }else {                    
            xhtml = <FormLogin />            
        }
        return xhtml;
    }
}

const mapStateToProps = state => {
    return {
        user: state.user
    }
}
export default connect(mapStateToProps, null)(LoginPage);