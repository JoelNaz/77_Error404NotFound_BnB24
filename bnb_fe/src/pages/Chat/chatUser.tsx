import { useProfileStore } from "@/store/store";
import { useNavigate, useParams } from "react-router-dom";
import {jwtDecode} from "jwt-decode"; // Corrected import statement
import { useEffect } from "react";
import { fetchMessage } from "@/api";

function chatUser() {
  const token = useProfileStore((state) => state.token);
  const { userId } = useParams();
  const navigate = useNavigate();
  const fetchMessages = async (userId:string,investId:string, participant:string) => {
    try {
      const response = await fetchMessage(userId, investId, participant); // Assuming userId is the user's ID
      
      console.log(response)
      // setMessages(data.messages);
    } catch (error) {
      console.error('Error fetching messages:', error);
    }
  };
  useEffect(() => {
    try {
      if (token !== "") {
        const decoded = jwtDecode(token); // Corrected variable declaration
        console.log(decoded);
        fetchMessages(userId,decoded._id,"Investigator");
        // You can set the decoded value to state if needed
      } else {
        navigate('/signin-investigator');
      }
    } catch (e) {
      console.log(e);
    }
  }, [token]); // Added token to the dependency array
  return (
    <div>
      userId : {userId}
    </div>
  );
}

export default chatUser;
