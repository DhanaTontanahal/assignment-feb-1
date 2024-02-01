const errorId = 'error-id-yes'
const sessionId = 'session-id-yes'

export async function apiCall(url, header = {}, data = {}, method = 'GET') {
	let myHeaders = new Headers()

	for (const [key, value] of Object.entries(header)) {
		myHeaders.append(key, value)
	}

	myHeaders.append('Content-Type', 'application/json')

	var requestOptions = {
		method: method,
		headers: myHeaders
	}

	if (
		method.toUpperCase() === 'POST' ||
		method.toUpperCase() === 'PUT' ||
		method.toUpperCase() === 'DELETE'
	) {
		requestOptions.body = JSON.stringify(data)
	} else if (method.toUpperCase() === 'GET') {
		url = url + '?'
		for (const [key, val] of Object.entries(data)) {
			if (val) {
				url += `${key}=${val}&`
			}
		}
		if (url.slice(-1)) {
			url = url.substring(0, url.length - 1)
		}
	}

	try {
		const response = await fetch(url, requestOptions)
		if (response.status === 200) {
			const result = await response.json()
			const data = result?.data
			return { isSuccess: true, data: data, result: result }
		} else if (response.status === 401) {
		} else if (response.status === 417 || response.status === 503) {
			const errorResponse = await response.json()

			return {
				isSuccess: false,
				data: errorResponse
			}
		} else {
			const errorResponse = await response.json()

			return {
				isSuccess: false,
				data: errorResponse
			}
		}
	} catch (error) {
		return {
			isSuccess: false,
			data: {
				error: error.message || 'An error occurred. Please try again.'
			}
		}
	}
}
