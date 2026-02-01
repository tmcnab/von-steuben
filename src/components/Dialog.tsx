import { Button } from './Button'
import './Dialog.css'
import type { ReactNode } from 'react'

export interface DialogProps {
	children: ReactNode
	onClose: () => void
	open: boolean
	title: string
}

export const Dialog = (props: DialogProps) => {
	return (
		<dialog open={props.open} role='dialog'>
			<header>
				<span>{props.title}</span>
				<Button label={`&times;`} onClick={props.onClose} />
			</header>
			{props.children}
		</dialog>
	)
}