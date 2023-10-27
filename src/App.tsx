import React from 'react'
import { Header } from './layout/header/Header'
import { Main } from './layout/sections/main/Main'
import { Skills } from './layout/sections/skills/Skills'
import './App.css'
import { Works } from './layout/sections/works/Works'
import { Testimony } from './layout/sections/testimony/Testimony'
import { Contacts } from './layout/sections/contacts/Contacts'


function App() {
	return (
		<div className='App'>
			<Header />
			<Main />
			<Skills />
			<Works />
			<Testimony />
			<Contacts />
		</div>
	)
}

export default App
