import React, { Component } from 'react';

import SignupForm from './signupForm';

class Signup extends Component {

    onsubmit = (fields) => {
    }
    render() {
        return (
            <div className='sign-up'>
            <SignupForm onsubmit={(event) => this.onSubmit(event)}/>
            </div>
        )
    }
}

export default Signup;