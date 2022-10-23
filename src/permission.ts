import router from "./router";
import store from "./store";

router.beforeEach(async (to, from, next) => {
  console.log("to", to);

  if (to.path === "/login") {
    // if is logged in, redirect to the home page
    next({ path: "/aaa" });
  } else {
    try {
      const accessRoutes = await store.dispatch("permission/generateRoutes");

      router.addRoutes(accessRoutes);

      // next({ ...to, replace: true });
      next();
    } catch (error) {
      next(`/login?redirect=${to.path}`);
    }
  }
});
