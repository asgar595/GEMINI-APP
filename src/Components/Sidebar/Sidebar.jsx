import React, { useContext, useState } from 'react'
import {assets} from '../../assets/assets'
import './Sidebar.css'
import { Context } from '../../Context/Context'


const Sidebar = () => {
    const[extend,setextended]=useState(false)
    const menu=()=>{
        setextended(!extend)
       
    }
    const{prevprompt}=useContext(Context)

  return (
    <div>
        <div className='sidebar'>
            <div className="top">
                <img  onClick={menu} className='menu'src={assets.menu_icon}/>
            
            <div className="new-chat">
                <img src={assets.plus_icon}></img>
                {extend?<p>New chat</p>:null}

            </div>
            {extend?
                <div className="recent">
                <div className="recent-title">Recent</div>
                {prevprompt.map((value,index)=>{
                    return(  <div className="recent-entry">
                        <img src={assets.message_icon}></img>
                        <p>{value.slice(0,10)}...</p>
                        </div> )
                  

                })}
               
            </div>:null

            }
           
        
            </div>
            <div className="bottom">
                <div className="bottom-item recent-entry">
                    <img src={assets.question_icon}></img>
                   {extend? <p>Help</p>:null}

                </div>
                <div className="bottom-item recent-entry">
                    <img src={assets.history_icon}></img>
                    {extend?<p>Activity</p>:null}

                </div>
                <div className="bottom-item recent-entry">
                    <img src={assets.setting_icon}></img>
                    {extend?<p>Setting</p>:null}

                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Sidebar
