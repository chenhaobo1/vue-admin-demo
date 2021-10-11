import sha1 from 'js-sha1';
import { ElMessage } from "element-plus";
import { getSms, Register, Login } from "@/api/login";
import { ref } from "@vue/reactivity";
export function buttonMethods(isActive, ruleForm, root, codeButtonStatus, submitDis) {
    // 选项卡方法
    const toggleMenu = (index) => {
        isActive.value = index;
        root.value.resetFields();
        codeButtonStatus.status = false
        codeButtonStatus.text = "获取验证码"
        clearInterval(timer.value)
    };
    // 登录注册按钮
    const submitForm = () => {
        root.value.validate((valid) => {
            if (valid) {
                isActive.value == 1 ? register() : login()
            } else {
                return false;
            }
        });
    };

    // 注册方法
    const register = (() => {
        let requestData = {
            username: ruleForm.username,
            password: sha1(ruleForm.password),
            code: ruleForm.code,
            module: 'register'
        }
        Register(requestData).then(response => {
            let data = response.data
            ElMessage.success({
                message: data.message,
                type: 'success'
            });
            toggleMenu(0)
        }).catch(error => {
            console.log(error);
        })
    })
    // 登录方法
    const login = (() => {
        let requestData = {
            username: ruleForm.username,
            password: sha1(ruleForm.password),
            code: ruleForm.code,
        }
        Login(requestData).then(response => {
            let data = response.data
            ElMessage.success({
                message: data.message,
                type: 'success'
            });
            root.value.$router.push({ name: 'Console' })
        }).catch(error => {
            console.log(error);
        })
    })
    // 获取验证码
    const getSmsOne = () => {
        if (ruleForm.username == "") {
            ElMessage.error("邮箱不能为空");
            return false;
        }
        let data = {};
        data.username = ruleForm.username;
        if (isActive.value !== 0) {
            data.module = 'register'
        } else {
            data.module = 'login'
        }
        codeButtonStatus.status = true
        codeButtonStatus.text = "发送中"
        setTimeout(() => {
            getSms(data)
                .then((response) => {
                    let data = response.data;
                    ElMessage.success({
                        message: data.message,
                        type: 'success'
                    });
                    submitDis.value = false
                    countDown(10)
                })
                .catch((error) => {
                    let data = error.resCode
                    if (data === 1002) {
                        codeButtonStatus.status = false
                        codeButtonStatus.text = "获取验证码"
                        clearInterval(timer.value)
                    }
                });
        }, 100)
    };
    // 倒计时
    const timer = ref(null)
    const countDown = ((number) => {
        if (timer.value) { clearInterval(timer.value) }
        let time = number
        timer.value = setInterval(() => {
            time--
            if (time === 0) {
                clearInterval(timer.value)
                codeButtonStatus.status = false
                codeButtonStatus.text = "再次发送"
            } else {
                codeButtonStatus.text = `倒计时${time}秒`
            }
        }, 1000)
    })
    return { submitForm, getSmsOne, toggleMenu }
}