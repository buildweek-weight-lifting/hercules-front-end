import React from 'react'
import { login } from '../../actions'
import { connect } from 'react-redux'
import Loader from 'react-loader-spinner'
import './login.css'

class Login extends React.Component {
    constructor() {
        super()
        this.state = {
            credentials: {
                username: '',
                password: ''
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

    loginSubmit = (event) => {
        event.preventDefault()
        this.props.login(this.state.credentials)
            .then(() => {
                this.props.history.push('/protected')
            })
            .catch(err => {
                console.log(err)
            })
    }

    render() {
        return (
            <div className="login-page">
                <div className="login-page-logo"></div>
                <div>
                <h1 className="login-text">Sign in</h1>
                <form 
                className="login-form"
                onSubmit={this.loginSubmit}>
                    <input
                        className="username-field"
                        name='username'
                        placeholder="username"
                        value={this.state.credentials.username}
                        onChange={this.handleChange}>
                    </input>
                    <input
                        className="password-field"
                        type='password'
                        name='password'
                        placeholder="password"
                        value={this.state.credentials.password}
                        onChange={this.handleChange}>
                    </input>
                    <button className="login-btn" onClick={this.loginSubmit}>{this.props.isLoggingIn ? (
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
    mapStateToProps, { login }
)(Login)