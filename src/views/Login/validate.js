import {
    // stripscript,
    validateEmail,
    validateCodes,
    validatePass,
} from "@/utils/validate.js";
import { reactive } from "@vue/reactivity";
export function validateMethods(ruleForm, isActive) {
    // 验证邮箱
    let validateUsername = (rule, value, callback) => {
        if (value === "") {
            callback(new Error("请输入邮箱"));
        } else if (validateEmail(value)) {
            callback(new Error("邮箱格式错误"));
        } else {
            callback();
        }
    };
    // 验证密码
    var validatePassword = (rule, value, callback) => {
        // 过滤后的值
        if (value === "") {
            callback(new Error("请输入密码"));
        } else if (validatePass(value)) {
            callback(new Error("密码为6至20位数字+字母"));
        } else {
            callback();
        }
    };
    //验证重复密码
    var validatePasswords = (rule, value, callback) => {
        if (isActive.value === 0) {
            callback();
        }
        if (value === "") {
            callback(new Error("请再次输入密码"));
        } else if (value !== ruleForm.password) {
            callback(new Error("重复密码不正确"));
        } else {
            callback();
        }
    };
    // 验证验证码
    var validateCode = (rule, value, callback) => {
        if (value === "") {
            return callback(new Error("请输入验证码"));
        } else if (validateCodes(value)) {
            return callback(new Error("验证码格式有误"));
        } else {
            callback();
        }
    };
    const rules = reactive({
        username: [{ validator: validateUsername, trigger: "blur" }],
        password: [{ validator: validatePassword, trigger: "blur" }],
        passwords: [{ validator: validatePasswords, trigger: "blur" }],
        code: [{ validator: validateCode, trigger: "blur" }],
    });
    return { rules }
}