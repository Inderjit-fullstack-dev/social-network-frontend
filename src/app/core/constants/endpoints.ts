const baseURL = 'http://localhost:8080/api';
export const endpoints = {
  login: `${baseURL}/Authentication/Login`,
  post: {
    create: `${baseURL}/Posts/CreatePost`,
    list: `${baseURL}/Posts/GetPosts`,
  },
  comment: {
    create: `${baseURL}/Posts/CreateComment`,
  },
};
