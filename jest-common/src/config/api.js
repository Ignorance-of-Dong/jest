/*
 * @Author: xiaowei
 * @Date: 2019-11-08 14:34:25
 * @LastEditors: zhangzheng
 * @LastEditTime: 2020-07-29 14:15:38
 * @Description: API接口配置
 */

/**
 * 用户API
 */
// 通过用户名校验是否存在
export const USER_REGISTER_CHECK = {
  url: "/api/v1/auth/user/check",
  method: "get"
};
// license订阅列表
export const LICENSE_SUBSCRIPTION_LIST = {
  url: "/api/v1/auth/subscription/list",
  method: "post"
};
// license订阅详情
export const LICENSE_SUBSCRIPTION_DETAILS = {
  url: "/api/v1/auth/subscription/details",
  method: "get"
};
// 图片资源上传
export const RESOURCE_INAGE_UPLOAD = {
  url: "/api/v1/resource/common/upload",
  method: "upload"
};
// 当前订阅状态及管理员列表
export const LICENSE_STATE_DETAILE = {
  url: "/api/v1/auth/enterprise/subscription/statusAndAdmin",
  method: "post"
};
// 订阅作废
export const LICENSE_SUBSCRIPTION_INVALID = {
  url: "/api/v1/auth/platform/subscription/invalid",
  method: "post"
};
// 用户最近订阅license详情
export const COMPANY_LATLEY_LICENSE_DETAIL = {
  url: "/api/v1/auth/subscription/web/current/details",
  method: "get"
};
// 当前用户订阅状态
export const LICENSE_CURRENT_STATUS = {
  url: "/api/v1/auth/subscription/current/detailsAndStatus",
  method: "get"
};
// license资源使用数量信息
export const LICENSE_RESPURCE_AMOUNT = {
  url: "/api/v1/resource/file/amount",
  method: "get"
};
