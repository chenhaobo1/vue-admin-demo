import { createStore } from "vuex";
import Cookies from "js-cookie";

export default createStore({
  state: {
    // isCollapse:JSON.parse(sessionStorage.getItem('isCollapse')) || false
    isCollapse:JSON.parse(Cookies.get('isCollapse')) || false

  },
  getters:{
    isCollapse: state => state.isCollapse
  },
  mutations: {
    SET_ISCOLLAPSE(state){
      state.isCollapse = !state.isCollapse
      Cookies.set('isCollapse',JSON.stringify(state.isCollapse))
      // sessionStorage.setItem('isCollapse',JSON.stringify(state.isCollapse))
    }
  },
  actions: {},
  modules: {},
});
