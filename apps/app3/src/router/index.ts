import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Index from "@/app3/src/views/Index.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
	{
		path: "/app3",
		name: "Index",
		component: Index
	},
];
const router = new VueRouter({
	routes
});

export default router;
