import { login } from "@/api";
import { create } from "zustand";
import jwtDecode from 'jwt-decode';

type ProfileStore = {
  token:string,
  login:(authData:{username:string,password:string})=>Promise<void>
  logout:()=>void
}

export const useProfileStore = create<ProfileStore>((set)=>({
  token:"",
  login:async (authData)=>{
      const response = await login(authData)
      const token: string = response.data.token; 
      set((state)=>({token}));
      
  },
  logout:()=>{
    set(()=>({token:""}))
  }
}))