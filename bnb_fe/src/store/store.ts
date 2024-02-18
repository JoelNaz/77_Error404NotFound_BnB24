import { login, loginInvestigator } from "@/api";
import { create } from "zustand";

type ProfileStore = {
  token:string,
  role:string,
  setUser:()=>void,
  login:(authData:{username:string,password:string})=>Promise<void>,
  logout:()=>void,
  investLogin:(authData:{username:string,password:string})=>Promise<void>,
}

export const useProfileStore = create<ProfileStore>((set)=>({
  token:"",
  role:"",
  login:async (authData)=>{
      const response = await login(authData)
      const role = response.data.role
      console.log(role)
      const token: string = response.data.token; 
      set(()=>({token,role}));
      
  },
  logout:()=>{
    set(()=>({token:""}))
  },
  setUser:()=>{
    
  },
  investLogin:async (authData)=>{
    const response =await loginInvestigator(authData)
    const role = response.data.role
    const token: string = response.data.token; 
    console.log(role)
    set(()=>({token,role}));
  }
}))