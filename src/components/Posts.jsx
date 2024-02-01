import { useEffect, useState } from 'react'
import { apiCall } from '../utilities/api/api'
import { POSTS } from '../utilities/constants/endpoints'
import MyDialog from './MyDialog'
import AddPost from './AddPost'
import { Card } from 'primereact/card'

const Posts = () => {
	const [posts, setPosts] = useState([])

	const fetchData = async (endpoint) => {
		const { isSuccess, result } = await apiCall(endpoint, {}, '', 'GET')
		if (isSuccess) {
			setPosts(result)
		}
	}

	useEffect(() => {
		const url = POSTS
		fetchData(url)
	}, [])

	return (
		<>
			<div>
				<h1>Post Management App</h1>
			</div>
			<Card>
				<h3>Add Post</h3>
				<AddPost />
			</Card>
			<hr />
			<h3>View Posts</h3>
			<hr />
			{posts.length > 0 &&
				posts.map((eachPost) => {
					return (
						<div key={eachPost.id}>
							<div>
								{eachPost.id}-{eachPost.title}
							</div>
							<div>
								<MyDialog
									postId={eachPost.id}
									postBody={eachPost.body}
								/>
							</div>
						</div>
					)
				})}
		</>
	)
}

export default Posts
