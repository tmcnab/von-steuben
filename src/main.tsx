import './main.css'
import { createRoot } from 'react-dom/client'
import { StrictMode } from 'react'
import Application from './Application.tsx'

createRoot(document.body).render(
	<StrictMode>
		<Application />
	</StrictMode>
)
