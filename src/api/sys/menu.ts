import { defHttp } from '/@/utils/http/axios';
import { getMenuListResultModel } from './model/menuModel';

enum Api {
  GetMenuList = '/getMenuList',
  GetAllMenu = '/menu',
  createMenu = '/menu',
  updateMenu = '/menu',
}

/**
 * @description: Get user menu based on id
 */

export const getMenuList = () => {
  return defHttp.get<getMenuListResultModel>({ url: Api.GetMenuList });
};

export const getAllMenu = () => {
  return defHttp.get({ url: Api.GetAllMenu })
}

export const createMenu = (data) => {
  return defHttp.post({ url: Api.createMenu, data })
}

export const updateMenu = (data) => {
  return defHttp.put({ url: Api.updateMenu, data })
}
