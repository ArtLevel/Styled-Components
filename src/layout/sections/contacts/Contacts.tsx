import React from 'react'
import styled from 'styled-components'
import { SectionTitle } from '../../../components/common/SectionTitle'
import { StyledButton } from '../../../components/common/Button'

export const Contacts = () => {
	return (
		<StyledContacts>
			<SectionTitle>Contact</SectionTitle>

			<StyledForm>
				<StyledField placeholder='name' />
				<StyledField placeholder='subject' />
				<StyledField placeholder='message' as='textarea' />
				<StyledButton type='submit'>Send Message</StyledButton>
			</StyledForm>

		</StyledContacts>
	)
}

const StyledContacts = styled.div`
  min-height: 50vh;
  background-color: lightcoral;
`

const StyledForm = styled.form`
  width: 100%;
  max-width: 500px;
  margin: 0 auto;

  display: flex;
  flex-direction: column;

  gap: 16px;
`

const StyledField = styled.input`

`
