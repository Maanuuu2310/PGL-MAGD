const USERS_API_URL = "http://172.20.10.4:8888/users";
const REGISTER_PATH = "/register";
const LOGIN_PATH = "/login";

type UserJsonResponse = {
  id: number;
  name: string;
  email: string;
  hashedPwd: string;
};

type CookiesJson = {
  username: string;
  codigoSalida: number;
};

const getInitRequest = (httpVerb: string, body: {}): RequestInit => {
  const init: RequestInit = {
    method: httpVerb,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  };
  return init;
};

export const registerUsers = async (user: {}): Promise<CookiesJson> => {
  let userCookies = {
    username: "",
    codigoSalida: 0,
  };

  const request: RequestInfo = `${USERS_API_URL}${REGISTER_PATH}`;
  const response = await fetch(request, getInitRequest("POST", user));
  const json: UserJsonResponse = await response.json();

  userCookies.codigoSalida = response.status;
  if (json != null) {
    userCookies.username = json.name;
  }

  return userCookies;
};

export const loginUser = async (user: {}): Promise<number> => {
  let users: string = "";

  const request: RequestInfo = `${USERS_API_URL}${LOGIN_PATH}`;
  const response = await fetch(request, getInitRequest("POST", user));
  const json: UserJsonResponse = await response.json();

  console.log(response.status);
  if (json != null) {
    users = json.name;
  }

  return response.status;
};
