/** 提取权限菜单 */
const extractSiders = (menus: any, roles: any) => menus.filter((item: any) => {
    // 没有子路由时检查当前路由
    if (!item.children) return !!~roles.indexOf(item.path)
    item.children = extractSiders(item.children, roles)
    return item.children.length
})

/** 提取路由 */
const extractRoutes = (arr: any) => {
    const routes: any = []
    arr.forEach((item: any) => {
        let { children } = item
        children ? routes.push(...extractRoutes(children)) : routes.push(item)
    })
    return routes
}

export {
    extractSiders,
    extractRoutes,
}