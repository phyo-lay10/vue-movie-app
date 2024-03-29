import { createApp } from "vue";
import App from "./App.vue";

// const router = createRouter({
//   history: createWebHistory(),
//   routes: [
//     {
//       path: "/",
//       component: () => import("./pages/Home.vue"),
//     },
//   ],
// });
// createApp(App).use(router).mount("#app");

import { router } from "./router";
import { createPinia } from "pinia";

const app = createApp(App);
app.use(router);
app.use(createPinia());
app.mount("#app");
