import React from 'react'
import './App.css'
import { StyledBtn } from './components/Button.styled'
import { Box } from './components/Box.styled'
import { theme } from './styles/Theme.styled'

function App() {
	return (
		<div className='App'>
			<Box>
				<StyledBtn color={theme.colors.primary} btnType='primary' active>Hello</StyledBtn>
				<StyledBtn color={theme.colors.secondary} btnType='outlined'>Hello</StyledBtn>
			</Box>
		</div>
	)
}

export default App
