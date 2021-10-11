<template>
  <div :class="[menuStatus ? 'close' : 'open']">
      <LayoutHeader/>
      <LayoutMain/>
      <LayoutNav/>
  </div>
</template>
<script>
import { computed } from '@vue/reactivity';
import LayoutHeader from './Components/Header.vue'
import LayoutMain from './Components/Main.vue'
import LayoutNav from './Components/Nav.vue'
import { useStore } from 'vuex';
export default {
    name:'Layout',
    components:{
        LayoutHeader,
        LayoutMain,
        LayoutNav
    },
    setup(){
        const store = useStore()
        const menuStatus = computed(() =>store.state.isCollapse )
        
        return { menuStatus }
    }
};
</script>

<style lang="scss" scoped></style>
