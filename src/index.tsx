import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { GlobalStyles } from './styles/GlobalStyles'

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
)
root.render(
	<React.StrictMode>
		<App />
		<GlobalStyles />
	</React.StrictMode>
)
