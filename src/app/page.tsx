import AddPost from './Components/AddPost';
import Feed from './Components/Feed';
import LeftMenu from './Components/LeftMenu';
import RightMenu  from './Components/RightMenu';
import Stories from './Components/Stories';


const Homepage = () => {
  return (

    // The Big page - contains the Left + Right + Center components 
    <div className='flex  gap-6 pt-6'> 
    
    {/* LEFT */}
      <div className='hidden xl:block w-[20%]'> <LeftMenu /> </div>

    {/* CENTER */}
      <div className='w-full lg:w-[70%] xl:w-[50%]'> 
        <div className='flex flex-col gap-6'> 
          <Stories ></Stories>
          <AddPost ></AddPost>
          <Feed ></Feed>
        </div>

      </div>
    {/* RIGHT */}
      <div className='hidden lg:block w-[3  0%]'> <RightMenu /> </div>
      

    </div>
  )
}

export default Homepage