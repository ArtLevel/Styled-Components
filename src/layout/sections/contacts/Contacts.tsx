import React from 'react'
import styled from 'styled-components'
import { SectionTitle } from '../../../components/common/SectionTitle.styled'
import { StyledButton } from '../../../components/common/Button.styled'
import { Container } from '../../../components/common/Container.styled'
import { theme } from '../../../styles/Theme'

export const Contacts = () => {
	return (
		<StyledContacts>

			<Container>
				<SectionTitle>Contact</SectionTitle>

				<StyledForm>
					<StyledField placeholder='name' />
					<StyledField placeholder='subject' />
					<StyledField placeholder='message' as='textarea' />
					<StyledButton type='submit'>Send Message</StyledButton>
				</StyledForm>
			</Container>

		</StyledContacts>
	)
}

const StyledContacts = styled.section`

`

const StyledForm = styled.form`
  width: 100%;
  max-width: 540px;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 16px;

  textarea {
    height: 155px;
    resize: none;
  }
`

const StyledField = styled.input`
  width: 100%;
  padding: 7px 15px;

  font-family: 'Poppins', sans-serif;
  color: ${theme.colors.fontColor};
  font-size: 12px;
  font-weight: 400;
  letter-spacing: 0.6px;

  border: 1px solid ${theme.colors.borderColor};
  background-color: ${theme.colors.secondaryBgColor};

  &::placeholder {
    color: ${theme.colors.placeholderColor};
    text-transform: capitalize;
  }

  &:focus-visible {
    outline: 1px solid ${theme.colors.accentColor};
  }
`
