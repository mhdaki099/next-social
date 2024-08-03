import Image from "next/image"

const AddPost = () =>{
  return (
    <div className='p-4 rounded-lg flex gap-4 text-sm shadow-md justify-between bg-white'>
      {/* AVATAR */}
      <Image className="rounded-full w-12 h-12" src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600" width={48} height={48} alt="profile"></Image>
      {/* POST */}
      <div className="flex-1">
        {/* TextInput */}
        <div className="flex gap-4">
          <textarea className="flex-1 p-2 bg-slate-100 rounded-lg" placeholder="What's happening"></textarea>
          <Image className="rounded-full w-5 h-5 cursor-pointer self-end" src="/emoji.png" width={20} height={20} alt="add an emoji"></Image>
    
        </div>
        {/* Post Options */}
        <div className="flex items-center gap-4 mt-4 text-gray-500 flex-wrap">
          <div className="flex gap-2 items-center cursor-pointer">
            <Image className="rounded-full w-5 h-5 cursor-pointer self-end" src="/addimage.png" width={20} height={20} alt="add an emoji"></Image>
            Photo
          </div>
          <div className="flex gap-2 items-center cursor-pointer">
            <Image className="rounded-full w-5 h-5 cursor-pointer self-end" src="/addVideo.png" width={20} height={20} alt="add an emoji"></Image>
            Video
          </div>
          <div className="flex gap-2 items-center cursor-pointer">
            <Image className="rounded-full w-5 h-5 cursor-pointer self-end" src="/Poll.png" width={20} height={20} alt="add an emoji"></Image>
            Poll
          </div>
          <div className="flex gap-2 items-center cursor-pointer">
            <Image className="rounded-full w-5 h-5 cursor-pointer self-end" src="/addevent.png" width={20} height={20} alt="add an emoji"></Image>
            Add Event
          </div>
        
        
        </div>
      </div>
    </div>
  )
}

export default AddPost;