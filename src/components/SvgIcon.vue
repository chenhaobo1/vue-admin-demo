<template>
  <svg :class="svgClass" aria-hidden="true">
    <use :xlink:href="iconName"></use>
  </svg>
  <!-- <div>{{plusOne}}</div>
  <button @click="aaa">ssss</button> -->
</template>

<script>
import { computed, ref } from "@vue/reactivity";
export default {
  name: "svgIcon",
  props: {
    iconClass: {
      type: String,
      defaul: "aaaa", //基础数据类型，直接赋值    对象数据类型 用函数复制()=>[]
      required: true, //必填项
      // vaildator:(value)=>{
      //     return value>0   校验
      // }
    },
    className: {
      type: String,
      defaul: "aaaa", //基础数据类型，直接赋值    对象数据类型 用函数复制()=>[]
      required: true,
    },
  },
  setup(props) {
    const msg = ref("dadsdadasd");

    const iconName = computed(() => `#icon-${props.iconClass}`);
    const svgClass = computed(() => {
      if (props.className) {
        return `svg-icon ${props.className}`;
      } else {
        return `svg-icon`;
      }
    });
    // const count = ref(10)

    // const aaa = () => {
    //     count.value++                         // === get:()=> count.value++
    // }
    // const plusOne = computed(()=>{
    //     return count.value + 1
    // })

    return { msg, iconName, svgClass };
  },
};
</script>

<style lang="scss" scoped></style>
