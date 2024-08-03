import Image from "next/image"
import Comments from "./Comments";

const Post = () => {
    return (
        <div className='flex flex-col gap-4'>

            {/* USERNAME */}
            <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                    <Image className="rounded-full w-10 h-10" src="https://images.pexels.com/photos/3905859/pexels-photo-3905859.jpeg?auto=compress&cs=tinysrgb&w=600" width={40} height={40} alt="profile"></Image>
                    <span className="text-sm font-medium">Mohamad</span>
                    <span className="text-gray-400 text-xs">4 hours ago</span>
                </div>
                <Image className="rounded-full w-5 h-5 cursor-pointer" src="/more.png" width={16} height={16} alt="add an emoji"></Image>
            </div>
            {/* Post */}
            <div className="flex flex-col gap-4">
                {/* IMAGE */}
                <div className="w-full min-h-96 relative">
                    <Image className="rounded-md object-cover" src="https://images.pexels.com/photos/27025481/pexels-photo-27025481/free-photo-of-a-bride-and-groom-standing-in-front-of-a-window.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" fill alt=""></Image>
                </div>
                {/* TEXT */}
                <p className="text-sm font-medium">
                    A beautiful bride and groom standing in front of a window.
                </p>
            </div>
            {/* Interaction */}
            <div className="flex items-center justify-between text-sm my-3">
                <div className="flex items-center gap-4 bg-slate-50 p-2 rounded-xl">
                    <Image className="cursor-pointer" src="/like.png" width={16} height={16} alt="like" />
                    <span className="text-gray-300">|</span>
                    <span className="text-gray-500">123<span className="hidden md:inline"> Likes</span></span>
                </div>
                <div className="flex items-center gap-4 ml-6 bg-slate-50 p-2 rounded-xl">
                    <Image className="cursor-pointer" src="/comment.png" width={16} height={16} alt="comment" />
                    <span className="text-gray-400">|</span>
                    <span className="text-gray-400">21<span className="hidden md:inline"> Comments</span></span>
                </div>
                <div className="flex items-center gap-4 ml-auto bg-slate-50 p-2 rounded-xl">
                    <Image className="cursor-pointer" src="/share.png" width={16} height={16} alt="share" />
                    <span className="text-gray-400">|</span>
                    <span className="text-gray-400">Share</span>
                </div>
            </div>
            <Comments />
        </div >


    )
}

export default Post;