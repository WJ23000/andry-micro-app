import Vue, { VNode } from "vue";

declare global {
	namespace JSX {
		interface Element extends VNode { }
		interface ElementClass extends Vue { }
		interface IntrinsicElements {
			[elem: string]: any;
		}
	}
	interface Window {
		__MICRO_APP_ENVIRONMENT__: any;
		__MICRO_APP_PUBLIC_PATH__: any;
		__MICRO_APP_BASE_APPLICATION__: any;
		__MICRO_APP_BASE_ROUTE__: any;
		microApp: any;
	}
}
declare module "vue/types/vue" {
	interface Vue {
		$API_URL: string;
		$HOST: {
			LOGIN: string;
			FRONT: string;
			END: string;
		};
		$globalConfig: {
			BASE_API: string;
			HOST: string; // 基础私有化
		};
	}
}