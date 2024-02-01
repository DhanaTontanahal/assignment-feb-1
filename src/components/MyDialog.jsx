import { useState } from 'react'
import 'primeicons/primeicons.css'
import 'primeflex/primeflex.css'
import 'primereact/resources/primereact.css'
import 'primereact/resources/themes/lara-light-indigo/theme.css'
import { Button } from 'primereact/button'
import { Dialog } from 'primereact/dialog'

const MyDialog = ({ postId, postBody }) => {
	const [visible, setVisible] = useState(false)
	return (
		<div className="card flex justify-content-center">
			<Button
				label="Show"
				icon="pi pi-external-link"
				onClick={() => setVisible(true)}
			/>
			<Dialog
				header={postId}
				visible={visible}
				onHide={() => setVisible(false)}
				style={{ width: '50vw' }}
				breakpoints={{ '960px': '75vw', '641px': '100vw' }}
			>
				<p className="m-0">{postBody}</p>
			</Dialog>
		</div>
	)
}

export default MyDialog
