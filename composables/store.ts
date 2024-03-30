// 使用composables/目录将你的Vue组合式函数自动导入到你的应用程序中。
import { defineStore } from 'pinia';
interface State {
    layout_name: MaybeRef
}
export const useNuxtStore = defineStore('nuxtStore', {
    state: (): State => ({
        layout_name: 'default'
    }),
    actions: {
        setLayoutName(name: string) {
            this.layout_name = name
        },
    },
})

