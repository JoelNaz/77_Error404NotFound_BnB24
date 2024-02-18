import { useProfileStore } from "@/store/store";
import { useNavigate, useParams } from "react-router-dom";
import jwtDecode from "jwt-decode"    
import { useEffect } from "react";

function chatUser() {
  const token = useProfileStore((state)=>state.token)
  const navigate= useNavigate()
  console.log(token)
  let decoded=""
  // useEffect(()=>{
  //   try{

  //     if(token)
  //       decoded = jwtDecode(token)
  //     else{
  //       navigate('/signin')
  //     }
  //   }
  //   catch(e){
  //     console.log(error)
  //   }
  // },[token])
  const { userId } = useParams();
  return (
    <div>
        userId : {userId}
        {
          decoded && decoded._id
        }
    </div>
  )
}

export default chatUser
