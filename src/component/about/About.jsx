import React, { useContext } from 'react'
import "./about.css"
import { ThemeContext } from "../../context"

export default function About() {

  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className='a'>
      <div className="a-left">
        <div className="a-card bg" style={{backgroundColor:darkMode && "#C0C0C0"}}></div>
        <div className="a-card">
          <img src="https://images.pexels.com/photos/3861959/pexels-photo-3861959.jpeg" alt="" className='a-img'/>
        </div>
      </div>
      <div className="a-right">
        <h1 className='a-title'>About me</h1>
        <p className='a-sub'>
          I am Rohan from India,
        </p>
        <p className='a-desc'>
        I Love coding and developing something new that's why I started Software Development. 
          I do develop a full-stack web app means including Frontend and Backend and I have always increased my knowledge about developing a web app.
          then I started Android app development in Android studio and I do give most of my time to learning and developing something new. so i.e
          learning is the first hobby and swimming and listening music is second and third hobby <br />  <br />

          skills: HTML5, CSS, JavaScript, Bootstrap, nodeJs or(npm)all packages, MongoDB(compass+Atlas), postmon, Visual Studio, React Js ES6  , Git&Github, webhosting on Linux(ubuntu), java, Android Studio(layouts,XMl,gradle, etc.), intellij idea, little bit of Unreal Engine 5.

          
          
             
        </p>
        <div className="a-award">
          <img src="https://images.pexels.com/photos/270404/pexels-photo-270404.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className='a-award-img'/>
          <div className='a-award-texts'>
            <h4 className='a-award-title'>Achivements</h4>
            <p>
            My aaaaaa  website have a 100k users . I have app whos 1M download on playstore.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
