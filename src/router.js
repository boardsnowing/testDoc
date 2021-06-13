
import {createRouter, createWebHistory} from "vue-router";

import EditorComponent from './components/editor/editorComponent.vue';
import FrontPage from './components/front/frontPage.vue';
import TestComponent from './components/testing/testComponent.vue';

const routes = [
    {
      path: "/",
      name: "front",
      component: FrontPage
    },
    {
      path: "/edit/:id",
      name: "editor",
      component: EditorComponent
    },
    {
      path: "/testing/:id",
      name: "testing",
      component: TestComponent
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;