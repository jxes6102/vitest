import appView from '@/App.vue'

const routes = [
    // {
    //     path: "/",
    //     name: "index",
    //     title: "首頁",
    //     component: () => import("@/App.vue"),
    // },
    {
        path: "/",
        name: "index",
        title: "首頁",
        component: appView,
    },
];

export default routes;