/*
 * @Author: zhangzheng
 * @Date: 2020-08-21 11:16:35
 * @LastEditors: zhangzhengq
 * @LastEditTime: 2020-08-26 18:30:12
 * @Descripttion:
 */
module.exports = {
  get: jest.fn(() => Promise.resolve({ status: 200 }))
};
