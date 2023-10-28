import React from 'react'
import styled from 'styled-components'
import { SectionTitle } from '../../../components/common/SectionTitle.styled'
import { StyledButton } from '../../../components/common/Button.styled'

export const Slogan = () => {
	return (
		<StyledSlogan>
			<SectionTitle>I Am Available For Freelance</SectionTitle>
			<StyledButton>Hire me</StyledButton>
		</StyledSlogan>
	)
}

const StyledSlogan = styled.section`
  min-height: 30vh;
  background-color: plum;
`
