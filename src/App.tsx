import React from 'react'
import { Card } from './components/Card.styled'
import { Img } from './components/Img.styled'
import desert from './assets/Desert.jpg'
import { Button } from './components/Button.styled'
import { Container } from './components/Container.styled'
import { Paragraph } from './components/Paragraph.styled'
import { Box } from './components/Box.styled'

function App() {
	return (
		<Container>
			<Card>
				<Img src={desert} />
				<Paragraph fontSize='16px' fontWeight='bold' paragraphType='h3'>Headline</Paragraph>
				<Paragraph fontSize='12px' fontWeight='medium' paragraphType='p'>Faucibus. Faucibus. Sit sit sapien sit
					tempusrisu ut. Sit
					molestie ornare in
					venen.</Paragraph>
				<Box boxType='ButtonsBlock'>
					<Button>See more</Button>
					<Button>Save</Button>
				</Box>
			</Card>
		</Container>
	)
}

export default App
