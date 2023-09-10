import React,{useEffect} from "react";

function SimpleUseEffect(){
    useEffect(()=>{
        console.log("Component mounted.");

        return ()=>{
            console.log("Component unmounted.");
        }
    },[]);
    return(
        <div>
            <h1>Simple useEffect</h1>
        </div>
    )
}

export default SimpleUseEffect;