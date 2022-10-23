import {
  defineComponent,
  reactive,
  toRefs,
  ref,
  computed,
  onMounted,
} from "@vue/composition-api";

import SidebarItem from "./components/SidebarItem/index.vue";

import TagsView from "./components/TagsView/index.vue";

import { setting } from "../settings";

export default defineComponent({
  name: "",
  components: { SidebarItem, TagsView },
  setup(props, { root }) {
    const item = {
      date: "2016-05-02",
      name: "王小虎",
      address: "上海市普陀区金沙江路 1518 弄",
    };

    // 这个菜单是后端返回的
    const permission_routes = [
      {
        path: "/dashboard",
        meta: {
          hidden: false,
          title: "首页",
          icon: "el-icon-delete-solid",
        },
      },
      {
        path: "/",
        meta: {
          hidden: false,
          title: "多级菜单",
          icon: "el-icon-delete-solid",
        },
        children: [
          {
            path: "/categreg",
            meta: {
              hidden: false,
              title: "二级菜单",
              icon: "el-icon-delete-solid",
            },
            children: [
              {
                path: "/categregChild",
                meta: {
                  hidden: false,
                  title: "三级菜单",
                  icon: "el-icon-delete-solid",
                },
              },
            ],
          },
        ],
      },
    ];
    // 是否展开
    const isCollapse = ref(false);
    // 侧边菜单的宽度
    const asideWidth = ref("");
    asideWidth.value = setting.asideWidth;
    // 顶部菜单的高度
    const headerHight = ref("");
    headerHight.value = setting.headerHight;
    // 打开菜单
    const handleOpen = (key: any, keyPath: any) => {
      console.log(key, keyPath);
    };
    // 关闭菜单
    const handleClose = (key: any, keyPath: any) => {
      console.log(key, keyPath);
    };
    // 打开菜单的回调
    const handleShow = () => {
      isCollapse.value = false;
      asideWidth.value = "200px";
    };
    // 关闭菜单的回调
    const handleCloseMenu = () => {
      isCollapse.value = true;
      asideWidth.value = "64px";
    };
    // 给页面绑定的key
    const key = computed(() => {
      root.$route.path;
    });
    // 当前点亮的菜单
    const activeMenu = computed(() => {
      const route = root.$route;
      const { meta, path } = route;
      if (meta?.activeMenu) {
        return meta.activeMenu;
      }
      return path;
    });

    // 改变项目的模式，明亮或者黑暗
    const themeData = reactive({
      isDark: false,
    });
    const handleChangeMode = (mode: string) => {
      root.$store.commit("app/CHANGE_MODE", mode);
      if (!themeData.isDark) {
        window.document.documentElement.setAttribute("data-theme", "light");
      } else {
        window.document.documentElement.setAttribute("data-theme", "dark");
      }
      themeData.isDark = !themeData.isDark;
    };

    // 侧边栏背景颜色
    const handleChnageAsideBgColor = () => {
      const mode = root.$store.getters.mode;
      console.log("mode", mode);
      if (mode === "light") {
        return setting.asideBgColorLight;
      } else {
        return setting.asideBgColorDark;
      }
    };

    // 侧边栏文本颜色
    const handleChangeAsideTextColor = () => {
      const mode = root.$store.getters.mode;
      console.log("mode", mode);
      if (mode === "light") {
        return setting.asideTextColorLight;
      } else {
        return setting.asideTextColorDark;
      }
    };

    onMounted(() => {
      themeData.isDark = false
      handleChangeMode('light');
    });

    return {
      tableData: Array(20).fill(item),
      isCollapse,
      asideWidth,
      handleOpen,
      handleClose,
      handleShow,
      handleCloseMenu,
      key,
      permission_routes,
      activeMenu,
      headerHight,
      setting,
      handleChnageAsideBgColor,
      handleChangeMode,
      handleChangeAsideTextColor,
      themeData,
    };
  },
});
