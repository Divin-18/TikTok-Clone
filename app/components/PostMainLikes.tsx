import { AiFillHeart } from "react-icons/ai"
import { FaShare, FaCommentDots } from "react-icons/fa"
import { useEffect, useState } from "react"
import { useUser } from "../context/user"
import { BiLoaderCircle } from "react-icons/bi"
import { useGeneralStore } from "../stores/general"
import { useRouter } from "next/navigation"
import { Comment, Like, PostMainLikesCompTypes } from "../types"
import useGetCommentsByPostId from "../hooks/useGetCommentsByPostId"
import useGetLikesByPostId from "../hooks/useGetLikesByPostId"
import useIsLiked from "../hooks/useIsLiked"
import useCreateLike from "../hooks/useCreateLike"
import useDeleteLike from "../hooks/useDeleteLike"
import router from "next/router"

export default function PostMainLikes({ post }: PostMainLikesCompTypes) {

    const [hasClickedLike, setHasClickedLike] = useState<boolean>(false)
    const [userLiked, setUserLiked] = useState<boolean>(false)
    const [comments, setComments] = useState<Comment[]>([])
    const [likes, setLikes] = useState<Like[]>([])


    

    const likeOrUnlike = () => {
        console.log('likeOrUnlike')
        }
        
       

    return (
        <>
            <div id={`PostMainLikes-${post?.id}`} className="relative mr-[75px]">
                <div className="absolute bottom-0 pl-2">
                    <div className="pb-4 text-center">
                        <button 
                            disabled={hasClickedLike}
                            onClick={() => likeOrUnlike()} 
                            className="rounded-full bg-gray-200 p-2 cursor-pointer"
                        >
                            {!hasClickedLike ? (
                                <AiFillHeart color={likes?.length > 0 && userLiked ? '#ff2626' : ''} size="25"/>
                            ) : (
                                <BiLoaderCircle className="animate-spin" size="25"/>
                            )}
                            
                        </button>
                        <span className="text-xs text-gray-800 font-semibold">
                            {likes?.length}
                        </span>
                    </div>

                    <button 
                        onClick={() => router.push(`/post/${post?.id}/${post?.profile?.user_id}`)} 
                        className="pb-4 text-center"
                    >
                        <div className="rounded-full bg-gray-200 p-2 cursor-pointer">
                            <FaCommentDots size="25"/>
                        </div>
                        <span className="text-xs text-gray-800 font-semibold">{comments?.length}</span>
                    </button>

                    <button className="text-center">
                        <div className="rounded-full bg-gray-200 p-2 cursor-pointer">
                            <FaShare size="25"/>
                        </div>
                        <span className="text-xs text-gray-800 font-semibold">55</span>
                    </button>
                </div>
            </div>
        </>
    )
}