<template>
  <div id="nav-wrap">
    <img class="nav-wrap-logo" src="@/assets/logo.png" />
    <el-menu
      :default-active="defaultActive"
      class="el-menu-vertical-demo"
      background-color="transparent"
      text-color="#fff"
      :collapse="isCollapse"
      router
    >
      <template v-for="(item, index) in routes">
        <el-submenu v-if="!item.hidden" :key="item" :index="index + ''">
          <template #title>
            <!-- <i :class="item.meta.icon"></i> -->
            <svg-icon :iconClass="item.meta.icon" :className="item.meta.icon" />
            <span>{{ item.meta.name }}</span>
          </template>
          <el-menu-item
            v-for="subItem in item.children"
            :key="subItem"
            :index="subItem.path"
            >{{ subItem.meta.name }}</el-menu-item
          >
        </el-submenu>
      </template>
    </el-menu>
  </div>
</template>
<script>
import { computed, ref } from "@vue/reactivity";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
export default {
  name: "Nav",
  setup() {
    const store = useStore();
    const isCollapse = computed(() => store.state.isCollapse);

    // 获取路由信息的方法
    const router = useRouter();
    //路由遍历列表
    const routes = ref(router.options.routes);
    //获取当前页面路由
    const defaultActive = ref(router.options.history.location);
    return { routes, defaultActive, isCollapse };
  },
};
</script>

<style lang="scss" scoped>
@import "../../../styles/config.scss";
#nav-wrap {
  position: fixed;
  top: 0;
  left: 0;
  width: $navMenu;
  height: 100vh;
  @include webkit(transition, all 0.4s ease 0s);
  background-color: #344a5f;
  .nav-wrap-logo {
    @include webkit(transition, all 0.5s ease 0s);
    width: 90px;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    margin: 20px 0 10px 0;
  }
}
.el-menu {
  border-right: none;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: $navMenu;
  min-height: 400px;
}
.svg-icon {
  width: 25px;
  height: 25px;
  margin-top: -4px;
  margin-right: 10px;
  color: white;
}
.open {
  #nav-wrap {
    width: $navMenu;
  }
}
.close {
  #nav-wrap {
    width: 64px;
    .nav-wrap-logo {
      width: 30px;
      @include webkit(transition, all 0.5s ease 0s);
    }
  }
  .el-submenu .el-menu-item {
    display:none;
    &.is-active {
      background-color: #344a5f !important;
    }
  }
}
</style>
