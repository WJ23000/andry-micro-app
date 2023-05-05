import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import HeaderOutline from "@/base-app/src/views/view-outline/header-outline/HeaderOutline.vue";
import LeftSiderOutline from "@/base-app/src/views/view-outline/LeftSiderOutline.vue";
import App1 from "@/base-app/src/views/app1/Index.vue";
import App2 from "@/base-app/src/views/app2/Index.vue";
import App3 from "@/base-app/src/views/app3/Index.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
	{
		path: "/",
		component: HeaderOutline,
		children: [
			{
				path: "/",
				component: LeftSiderOutline,
				children: [
					{
						path: '/app1',
						name: 'app1',
						component: App1,
					},
					{
						path: '/app2',
						name: 'app2',
						component: App2,
					},
					{
						path: '/app3',
						name: 'app3',
						component: App3,
					},
				]
			},
		]
	}
];


const router = new VueRouter({
	routes
});

export default router;
