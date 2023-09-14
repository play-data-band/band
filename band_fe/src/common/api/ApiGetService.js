import {apiClient} from "./ApiClient";

export const myTokenInfo = (token) => apiClient.get('/api/v1/user/me', {
  token : token
})

export const interestCommunityGet = (interest, page, size) => apiClient.get('/api/v1/community/interest', {
  params : {
    interest,
    page,
    size
  }
})

export const interestNewCommunityGet = (page, size) => apiClient.get('/api/v1/community/generateorder', {
  params : {
    page,
    size
  }
})


