import Ad from "./Ad"
import Brithdays from "./Brithdays"
import FriendRequest from "./FriendRequest"

// in the main page we have 3 sections, in the profile page we have 5 items so will send the userID as props so it's not requird 
const RightMenu = ({userId}: {userId?: string}) => {
  return (
    <div className='flex flex-col gap-6'>
      <FriendRequest />
      <Brithdays />
      <Ad size="md"/>
    </div>
  )
}

export default RightMenu