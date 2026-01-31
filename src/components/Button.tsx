import './Button.css'

export interface ButtonProps {
	label: string
	onClick: () => void
}

export const Button = (props: ButtonProps) => {
	const children = props.label
	return <button children={children} onClick={props.onClick} />
}