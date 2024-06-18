import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    { path: '/', redirect: '/home' },
    { path: '/home', component: () => import('../views/CalebHome.vue') },
    { path: '/login', component: () => import('../views/CalebLogin.vue') },
    { path: '/register', component: () => import('../views/CalebRegister.vue') },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach((to, from, next) => {
    const token = localStorage.getItem('token');
    const isAuthenticated = !!token;
    //console.log('__TOKEN__', token);
    
    const unauthenticatedPaths = ['/login', '/register'];

    if (isAuthenticated) {
        if (unauthenticatedPaths.includes(to.path)) {
            next('/home');
        } else {
            next();
        }
    } else {
        if (unauthenticatedPaths.includes(to.path)) {
            next();
        } else {
            next('/login');
        }
    }
});

export default router;