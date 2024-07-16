import {
	request
} from "@/utils/request";

// /**
//  * 微信一键登录
//  */
// export const loginInWx = (data) => {
// 	return request(
// 		'/user/token',
// 		'POST',
// 		data,
// 	})
// }
export const loginInWx = (data) => {
	return request('/user/token', 'POST', data, {})
}