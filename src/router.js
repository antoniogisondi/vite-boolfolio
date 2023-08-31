import { createRouter, createWebHistory } from "vue-router";

import HomePage from './pages/HomePage.vue';
import ProjectList from './pages/ProjectList.vue';
import ProjectTypeList from './pages/ProjectTypeList.vue';
import TechnologyList from './pages/TechnologyList.vue';
import AboutUs from './pages/AboutUs.vue';
import SingleProject from './pages/SingleProject.vue';
import NotFound from './pages/NotFound.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'homepage',
            component: HomePage
        },
        {
            path: '/projects',
            name: 'projects',
            component: ProjectList
        },
        {
            path: '/projects-type',
            name: 'projects_type',
            component: ProjectTypeList
        },
        {
            path: '/technology',
            name: 'technology',
            component: TechnologyList
        },
        {
            path: '/about-us',
            name: 'about_us',
            component: AboutUs
        },
        {
            path: '/projects/:slug',
            name: 'single_project',
            component: SingleProject
        },
        {
            path: '/page-not-found',
            name: 'not_found',
            component: NotFound
        },
        {
            path: '/:catchAll(.*)',
            redirect: '/page-not-found'
        }
    ]
});

export { router };