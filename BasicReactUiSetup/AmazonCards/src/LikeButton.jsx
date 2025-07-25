import { useState } from "react"

export default function LikeButton(){

    let [isLiked, setIsLiked] = useState(false);
    let [clicked , setIsClicked] = useState(0);
    let toggleLike = ()=>{
        setIsLiked(!isLiked);
        if(!isLiked){
            setIsClicked(clicked+1);
        }
        else{
            setIsClicked(clicked-1);
        }
    }
 let styles= {color : "red"}
    return (
        <>
        <div> <span>like {clicked}</span>
            <span onClick={toggleLike}> {isLiked ?(<i style={styles} class="fa-solid fa-heart" ></i>) : (<i class="fa-regular fa-heart"></i> ) }</span>
        </div>
        </>
    )
}