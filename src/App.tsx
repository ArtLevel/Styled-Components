import React from 'react'
import './App.css'
import { StyledBtn, SuperButton } from './components/Button.styled'
import { Link } from './components/Link.styled'
import { Menu } from './components/Menu.styled'
import { Box } from './components/Box.styled'

function App() {
	return (
		<div className='App'>

			<Menu>
				<ul>
					<li><a href=''>Menu Item 1</a></li>
					<li><a href=''>Menu Item 2</a></li>
					<li><a href=''>Menu Item 3</a></li>
				</ul>
			</Menu>

			<Box>
				<StyledBtn as={Link} href='#'>Link</StyledBtn>
				<StyledBtn as='a' href='#'>Link</StyledBtn>
				<StyledBtn>Hello !</StyledBtn>
				<SuperButton>SuperButton</SuperButton>
			</Box>
		</div>
	)
}

export default App
