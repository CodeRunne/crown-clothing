import React, { useState } from 'react'

// Components
import FormInput from '../form-input/form-input';
import CustomButton from '../custom-button/custom-button';
import './signin.scss';

function SignIn() {
    const [user, setUser] = useState({
        email: '',
        password: ''
    });

    function handleChange({ target }) {
        const { name, value } = target;

        setUser({...user, [name]: value })
    }

    function handleSubmit(e) {
        e.preventDefault();

        setUser({...user, email: '', password: ''})
    }

    return (
        <div className='sign-in'>
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>

            <form onSubmit={handleSubmit}>
                {/* Email Input */}
                <FormInput 
                    type="email" 
                    name="email" 
                    value={user.email} 
                    label="Email"
                    handleChange={handleChange}
                    required 
                />

                {/* Password Input */}
                <FormInput 
                    type="password" 
                    name="password" 
                    value={user.password} 
                    label="Password"
                    handleChange={handleChange}
                    required 
                />

                <CustomButton>Sign in</CustomButton>
            </form>
        </div>
    )
}

export default SignIn;