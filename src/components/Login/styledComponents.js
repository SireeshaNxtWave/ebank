import styled from 'styled-components'

export const BgContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: #152850;
  padding: 30px;
  height: 100vh;
`
export const LoginLogoCard = styled.div`
  background-color: #e0eefe;
  border-radius: 10px;
  display: flex;
  width: 90%;
`
export const LogoImage = styled.img`
  width: 50%;
`
export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #ffffff;
  border-radius: 10px;
  padding: 15px;
  width: 50%;
`
export const Heading = styled.h1`
  color: #183b56;
  font-size: 30px;
`
export const LabelName = styled.label`
  color: #5a7184;
  font-size: 17px;
  margin-bottom: 10px;
`
export const Input = styled.input`
  border-radius: 10px;
  color: #c3cad9;
  height: 40px;
  border: 1px solid #5a7184;
  padding: 10px;
  margin-bottom: 20px;
`
export const CustomButton = styled.button`
  background-color: #1565d8;
  color: #ffffff;
  border: 0px;
  border-radius: 10px;
  margin-top: 20px;
`
export const ErrorMsg = styled.p`
  color: #ff0b37;
  font-size: 12px;
  text-align: center;
`
