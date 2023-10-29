import React from 'react'
import styled from 'styled-components'
import { SectionTitle } from '../../../components/common/SectionTitle.styled'
import { StyledButton } from '../../../components/common/Button.styled'
import { Container } from '../../../components/common/Container.styled'
import { FlexWrapper } from '../../../components/common/FlexWrapper.styled'

export const Slogan = () => {
	return (
		<StyledSlogan>
			<Container>
				<FlexWrapper align='center' direction='column'>
					<SectionTitle>I Am Available For Freelance</SectionTitle>
					<StyledButton>Hire me</StyledButton>
				</FlexWrapper>
			</Container>
		</StyledSlogan>
	)
}

const StyledSlogan = styled.section`
  min-height: 30vh;
  background-color: plum;
`
