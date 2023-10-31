import React from 'react'
import styled from 'styled-components'
import { SectionTitle } from '../../../components/common/SectionTitle.styled'
import { TabMenu } from './tabMenu/tabMenu'
import { FlexWrapper } from '../../../components/common/FlexWrapper.styled'
import { Work } from './work/Work'

import projectSocialNetwork from '../../../assets/images/projects/projectSocialNetwork.webp'
import projectCounter from '../../../assets/images/projects/projectCounter.webp'
import { Container } from '../../../components/common/Container.styled'

const workItems = [
	'All',
	'landing page',
	'React',
	'spa'
]

export const Works = () => {
	return (
		<StyledWorks>
			<Container>

				<SectionTitle>My Works</SectionTitle>
				<TabMenu items={workItems} />

				<FlexWrapper justify='space-between' align='flex-start' wrap='wrap'>
					<Work
						src={projectSocialNetwork}
						title='Social Network'
						text='Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
				      labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
					/>
					<Work
						src={projectCounter}
						title='Timer'
						text='Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
				      labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
					/>
				</FlexWrapper>

			</Container>
		</StyledWorks>
	)
}

const StyledWorks = styled.section`
  ${FlexWrapper} {
    gap: 20px;
  }
`