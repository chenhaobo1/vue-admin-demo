<template>
    <div id="main-wrap">
        <router-view/>
    </div>
</template>
<script>
import { reactive, ref } from '@vue/reactivity'
export default {
    name:'Main',
    setup(){
      const str = ref('{"name":"dasdasd","title":"2222"}')
      const json = reactive(JSON.parse(str.value))
      console.log(str);
      console.log(json);
    }
}
</script>

<style lang="scss" scoped>
@import "../../../styles/config.scss";
#main-wrap{
    position: fixed;
    top: 75px;
    left: $navMenu;
    right: 0;
    bottom: 0;
    @include webkit(transition, all .5s ease 0s);
    border: 30px solid #f7f7f7;
    @include webkit(box-sizing, border-box);
}

.open{
  #main-wrap{
    left: $navMenu;
  }
}
.close{
  #main-wrap{
    left: 64px;
  }
}
</style>