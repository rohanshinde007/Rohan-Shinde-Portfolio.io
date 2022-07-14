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
        <h1 className='a-title'>About Me</h1>
        <p className='a-sub'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit at similique officiis, placeat, libero tempore illum 
        </p>
        <p className='a-desc'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur soluta facere, est corporis tenetur rerum fuga sequi blanditiis error suscipit tempora aspernatur modi aliquam animi similique officia distinctio debitis asperiores. Maiores 
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi in ad consequatur!
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
