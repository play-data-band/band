import {apiClient} from "./ApiClient";


export const teacherLogin = (email, name) => apiClient.post(`http://localhost:8000/api/v1/user/teacher`, {
  email,
  name
})

export const userLogin = (email, password) => apiClient.post(`http://localhost:8000/api/v1/user/login`, {
  email,
  password
})

export const signup = (email, password, name, mbti, imgPath) => apiClient.post(`http://localhost:8000/api/v1/user`, {
  email,
  password,
  name,
  mbti,
  imgPath
})
