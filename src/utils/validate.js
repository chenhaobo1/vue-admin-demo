/**
 * 过滤特殊字符
 * @returns
 */
export function stripscript(str) {
  var pattern = new RegExp(
    "[`~!@#$%^&*()|{ }':;',\\[\\].<>/~!@#￥&*（）{}：；“”‘、，|《。》？、【】-]"
  );
  var rs = "";
  for (var i = 0; i < str.length; i++) {
    // 提取、替换
    rs = rs + str.substr(i, 1).replace(pattern, "");
  }
  return rs;
}

/**
 * 验证邮箱
 */
export function validateEmail(regEma) {
  let reg = /^([a-zA-Z]|[0-9])(\w|\\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
  return !reg.test(regEma);
}

/**
 * 验证密码 6-20位
 */
export function validatePass(regPass){
  let reg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$/;
  return !reg.test(regPass);
}

/**
 * 验证码校验
 */
export function validateCodes(regCode){
  let reg = /[a-z0-9]{6}/;
  return !reg.test(regCode);
}