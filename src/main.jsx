import React from 'react'
import ReactDOM from 'react-dom/client'
import { PrimeReactProvider } from 'primereact/api'
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<PrimeReactProvider>
			<App />
		</PrimeReactProvider>
	</React.StrictMode>
)
