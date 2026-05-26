import { useEffect, useState } from "react";
import { BACKEND_URL } from "../config";
import axios from "axios";

export function useContent(){
    const [content,setContent]=useState([]);
    function refresh(){
        axios.get(BACKEND_URL+"/content/content",{
            headers:{
            "Authorization":`Bearer ${localStorage.getItem("token")}`
            }
         }).then((response)=>{
            setContent(response.data.content);
         })
    }
    useEffect(()=>{
refresh();            
    },[])

    return {content,refresh}; 

}