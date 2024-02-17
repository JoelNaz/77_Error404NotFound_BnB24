import axios from 'axios'
const baseURL = "http://localhost:5000/"
const API = axios.create({ baseURL: baseURL})


export const login = (authData:{username:string,password:string}) => API.post('/auth/usersignin', authData)
  .then(response => {
    const { token } = response.data;
    // Include the token in the headers of subsequent requests
    API.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    return response;
  });

export const signup = (authData:{username:string,email:string,password:string}) => API.post('/auth/signup', authData);

export const loginInvestigator = (authData:{username:string,password:string}) => API.post('/auth/investigatorsignin', authData)
  .then(response => {
    const { token } = response.data;
    // Include the token in the headers of subsequent requests
    API.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    return response;
  });

export const getAllUserReports =(userId:string)=>API.get(`user/getUserReports/${userId}`)
export const uploadReport = (userId:string,reportData:{title:string,location:string,description:String,image:any})=>API.post(`user/postUserReports/${userId}`,reportData)
