import { Dispatch, SetStateAction } from 'react';

import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://api.github.com/'
});

export async function getUser(
  id: string,
  setData: (data: object) => void,
  setError?: Dispatch<SetStateAction<boolean>>
) {
  try {
    const response = await api.get(`users/${id}`);
    const data = response.data;

    setData && setData(data);
  } catch (error) {
    setError && setError(true);
  }
}
