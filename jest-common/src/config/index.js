/*
 * @Author: xiaowei
 * @Date: 2019-11-05 19:03:15
 * @LastEditors: xiaowei
 * @LastEditTime: 2020-08-07 11:46:18
 * @Description: 全局配置文件
 */

/**
 * 顶级域名
 */
const DOMAIN = "datamesh.com";
const PORT = "";
/**
 * 主页二级域名
 */
const HOME_SLD = "www";
const COMPANY_SLD = "console";

/**
 * RE 中通话的方式链接方式
 * 0： 通话以点对点的方式建立
 * 1： 通话将通过kms转发
 */
export const CONVERSATION_TYPE = 0;

export const HOME_PAGE_URL = `//${HOME_SLD}.${DOMAIN}${PORT ? ":" : ""}${PORT}`; // 主页地址
export const COMPANY_PAGE_URL = `/${COMPANY_SLD}/`; // 企业管理端地址
export const LOGOUT_REDIRECT_URL = ``; // 服务登出后跳转
export const COOKIE_DOMAIN = `.${DOMAIN}`; // cookie DOMAIN
export const SIGN_SUCCESSED = ``; // 用户注册完成后跳转地址
export const COMPANY_ACCOUNT_SUFFIX = "@dcs.datamesh.com"; // 用户账号后缀

// 客户端token
export const ACCOUNT_TOKEN = "DCS_ACCOUNT_TOKEN";
export const ACCOUNT_REFRESH_TOKEN = "DCS_ACCOUNT_REFRESH_TOKEN";
// 企业端token
export const COMPANY_ACCOUNT_TOKEN = "DCS_COMPANY_ACCOUNT_TOKEN";
export const COMPANY_ACCOUNT_REFRESH_TOKEN =
  "DCS_COMPANY_ACCOUNT_REFRESH_TOKEN";
// 平台端token
export const PLATFORM_ACCOUNT_TOKEN = "DCS_PLATFORM_ACCOUNT_TOKEN";
export const PLATFORM_ACCOUNT_REFRESH_TOKEN =
  "DCS_PLATFORM_ACCOUNT_REFRESH_TOKEN";

// 支付系统 stripe token
export const STRIPE_TOKEN = "pk_test_TL0ctjtsEXX1R7qvfJqXbrTs";

// 各项服务的URL地址
export const SERVICES_URL_LIST = {
  baseUrl: DOMAIN + `${PORT ? ":" : ""}` + PORT + "/",
  services: [
    {
      name: "group",
      url: "/group",
      icon: "",
      description: "group",
      disable: true,
      roleVisible: ["user"],
      guideIndex: 2
    },
    {
      name: "myspace",
      url: "/account/myspace",
      icon: "",
      description: "My Space",
      disable: true,
      roleVisible: ["user"],
      guideIndex: 3
    }
  ]
};

// 路由白名单
export const ROUTER_WHITE_LIST = ["/login", "/console/"];

// 资源上传文件类型
export const LIBRARY_CATEGORE_TYPE = {
  // fbx: {
  //   id: 1,
  //   name: "fbx",
  //   desc: "FBX File",
  //   icon: "icon-file_fbx"
  // },
  // glb: {
  //   id: 2,
  //   name: "glb",
  //   desc: "glTF File",
  //   icon: "icon-file_oa"
  // },
  model3d: {
    id: 1,
    name: "fbx",
    desc: "FBX File",
    icon: "icon-file_3d"
  },
  ab: {
    id: 3,
    name: "ab",
    desc: "Asset bundle File",
    icon: "icon-file_oa"
  },
  image: {
    id: 4,
    name: "image",
    desc: "Image File",
    icon: "icon-file_pic"
  },
  video: {
    id: 5,
    name: "video",
    desc: "Video File",
    icon: "icon-file_video"
  },
  audio: {
    id: 6,
    name: "audio",
    desc: "Audio File",
    icon: "icon-file_music"
  },
  doc: {
    id: 7,
    name: "doc",
    desc: "Word Document File",
    icon: "icon-file_word_office"
  },
  pdf: {
    id: 8,
    name: "pdf",
    desc: "PDF File",
    icon: "icon-file_pdf"
  },
  excel: {
    id: 9,
    name: "excel",
    desc: "Excel File",
    icon: "icon-file_excel_office"
  },
  ppt: {
    id: 10,
    name: "ppt",
    desc: "PPT File",
    icon: "icon-file_ppt_office"
  },
  dir: {
    id: 11,
    name: "dir",
    desc: "Script Model File",
    icon: "icon-file_oa"
  },
  log: {
    id: 12,
    name: "log",
    desc: "Log File",
    icon: ""
  },
  dirproj: {
    id: 13,
    name: "dir",
    desc: "Script Model File",
    icon: "icon-file_oa"
  },
  dirpkg: {
    id: 14,
    name: "dir",
    desc: "Script Model File",
    icon: "icon-file_oa"
  },
  fzzxdir: {
    id: 15,
    name: "dir",
    desc: "Script model File",
    icon: "icon-file_oa"
  },
  modelError: {
    id: 99,
    name: "error",
    desc: "Model Erroe",
    icon: "icon-file_model_error"
  },
  other: {
    id: 999,
    name: "other",
    desc: "Other File",
    icon: "icon-file_unknown"
  }
};
// 允许上传的文件类型
// export const LIBRARY_UPLOAD_FILE_ACCEPT = ".fbx,.glb,.ab,.jpeg,.jpg,.png,.mp4";
export const LIBRARY_UPLOAD_FILE_ACCEPT = "*";

