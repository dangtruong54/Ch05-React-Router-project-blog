import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actLogIn } from './../action/index';

class FormLogin extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''  
        }
    }

    handleInputChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
        
    }

    handleSubmit = (event) => {
        let {username, password} = this.state;
        this.props.handleLogInCheck(username, password);
        event.preventDefault();
    }

    render() {

        return (
            <div className="container">
                <div className="bg-faded p-4 my-4">
                    <hr className="divider" />
                    <h2 className="text-center text-lg text-uppercase my-0">Login <strong>Form</strong></h2>
                    <hr className="divider" />
                    <p>admin/123</p>
                    <form onSubmit={this.handleSubmit}>
                        <div className="row">
                            <div className="form-group col-lg-6">
                                <label className="text-heading">Name</label>
                                <input name="username" type="text" className="form-control" value={this.state.username} onChange={this.handleInputChange} />
                            </div>
                            <div className="form-group col-lg-6">
                                <label className="text-heading">Password</label>
                                <input name="password" type="text" className="form-control" value={this.state.password} onChange={this.handleInputChange} />
                            </div>
                            <div className="clear-fix" />
                            <div className="form-group col-lg-12">
                                <button type="submit" className="btn btn-secondary">Submit</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

const mapDispathToProps = (dispatch, ownProps) => {
    return {
        handleLogInCheck: (username, password) => {       
            dispatch(actLogIn(username, password))
        }
    }
}

export default connect(null, mapDispathToProps)(FormLogin);