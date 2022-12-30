import Cookies from 'js-cookie'

import {
  HomeBgContainer,
  HeaderCard,
  Custombutton,
  CardContainer,
  MainHeading,
} from './styledComponents'

const Home = props => {
  const onClickLogout = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/ebank/login')
  }
  return (
    <HomeBgContainer>
      <HeaderCard>
        <img
          alt="website logo"
          src="https://assets.ccbp.in/frontend/react-js/ebank-logo-img.png"
        />
        <Custombutton type="button" onClick={onClickLogout}>
          Logout
        </Custombutton>
      </HeaderCard>
      <CardContainer>
        <MainHeading>Your Flexibility, Our Excellence</MainHeading>
        <img
          alt="digital card"
          src="https://assets.ccbp.in/frontend/react-js/ebank-digital-card-img.png"
        />
      </CardContainer>
    </HomeBgContainer>
  )
}

export default Home
