import { defineAsyncComponent } from "vue";

const Navigation = defineAsyncComponent(() => import("./navigation/index.vue"));
// const Slogan = defineAsyncComponent(() => import("./slogan/index.vue"));

export { Navigation };
