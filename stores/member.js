import {
	defineStore
} from 'pinia'
import {
	computed,
	ref
} from 'vue'


export const useMemberStore = defineStore('member', () => {
	const member = ref({})
	const isLogin = computed(() => Object.keys(member.value).length > 0)
	const setMember = (data) => {
		member.value = data
		console.log(member.value);
	}
	return {
		member,
		isLogin,
		setMember
	}

})