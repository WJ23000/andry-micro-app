import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Index from "@/app2/src/views/Index.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
	{
		path: window.__MICRO_APP_BASE_ROUTE__ || '/',
		name: "Index",
		component: Index
	},
];
const router = new VueRouter({
	routes
});

export default router;
