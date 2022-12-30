import {
  NotFoundContainer,
  NotFoundImg,
  Heading,
  Description,
} from './styledComponents'

const NotFound = () => (
  <NotFoundContainer>
    <NotFoundImg
      alt="not found"
      src="https://assets.ccbp.in/frontend/react-js/ebank-not-found-img.png"
    />
    <Heading>Page Not Found</Heading>
    <Description>
      We are sorry, the page you requested could not be found.
    </Description>
  </NotFoundContainer>
)

export default NotFound
