import { defineAsyncComponent } from "vue";

const Navigation = defineAsyncComponent(() => import("./navigation/index.vue"));
const Home = defineAsyncComponent(() => import("./slogan/index.vue"));
const Top20 = defineAsyncComponent(() => import("./top20/index.vue"));
const Slick = defineAsyncComponent(() => import("./slick/index.vue"));


export { Navigation, Home, Top20, Slick };
