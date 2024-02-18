import { useParams } from "react-router-dom";

function chatUser() {
  const { userId } = useParams();
  return (
    <div>
        {userId}
    </div>
  )
}

export default chatUser
