import React from 'react'
import styled from 'styled-components'
import { SectionTitle } from '../../../components/common/SectionTitle.styled'
import { Icon } from '../../../components/icon/Icon'
import { Slider } from '../../../components/slider/Slider'
import { FlexWrapper } from '../../../components/common/FlexWrapper.styled'
import { IconWrapper } from '../../../components/common/IconWrapper.styled'
import { Container } from '../../../components/common/Container.styled'

export const Testimony = () => {
	return (
		<StyledTestimony>
			<Container>
				<SectionTitle>Testimony</SectionTitle>
				<FlexWrapper direction='column' align='center'>
					<IconWrapper>
						<Icon iconId='quote' />
					</IconWrapper>
					<Slider />
				</FlexWrapper>
			</Container>
		</StyledTestimony>
	)
}

const StyledTestimony = styled.section`
  min-height: 50vh;
  background-color: lavenderblush;

  ${IconWrapper} {
    margin: 28px 0 72px;
  }
`
