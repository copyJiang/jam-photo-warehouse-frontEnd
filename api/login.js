import {
	axiosInstance
} from "@/utils/request";


export const loginInWx = (data) => {
	return axiosInstance({
		url: '/user/token',
		method: 'post',
		data
	})
}