import { endPointSignIn } from '../types/endPointSignIn';
const buildHeaders = () => {
  const headers = {
    'Content-Type': 'application/json',
  };
  return headers;
};
const buildOptions = (payload, method) => {
  let options = {
    method,
    headers: buildHeaders(),
  };
  if (method === 'POST') {
    options = { ...options, body: JSON.stringify(payload) };
  }
  return options;
};

const buildPath = () => {
  return `${endPointSignIn}`;
};
const request = async (payload, method) => {
  const path = buildPath();
  const options = buildOptions(payload, method);
  const response = await fetch(path, options);
  if (response.ok) {
    const data = await response.json();
    return data;
  }
};
export const Registerpost = async (endPoint, payload) =>
  await request(endPoint, payload, 'POST');
export const Registerget = async (endPoint, payload) =>
  await request(endPoint, payload, 'GET');
