import React from 'react'
import styled from 'styled-components'
import { SectionTitle } from '../../../components/common/SectionTitle'
import { Menu } from '../../../components/menu/Menu'
import { FlexWrapper } from '../../../components/common/FlexWrapper'
import { Work } from './work/Work'

import projectSocialNetwork from '../../../assets/images/projects/projectSocialNetwork.webp'
import projectCounter from '../../../assets/images/projects/projectCounter.webp'

const workItems = [
	'All',
	'landing page',
	'React',
	'spa'
]

export const Works = () => {
	return (
		<StyledWorks>
			<SectionTitle>My Works</SectionTitle>
			<Menu items={workItems} />

			<FlexWrapper justify='space-around'>
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

		</StyledWorks>
	)
}

const StyledWorks = styled.section`
  min-height: 100vh;
  background-color: darksalmon;
`