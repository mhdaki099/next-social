import Image from "next/image"
import Link from "next/link"

const FriendRequest = () => {
    return (
        <div className='p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4'>
            {/* TOP */}
            <div className="flex justify-between items-center font-medium">
                <span className="">Follow Requests</span>
                <Link href="/" className="text-blue-600 text-sm">See all</Link>
            </div>
            {/* Requests/ Users */}
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <Image src="https://images.pexels.com/photos/874158/pexels-photo-874158.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className="w-10 h-10 rounded-full object-cover" width={40} height={40} />
                    <span className="font-semibold">Mohamad Alani</span>
                </div>
                <div className="flex items-end gap-2">
                    <Image src="/accept.png" alt="" className="cursor-pointer" width={16} height={16} />
                    <Image src="/reject.png" alt="" className="cursor-pointer" width={16} height={16} />
                </div>
            </div>
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <Image src="https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className="w-10 h-10 rounded-full object-cover" width={40} height={40} />
                    <span className="font-semibold">Mohamad Alani</span>
                </div>
                <div className="flex items-end gap-2">
                    <Image src="/accept.png" alt="" className="cursor-pointer" width={16} height={16} />
                    <Image src="/reject.png" alt="" className="cursor-pointer" width={16} height={16} />
                </div>
            </div>
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <Image src="https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className="w-10 h-10 rounded-full object-cover" width={40} height={40} />
                    <span className="font-semibold">Mohamad Alani</span>
                </div>
                <div className="flex items-end gap-2">
                    <Image src="/accept.png" alt="" className="cursor-pointer" width={16} height={16} />
                    <Image src="/reject.png" alt="" className="cursor-pointer" width={16} height={16} />
                </div>
            </div>
        </div>
    )
}

export default FriendRequest