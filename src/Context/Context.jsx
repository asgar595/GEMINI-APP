import { createContext, useState } from "react";
import run from "../config/Gemini";
export const Context=createContext()
const ContextProvider=(props)=>{
    const[input,setInput]=useState("")
    const[recentprompt,setrecentprompt]=useState("");
    const[prevprompt,setprevprompt]=useState([])
    const[loading,setloading]=useState(false)
    const[showresult,setshowresult]=useState(false)
    const[resultdata,setresultdata]=useState("")
    const delaypara=(index,nextword)=>{
        setTimeout(()=>{
            setresultdata(prev=>prev+nextword)

        },10*index)
    }
    

    const onsent=async(prompt)=>{
        setresultdata("")
        setloading(true)
        setshowresult(true)
        setrecentprompt(input)
        setprevprompt(prev=>[...prev,input])
        const response=await run(input)
        setInput("")
        let responsearray=response.split("**")
        let newresponse=""
        for(let i=0;i<responsearray.length;i++){
            if(i===0||i%2!=1){

                newresponse+=responsearray[i]
            }
            else{
                newresponse+="<b>"+responsearray[i]+"</b>"
            }
        }
        let responsearray2=newresponse.split("*").join("</br>")

        
       for(let i=0;i<responsearray2.length;i++){
        delaypara(i,responsearray2[i])
       }
        setloading(false)
        

    }
    
    const contextValue={input,recentprompt,prevprompt,loading,showresult,resultdata,setInput,setprevprompt,setrecentprompt,setloading,setresultdata,setshowresult,onsent}
    
    return(<Context.Provider value={contextValue}>
        {props.children}

    </Context.Provider>)
}
export default ContextProvider