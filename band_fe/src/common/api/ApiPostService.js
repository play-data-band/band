import {apiClient} from "./ApiClient";


export const teacherLogin = (email, name) => apiClient.post(`/api/v1/user/teacher`, {
  email,
  name
})

export const userLogin = (email, password) => apiClient.post(`/api/v1/user/login`, {
  email,
  password
})

export const interestCommunityScheduleGet = (interest) => apiClient.post('/api/v1/schedule/upcomingByInterest', {
  interest
})

export const signup = (email, password, name, mbti, imgPath) => apiClient.post(`/api/v1/user`, {
  email,
  password,
  name,
  mbti,
  imgPath
})

export const userRecommandCommunity = (interestArray, page, size) => apiClient.post('/api/v1/community/allinterest', interestArray, {
  params : {
    page,
    size
  }
});

export const userInterestSave = (interest, userId) => apiClient.post(`/api/v1/interest/${userId}`, {
  interest
})