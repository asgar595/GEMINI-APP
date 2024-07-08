import React, { useContext } from 'react'
import {assets} from '../../assets/assets'
import './Main.css'
import { Context } from '../../Context/Context'

const Main = () => {
    const{onsent,recentprompt,showresult,loading,resultdata,setInput,input}=useContext(Context)
  return (
    <>
    <div className='main'>
        <div className="nav">
            <p>Gemini</p>
            <img src={assets.user_icon}/>
        </div>
        <div className="main-container">
            {!showresult?<>
                <div className="greet">
                <p><span>Hello,Ali</span></p>
                <p>How can i help you today?</p>
            </div>
            <div className="cards">
                <div className="card">
                    <p>Suggest beautiful places to see on a upcoming road trip</p>
                    <img src={assets.compass_icon}/>
                </div>
                <div className="card">
                    <p>breifly summarize this concept :urban planning</p>
                    <img src={assets.bulb_icon}/>
                </div>
                <div className="card">
                    <p>Brainstorm team bonding activities for our work retreat</p>
                    <img src={assets.message_icon}/>
                </div>
                <div className="card">
                    <p>Tell me about React js and React native</p>
                    <img src={assets.code_icon}/>
                </div>
                </div>

            </>:<div className='result'>
                <div className="result-title">
                    <img src={assets.user_icon}/>
                    <p>{recentprompt}</p>
                </div>
                <div className="result-data">
                    <img src={assets.gemini_icon}/>
                    {loading?<div className='loader'>
                        <hr/>
                        <hr/>
                        <hr/>

                    </div>
                    :   <p dangerouslySetInnerHTML={{__html:resultdata}}></p>}
                 

                </div>

                </div>}
            
            

                <div className="main-bottom">
                    <div className="search-box">
                        <input onChange={(e)=>setInput(e.target.value)} value={input} type='text'placeholder='enter a prompt here'></input>
                        <div>
                            <img src={assets.gallery_icon}></img>
                            <img src={assets.mic_icon}></img>
                            <img  onClick={()=>onsent()} src={assets.send_icon}></img>


                        </div>
                    </div>
                    <div className="bottom-info">
                    Gemini may display inaccurate info, including about people, so double-check its responses. Your privacy and Gemini Apps
                    </div>
                </div>
            
        </div>

      
    </div>
    </>
  )
}

export default Main
