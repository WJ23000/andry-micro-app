import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Index from "@/app1/src/views/Index.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
	{
		path: "/app1",
		name: "Index",
		component: Index
	},
];
const router = new VueRouter({
	routes
});

export default router;
