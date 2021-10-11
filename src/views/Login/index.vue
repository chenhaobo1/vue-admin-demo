<template>
  <div id="login">
    <div class="login-wrap">
      <ul class="menu-tab">
        <li
          v-for="(item, index) in menuTab"
          :class="{ current: isActive === index }"
          :key="index"
          @click="toggleMenu(index)"
        >
          {{ item.txt }}
        </li>
      </ul>
      <!-- 表单 -->
      <el-form
        :model="ruleForm"
        status-icon
        :rules="rules"
        ref="root"
        class="login-form"
        size="medium"
      >
        <el-form-item prop="username">
          <label>邮箱</label>
          <el-input
            type="text"
            v-model="ruleForm.username"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <label>密码</label>
          <el-input
            type="password"
            v-model="ruleForm.password"
            autocomplete="off"
            minlength="6"
            maxlength="20"
          ></el-input>
        </el-form-item>
        <el-form-item prop="passwords" v-if="isActive !== 0">
          <label>重复密码</label>
          <el-input
            type="password"
            v-model="ruleForm.passwords"
            autocomplete="off"
            minlength="6"
            maxlength="20"
          ></el-input>
        </el-form-item>
        <el-form-item prop="code">
          <label>验证码</label>
          <el-row :gutter="15">
            <el-col :span="15"
              ><el-input
                v-model="ruleForm.code"
                minlength="6"
                maxlength="6"
              ></el-input
            ></el-col>
            <el-col :span="9">
              <el-button
                class="button-block"
                type="success"
                :disabled="codeButtonStatus.status"
                @click="getSmsOne()"
                >{{ codeButtonStatus.text }}</el-button
              >
            </el-col>
          </el-row>
        </el-form-item>
        <el-form-item>
          <el-button
            class="login-btn button-block"
            type="danger"
            @click="submitForm"
            :disabled="submitDis"
            >{{ isActive !== 0 ? "注册" : "登录" }}</el-button
          >
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import { reactive, ref } from "@vue/reactivity";
import { validateMethods } from "./validate";
import { buttonMethods } from "./buttonMethod";

function useRuleForm() {
  //初始化变量
  const ruleForm = reactive({
    username: "3517@qq.com",
    password: "",
    passwords: "",
    code: "",
    srcTwo: "",
  });
  const isActive = ref(0);
  // 验证码延迟状态
  const codeButtonStatus = reactive({
    status:false,
    text:"获取验证码"
  })
  // 按钮默认方法
  const submitDis = ref(false);
  // 提交方法
  const root = ref(null);
  return {
    ruleForm,
    isActive,
    submitDis,
    root,
    codeButtonStatus,
  };
}
export default {
  naem: "login",
  setup() {
    const menuTab = reactive([{ txt: "登录" }, { txt: "注册" }]);
    // 变量存放
    let {
      ruleForm,
      isActive,
      submitDis,
      root,
      codeButtonStatus,
    } = useRuleForm();
    // 登录注册验证方法
    let { rules } = validateMethods(ruleForm, isActive);
    // 按钮方法
    let { submitForm, getSmsOne, toggleMenu } = buttonMethods(
      isActive,
      ruleForm,
      root,
      codeButtonStatus,
      submitDis
    );
    return {
      ruleForm,
      menuTab,
      isActive,
      rules,
      root,
      toggleMenu,
      submitForm,
      getSmsOne,
      submitDis,
      codeButtonStatus,
    };
  },
};
</script>

<style lang="scss" scoped>
#login {
  height: 100vh;
  background-color: #292929;
  // background-image: url(../../assets/1.jpg);
  // background-size: 100% 100%;
}
.login-wrap {
  width: 330px;
  position: absolute;
  top: 13vh;
  left: 50%;
  transform: translate(-50%);
  .menu-tab {
    text-align: center;
    li {
      display: inline-block;
      width: 88px;
      line-height: 36px;
      font-size: 14px;
      color: #fff;
      border-radius: 5px;
      cursor: pointer;
    }
    .current {
      background-color: rgba(170, 170, 170, 0.2);
    }
  }
}
.login-form {
  margin-top: 40px;
  label {
    display: block;
    color: #fff;
    font-size: 14px;
    margin-top: 0;
  }
  .button-block {
    width: 100%;
    display: block;
  }
  .login-btn {
    margin-top: 25px;
  }
}
.el-form-item {
  margin-bottom: 15px;
}
</style>
