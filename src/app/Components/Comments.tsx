import Image from "next/image"

const Comments = () => {
    return (
        <div className=''>
            {/* Write a comment */}
            <div className=" flex items-center gap-4">
                <Image className="rounded-full w-8 h-8" src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600" width={32} height={32} alt="profile" />
                <div className="flex flex-1 w-full px-6 py-2 rounded-xl bg-slate-100 items-center">
                    <input className="bg-transparent outline-none flex-1" type="text" placeholder="Write a comment..." />
                    <Image className="cursor-pointer w-4 h-4" src="/emoji.png" width={16} height={16} alt="emoji" />
                </div>
            </div>

            {/* Show others comment */}
            <div className="">
                {/* Comment */}
                <div className="flex justify-between mt-6 gap-4">
                    {/* Avatar    */}
                    <Image className="rounded-full w-10 h-10" src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600" width={40} height={40} alt="profile" />
                    {/* Descritipn    */}
                    <div className="flex flex-col gap-2 flex-1">
                        <span className="font-medium">
                            Mohamad Alani
                        </span>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus voluptas tenetur corrupti perferendis impedit, quaerat possimus laborum laudantium adipisci saepe! Voluptatum fugiat ex consectetur possimus ab obcaecati non aspernatur deleniti.
                        </p>
                        <div className="flex items-center gap-8 text-sm text-gray-500 mt-2">
                            <div className="flex items-center gap-4">
                            <Image className="cursor-pointer w-4 h-4" src="/like.png" width={16} height={16} alt="more" />
                            <span className="text-gray-300">|</span>
                            <span className="text-gray-500">13K Like</span>
                            </div>
                            <div className="">Reply</div>
                        </div> 
                    </div>
                    {/* Icom - More    */}
                    <Image className="cursor-pointer w-4 h-4" src="/more.png" width={16} height={16} alt="more" />
                </div>
            </div>
        </div>
    )
}

export default Comments