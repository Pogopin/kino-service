import { defineAsyncComponent } from "vue";

const Header = defineAsyncComponent(() => import("./header/index.vue"));

export { Header };
