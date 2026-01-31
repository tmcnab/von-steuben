import { useState } from 'react'
import { Dialog } from './components/Dialog'

const Application = () => {
	const [open, setOpen] = useState(false)

	return (<>
		<h1>Hello World</h1>
		<button onClick={() => setOpen(true)}>Open Dialog</button>
		<Dialog
			onClose={() => setOpen(false)}
			open={open}
			title="My Dialog"
		>
			<p>This is the content of the dialog.</p>
		</Dialog>
	</>)
}

export default Application