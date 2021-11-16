import axios from 'axios';

type GetDataType = {
  url: string;
  params?: null | string;
  headers?: any;
};

type PostDataType = {
  url: string;
  data: any;
  params?: null | string;
  headers?: any;
};
type PutData = {
  url: string;
  data: any;
  params?: any;
  headers?: any;
};

export const getData = ({ url, params = null, headers = {} }: GetDataType) => {
  const config: any = {
    method: 'get',
    url,
    params,
    headers,
  };
  return axios(config);
};

export const postData = ({
  url,
  data,
  params = null,
  headers = {},
}: PostDataType) => {
  const config: any = {
    method: 'post',
    url,
    data,
    params,
    headers,
  };
  return axios(config);
};

export const putData = ({ url, data, params, headers = {} }: PutData) => {
  const config: any = {
    method: 'put',
    url,
    data,
    params,
    headers,
  };
  return axios(config);
};
