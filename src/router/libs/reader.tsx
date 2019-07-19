export const readerRoutes = (context: any) => {
    let children: any = []
    context.keys().forEach((key: any) => {
        let routes = context(key).default
        if (routes && routes.length) {
            children.push(...routes)
        }
    })
    return children
}