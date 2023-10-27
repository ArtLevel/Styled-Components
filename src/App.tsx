import React from 'react'
import { Header } from './layout/header/Header'
import { Main } from './layout/sections/main/Main'
import './App.css'
import { Skills } from './layout/sections/skills/Skills'


function App() {
	return (
		<div className='App'>
			<Header />
			<Main />
			<Skills />
		</div>
	)
}

export default App
