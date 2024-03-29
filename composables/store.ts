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

