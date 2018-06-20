import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actLogOut } from '../action';


class UserControl extends Component {

    handleLogOut = () => {
        this.props.handleLogOutForm();
    }

    render() {
        let {username} = this.props;
        return (
            <div className='container'>
                <div className='bg-faded p-4 my-4'>
                    <hr className='divider' />
                    <h2 className="text-center text-lg text-uppercase"><strong>UserControl</strong></h2>
                    <hr className="divider" />
                    <form>
                        <div className="row">
                            <div className="form-group col-lg-6">
                                <label className="text-heading">Hello:<strong>{username}</strong></label>
                            </div>
                            <div className="clear-fix" />

                            <div className="form-group col-lg-12">
                                <button type="submit" className="btn btn-secondary" onClick={this.handleLogOut}>Logout</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        handleLogOutForm: () => {
            dispatch(actLogOut()) ;
        } 
    }
}

export default connect(null, mapDispatchToProps)(UserControl);