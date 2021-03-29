export default [
    {
        path: '/',
        alias: '/home',
        name: 'home',
        component: () => import('@/views/home')
    },
    {
        path: '/scss',
        name: 'scss',
        component: () => import('@/views/scss')
    },
    {
        path: '*',
        name: 'notFound',
        component: () => import('@/views/notFound')
    }
]
