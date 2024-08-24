import { defineConfig } from "umi";

export default defineConfig({
  routes: [
    { path: "/", component: "home", title: "Home" },
    { path: "/home", component: "home", title: "Home" },
    { path: "/order", component: "order", title: "Order" },
    { path: "/user", component: "user", title: "User" },
  ],
  npmClient: "pnpm",
});
