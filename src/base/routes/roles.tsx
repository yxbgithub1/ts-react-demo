const role1: any = ['/admin/jd/goods', '/admin/jd/orders', '/admin/jd/types']

const role2: any = ['/admin/wapp/goods', '/admin/wapp/orders', '/admin/wapp/types']

const role3: any = ['/admin/home']

const role4: any = ['/admin', ...role1, ...role2, ...role3]

export { role1, role2, role3, role4 }
