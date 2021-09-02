import instance from "@/utils/request.js"

// 获取验证码
export function getSms(data) {
    return instance.request({
        url: "/getSms/",
        method: "post",
        data: data
    })
}

// 注册
export function Register(data){
    return instance.request({
        url: "/register/",
        method: "post",
        data: data
    })
}

// 登录
export function Login(data){
    return instance.request({
        url: "/login/",
        method: "post",
        data: data
    })
}