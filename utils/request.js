export const baseUrl = 'http://localhost:3000'
export const axiosInstance = options => {
	return new Promise((resolve, reject) => {
		uni.request({
			url: baseUrl + options.url,
			method: options.method,
			data: options.data,

			success: res => {
				resolve(res.data)
			},

			fail: error => {
				reject(error)
			}
		})
	})
}