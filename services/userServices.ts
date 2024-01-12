const USERS_API_URL = "http://172.16.102.33:8888/users";
const REGISTER_PATH = "/register";
const LOGIN_PATH = "/login";

type UserJsonResponse = {
  id: number;
  name: string;
  email: string;
  hashedPwd: string;
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

export const registerUsers = async (user: {}): Promise<string> => {
  let users: string = "";

  const request: RequestInfo = `${USERS_API_URL}${REGISTER_PATH}`;
  const response = await fetch(request, getInitRequest("POST", user));
  const json: UserJsonResponse = await response.json();

  console.log(response.status);
  console.log(json);
  if (json != null) {
    users = json.name;
  }

  return users;
};
