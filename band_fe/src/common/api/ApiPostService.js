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
export const communityInsert = (communityId, memberId, memberName, memberRole, memberImage, communityName, communityImage) => apiClient.post(`http://192.168.0.229:8000/api/v1/communitymember/${communityId}`, {
  memberId,
  memberName,
  memberRole,
  memberImage,
  communityName,
  communityImage
})

export const userChatMsg = (communityId, memberId, memberName, memberImage, content) => apiClient.post('http://192.168.0.229:9090/api/v1/chattings', {
  communityId,
  memberId,
  memberName,
  memberImage,
  content
})

export const communityMemberDelete = (memberId, communityId) => apiClient.delete(`http://192.168.0.229:8000/api/v1/communitymember/memberid/${memberId}/communityid/${communityId}`);