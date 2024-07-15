import { defineStore } from 'pinia'

export const useAccountStore = defineStore('account', {
    state: () => {
        return {
            account: '测试'
        }
    },
    // actions: {
    //     login(account) {
    //         this.account = account
    //     }
    // }
})
