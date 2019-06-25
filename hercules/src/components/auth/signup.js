import React from 'react'
import { signup } from '../../actions'
import { connect } from 'react-redux'
import Loader from 'react-loader-spinner'
import './signup.css'

class SignUp extends React.Component {
    constructor() {
        super()
        this.state = {
            credentials: {
                username: '',
                password: '',
                firstName: '',
                lastName: '',
                email: ''
            }
        }
    }

    handleChange = (event) => {
        this.setState({
            credentials: {
                ...this.state.credentials,
                [event.target.name]: event.target.value
            }
        })
    }

    signupSubmit = (event) => {
        event.preventDefault();
        console.log(this.state)
        this.props.signup(this.state.credentials);
        this.setState({
            username: '',
            password: '',
            firstName: '',
            lastName: '',
            email: ''
        })
    }

    render() {
        return (
            <div className="signup-page">
                <div className="login-page-logo"></div>
                <div>
                <h1 className="signup-text">Create an account</h1>
                <form 
                className="signup-form"
                onSubmit={this.signupSubmit}>
                    <input
                        className="username-field"
                        name='username'
                        placeholder="username"
                        type="string"
                        value={this.state.credentials.username}
                        onChange={this.handleChange}>
                    </input>
                    <input
                        className="firstname-field"
                        name='firstName'
                        placeholder="first name"
                        type="string"
                        value={this.state.credentials.firstName}
                        onChange={this.handleChange}>
                    </input>
                    <input
                        className="lastname-field"
                        name='lastName'
                        placeholder="last name"
                        type="string"
                        value={this.state.credentials.lastName}
                        onChange={this.handleChange}>
                    </input>
                    <input
                        className="email-field"
                        type="string"
                        name='email'
                        placeholder="email address"
                        value={this.state.credentials.email}
                        onChange={this.handleChange}>
                    </input>
                    <input
                        className="password-field"
                        type="string"
                        name='password'
                        placeholder="password"
                        value={this.state.credentials.password}
                        onChange={this.handleChange}>
                    </input>
                    
                    <button className="signup-btn" onClick={this.signupSubmit}>{this.props.isLoggingIn ? (
                        <Loader type="ThreeDots" color="#1f2a38" height="12" width="26" />
                    ):( `Let's go!`)} </button>
                    <div className="login-back-btn"></div>
                </form>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    isLoggingIn:state.isLoggingIn
})

export default connect(
    mapStateToProps, { signup }
)(SignUp)