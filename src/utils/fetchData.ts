/* eslint-disable @typescript-eslint/no-explicit-any */
import { Phone } from '../@types/Phone';
import { PhonesData } from '../@types/PhonesData';
import { RequestMethod } from '../@types/Request';

const BASE_URL = 'https://product-api-rtk8.onrender.com';

async function request<T>(
  url: string,
  method: RequestMethod = 'GET',
  data: any = null,
): Promise<T> {
  const options: RequestInit = { method };

  if (data) {
    options.body = JSON.stringify(data);
    options.headers = {
      'Content-Type': 'application/json; charset=UTF-8',
    };
  }

  try {
    const data = await fetch(BASE_URL + url, options);
    return data.json();
  } catch {
    throw new Error();
  }
}

export const client = {
  get: <T>(url: string) => request<T>(url),
  post: <T>(url: string, data: any) => request<T>(url, 'POST', data),
  patch: <T>(url: string, data: any) => request<T>(url, 'PATCH', data),
  delete: (url: string) => request(url, 'DELETE'),
};

export const getPhones = (searchParams: string) => {
  return client.get<PhonesData>(`/phones?${searchParams}`);
};

export const getPhoneDetails = (phoneId: string) => {
  return client.get<Phone>(`/phones/${phoneId}`);
};
