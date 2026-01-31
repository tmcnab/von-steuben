import { useState } from 'react'
import { Dialog } from './components/Dialog'
import { Button } from './components/Button'

const Application = () => {
	const [open, setOpen] = useState(false)

	return (<>
		<h1>Hello World</h1>
		<Button
			label="Open Dialog"
			onClick={() => setOpen(true)}
		/>
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