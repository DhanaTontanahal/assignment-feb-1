import { useState } from 'react'
import { InputText } from 'primereact/inputtext'
import { Button } from 'primereact/button'
import { apiCall } from '../utilities/api/api'
import { POSTS } from '../utilities/constants/endpoints'
import { getRandomNum } from '../utilities/util'

const AddPost = () => {
	const [value, setValue] = useState('')

	const addPost = async () => {
		let body = {
			title: value,
			body: value,
			userId: getRandomNum(999, 999999)
		}
		await apiCall(POSTS, {}, body, 'POST')

		if (true) {
			alert('Post addedd successfully')
		}
	}

	return (
		<>
			<InputText
				value={value}
				onChange={(e) => setValue(e.target.value)}
			/>
			&nbsp;&nbsp;
			<Button
				label="Add Post"
				icon="pi pi-plus"
				onClick={() => addPost()}
			/>
		</>
	)
}

export default AddPost
