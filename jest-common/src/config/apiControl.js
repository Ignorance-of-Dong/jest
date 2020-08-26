/*
 * @Author: zhangzheng
 * @Date: 2020-05-28 17:07:29
 * @LastEditors: zhangzheng
 * @LastEditTime: 2020-08-03 16:28:56
 * @Descripttion: 公共api
 */
import bus from "@/main.js";
import { requestControl } from "~/utils/request";
import {
  LICENSE_SUBSCRIPTION_LIST,
  LICENSE_SUBSCRIPTION_DETAILS,
  LICENSE_SUBSCRIPTION_INVALID,
  COMPANY_LATLEY_LICENSE_DETAIL,
  RESOURCE_INAGE_UPLOAD,
  LICENSE_STATE_DETAILE,
  LICENSE_CURRENT_STATUS,
  LICENSE_RESPURCE_AMOUNT
} from "./api";

// license订阅列表
export function licenseSubscriptionList(data) {
  return requestControl(LICENSE_SUBSCRIPTION_LIST, data, bus);
}
// license订阅详情
export function licenseSubscriptionDetail(data) {
  return requestControl(LICENSE_SUBSCRIPTION_DETAILS, data, bus);
}
// 图片资源上传
export function resourceImageUpload(data) {
  return requestControl(RESOURCE_INAGE_UPLOAD, data, bus);
}
// 当前订阅状态及管理员列表
export function licenseStateDetail(data) {
  return requestControl(LICENSE_STATE_DETAILE, data, bus);
}
// 订阅作废
export function licenseSubscriptionInvalid(data) {
  return requestControl(LICENSE_SUBSCRIPTION_INVALID, data, bus);
}
// 用户最近订阅license详情
export function companyLicenseLatleyDetail(data) {
  return requestControl(COMPANY_LATLEY_LICENSE_DETAIL, data || {}, bus);
}
// 当前用户订阅状态
export function licenseCurrentStatus(data) {
  return requestControl(LICENSE_CURRENT_STATUS, data || {}, bus);
}
// license资源使用数量信息
export function licenseResourceAmount(data) {
  return requestControl(LICENSE_RESPURCE_AMOUNT, data || {}, bus);
}
