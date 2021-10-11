<template>
  <div id="header-wrap">
    <div class="header-icon" @click="navMenuState">
      <svg-icon
        class="icons"
        iconClass="icon_lz_manage"
        className="icon_lz_manage"
      />
      <div class="iconTwo">
          <img class="userImg" src="https://tpc.googlesyndication.com/daca_images/simgad/7737132290790046573">
          <span class="userNameNew">管理员</span>
        <svg-icon
          class="iconTwos"
          iconClass="icon_user_name"
          className="icon_user_name"
        />
      </div>
    </div>
  </div>
</template>
<script>
import { useStore } from 'vuex';
export default {
  name: "Header",
  setup(){
    const store = useStore()
    const navMenuState = () => {
      store.commit('SET_ISCOLLAPSE');
    }
    return { navMenuState }
  }
};
</script>

<style lang="scss" scoped>
@import "../../../styles/config.scss";
#header-wrap {
  position: fixed;
  top: 0;
  right: 0;
  left: $navMenu;
  height: 75px;
  background-color: #fff;
  @include webkit(transition, all .5s ease 0s);
  @include webkit(box-shadow, 0 3px 16px 0 rgba(0, 0, 0, 0.1));
}
.open{
  #header-wrap{
    left: $navMenu;
  }
}
.close{
  #header-wrap{
    left: 64px;
  }
}
.header-icon {
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  padding: 0 32px;
}
.icons {
  display: block;
  height: 30px;
  width: 30px;
  cursor: pointer;
}
.iconTwo {
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  padding: 22px 23px;
  border-left: 1px solid rgb(240, 240, 240);
}
.iconTwos {
  height: 30px;
  width: 30px;
  cursor: pointer;
}
.userImg{
    width: 30px;
    height: 30px;
    border-radius: 100px;
    display: inline-block;
    position: absolute;
    right: 160px;
    margin-top: 1px;
}
.userNameNew{
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 75px;
    width: 70px;
    font-size: 14px;
}

</style>
