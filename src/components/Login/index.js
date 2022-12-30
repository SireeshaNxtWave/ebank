import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'

import {
  BgContainer,
  LoginLogoCard,
  LogoImage,
  FormContainer,
  Heading,
  LabelName,
  Input,
  CustomButton,
  ErrorMsg,
} from './styledComponents'

class Login extends Component {
  state = {userId: '', password: '', submitShowError: false, errorMsg: ''}

  onChangeUserId = event => {
    this.setState({userId: event.target.value})
  }

  onChangePin = event => {
    this.setState({password: event.target.value})
  }

  onSubmitSuccess = jwtToken => {
    const {history} = this.props

    Cookies.set('jwt_token', jwtToken, {
      expires: 30,
    })

    history.replace('/')
  }

  onSubmitFailure = errorMsg => {
    this.setState({submitShowError: true, errorMsg})
  }

  submitForm = async event => {
    event.preventDefault()
    const {userId, password} = this.state
    const userDetails = {
      user_id: userId,
      pin: password,
    }
    const apiUrl = 'https://apis.ccbp.in/ebank/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    console.log(options)
    const response = await fetch(apiUrl, options)
    const data = await response.json()
    console.log(data)
    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  render() {
    const {userId, password, submitShowError, errorMsg} = this.state
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }

    return (
      <BgContainer>
        <LoginLogoCard>
          <LogoImage
            alt="website login"
            src="https://assets.ccbp.in/frontend/react-js/ebank-login-img.png"
          />
          <FormContainer onSubmit={this.submitForm}>
            <Heading>Welcome Back!</Heading>
            <LabelName htmlFor="user-id">User ID</LabelName>
            <Input
              id="user-id"
              value={userId}
              type="text"
              placeholder="Enter User ID"
              onChange={this.onChangeUserId}
            />
            <LabelName htmlFor="pin">PIN</LabelName>
            <Input
              id="pin"
              value={password}
              type="password"
              placeholder="Enter PIN"
              onChange={this.onChangePin}
            />
            <CustomButton type="submit">Login</CustomButton>
            {submitShowError && <ErrorMsg>*{errorMsg}</ErrorMsg>}
          </FormContainer>
        </LoginLogoCard>
      </BgContainer>
    )
  }
}
export default Login
