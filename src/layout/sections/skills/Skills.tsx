import React from 'react'
import styled from 'styled-components'
import { FlexWrapper } from '../../../components/common/FlexWrapper.styled'
import { Skill } from './skill/Skill'
import { SectionTitle } from '../../../components/common/SectionTitle.styled'
import { Container } from '../../../components/common/Container.styled'

export const Skills = () => {
	return (
		<SectionSkills>
			<Container>
				<SectionTitle>My Skills</SectionTitle>

				<FlexWrapper wrap='wrap' justify='space-between'>
					<Skill
						skillText='Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
					labore et dolore magna aliqua Ut enim'
						skillTitle='HTML'
						iconId='html' />
					<Skill
						skillText='Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
					labore et dolore magna aliqua Ut enim'
						skillTitle='CSS'
						iconId='css' />
					<Skill
						skillText='Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
					labore et dolore magna aliqua Ut enim'
						skillTitle='REACT'
						iconId='react' />
					<Skill
						skillText='Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
					labore et dolore magna aliqua Ut enim'
						skillTitle='Styled Components'
						iconId='styledComponents' />
					<Skill
						skillText='Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
					labore et dolore magna aliqua Ut enim'
						skillTitle='TypeScript'
						iconId='typeScript' />
					<Skill
						skillText='Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
					labore et dolore magna aliqua Ut enim'
						skillTitle='WEB DESIgN'
						iconId='figma' />
				</FlexWrapper>
			</Container>
		</SectionSkills>
	)
}

const SectionSkills = styled.section`
	
`