// 第三方登录provider
export const THIRDPARTY_PROVIDER = {
  microsoft: 1
};

// 第三方登录地区
export const THIRDPARTY_AZURE_REGION =
  window.THIRDPARTY_AZURE_REGION || "azure-global";

// azure第三方登录
export const THIRDPARTY_LOGIN_LIST = {
  "azure-cn": [/*"azure-cn",*/ "azure-global"],
  "azure-de": ["azure-de", "azure-global"],
  "azure-global": ["azure-global"]
};

// azure第三方登录配置 = = 管理端
export const THIRDPARTY_LOGIN_LIST_CONFIG = [
  "azure-global",
  "azure-cn",
  "azure-de",
  "active-directory"
];

// 分级权限
export const GRADING_AUTHORITY = {
  "add-user": {
    id: 0
  },
  "modify-pwd": {
    id: 1
  },
  "add-license": {
    id: 2
  },
  "event-manage": {
    id: 7
  }
};

// 用户注册来源
export const USER_REGISTER_SOURSE = [
  {
    id: 0,
    sourse: "officialInfo",
    name: "Official Information"
  },
  {
    id: 1,
    sourse: "wechatPush",
    name: "Wechat Push"
  },
  {
    id: 2,
    sourse: "salesCall",
    name: "Sales Call"
  },
  {
    id: 3,
    sourse: "channelRmd",
    name: "Channel Recommendation"
  },
  {
    id: 4,
    sourse: "offlineActivities",
    name: "Offline Activities"
  },
  {
    id: 5,
    sourse: "other",
    name: "Outhor"
  }
];

// 平台端企业自定义配置支持配置码
export const COMPANY_CUSTOM_CONFIG_CODE = ["SUPPORT"];

// license 邮箱
export const LICENSE_EMAIL = window.LICENSE_EMAIL || {
  "zh-cn": unescape("license%40datamesh.com"),
  en: unescape("license%40datamesh.com"),
  ja: unescape("license%40datamesh.co.jp")
};
// license 类型
export const LICENSE_TYPE_LIST = [
  {
    type: "TRIAL",
    classification: ["company", "person"],
    value: "试用",
    timeType: "DAY"
  },
  {
    type: "ENTERPRISE_ANNUAL",
    classification: ["company"],
    value: "企业按年订阅",
    timeType: "YEAR"
  },
  {
    type: "ENTERPRISE_MONTHLY",
    classification: ["company"],
    value: "企业按月订阅",
    timeType: "MONTH"
  },
  {
    type: "PERSONAL_ANNUAL",
    classification: ["person"],
    value: "个人按年订阅",
    timeType: "YEAR"
  },
  {
    type: "PERSONAL_MONTHLY",
    classification: ["person"],
    value: "个人按月订阅",
    timeType: "MONTH"
  },
  {
    type: "FORMALLY_AUTHORIZED",
    classification: ["fzzx"],
    value: "纺织中心正式授权",
    timeType: "MONTH"
  }
];
