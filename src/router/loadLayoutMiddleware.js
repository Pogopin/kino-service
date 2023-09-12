export const AppLayouts = {
  default: "default",
  login: "login",
  error: "error",
};

export const AppLayoutToFileMap = {
  default: "AppLayoutDefault.vue",
  login: "AppLayoutLogin.vue",
  error: "AppLayoutError.vue",
};

export async function loadLayoutMiddleware(route) {
  const { layout } = route.meta;
  const normalizedLayoutName = layout || AppLayouts.default;
  const fileName = AppLayoutToFileMap[normalizedLayoutName];
  const fileNameWithoutExtension = fileName.split(".vue")[0];

  const component = await import(`../layouts/${fileNameWithoutExtension}.vue`);
  route.meta.layoutComponent = component.default;
}
