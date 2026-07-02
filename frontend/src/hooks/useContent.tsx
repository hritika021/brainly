import { useEffect, useState } from "react";
import { BACKEND_URL } from "../config";
import axios from "axios";

export function useContent(){
    const [loading,setLoading]=useState(true);
    const [content,setContent]=useState([]);
    function refresh(){
        setLoading(true);
        axios.get(BACKEND_URL+"/content/content",{
            headers:{
            "Authorization":`Bearer ${localStorage.getItem("token")}`
            }
         }).then(async (response)=>{
  
            setContent(response.data.content);
            setLoading(false);
         })
     
    }
    useEffect(()=>{
refresh();            
    },[])

    return {content,refresh,loading}; 
    
}