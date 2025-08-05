import React, { useContext } from 'react';
import './Main.css';
import { assets } from '../assets/assets';
import { Context } from '../Context/Context';

const Main = () => {

  const{onSent,recentPrompt,showResult,loading,resultData,setInput,input}= useContext(Context)


  return (
    <div className='main'>
      <div className='nav'>
        <p>Gemini</p>
        <img src={assets.user_icon} alt=""/>
      </div>
      <div className='main-container'>
          <div className='greet'>
            <p><span>Hello, Dev</span></p>
            <p>How can I help you today?</p>
          </div>
          <div className='cards'>
            <div className='card'>
              <p>Suggest beautiful places to see on an upcoming road trip</p>
              <img src={assets.compass_icon}/>
            </div>
            <div className='card'>
              <p>Briefly summarize this concept: urban planning</p>
              <img src={assets.bulb_icon}/>
            </div>
            <div className='card'>
              <p>Brainstorm team bonding activites for our work retreet</p>
              <img src={assets.message_icon}/>
            </div>
            <div className='card'>
              <p>Improve the readabilit of the followin code</p>
              <img src={assets.code_icon}/>
            </div>
            <div className='main-bottom'>
              <div className='search-box'>
                <input onChange = {(e)=>setInput(e.target.value)} value={input} type='text' placeholder='Enter a prompt here...'/>
                <div>
                  <img src={assets.gallery_icon} alt="" />
                  <img src={assets.mic_icon} alt="" />
                  <img onClick={()=>onSent()} src={assets.send_icon} alt="" />
                </div>
              </div>
              <p className='bottom-info'>Gemini may display inaccurate info, including about people, so double-check its responses. Yourr privacy and Gemini Apps</p>
            </div>


          </div>
      </div>

    </div>
  );
};

export default Main;
