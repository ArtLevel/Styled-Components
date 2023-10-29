import React from 'react'
import styled from 'styled-components'
import { SectionTitle } from '../../../components/common/SectionTitle.styled'
import { Icon } from '../../../components/icon/Icon'
import { Slider } from '../../../components/slider/Slider'
import { FlexWrapper } from '../../../components/common/FlexWrapper.styled'
import { IconWrapper } from '../../../components/common/IconWrapper.styled'

export const Testimony = () => {
	return (
		<StyledTestimony>
			<SectionTitle>Testimony</SectionTitle>
			<FlexWrapper direction='column' align='center'>
				<IconWrapper>
					<Icon iconId='quote' />
				</IconWrapper>
				<Slider />
			</FlexWrapper>
		</StyledTestimony>
	)
}

const StyledTestimony = styled.section`
  min-height: 50vh;
  background-color: lavenderblush;

  ${IconWrapper} {
    margin: 40px 0 72px;
  }
`