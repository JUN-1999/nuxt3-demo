// 中间件
export default defineNuxtRouteMiddleware((to, from) => {
    const store = useNuxtStore(); // 需要放到函数内部
    console.log(store.layout_name);
    console.log('to', to);
    console.log('from', from);

    setPageLayout(store.layout_name);
    // if (to.params.id === '1') {
    //   return abortNavigation()
    // }
    // 在实际应用中，你可能不会将每个路由重定向到 `/`
    // 但是在重定向之前检查 `to.path` 是很重要的，否则可能会导致无限重定向循环
    // let flag=true;
    // if (to.path !== '/' && flag==false) {
    //   return navigateTo('/')
    // }
})