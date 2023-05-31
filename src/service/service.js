import axios from 'axios';

export const shopsService = axios.create({
    baseURL: '',
  });

export const getShops = async () => {
    const { data } = await shopsService.get('');
    return data;
  };
  export const fetchShopsByName = async name => {
    const { data } = await shopsService.get(`${name}`);
    return data;
  };