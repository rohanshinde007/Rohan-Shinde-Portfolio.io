
import "./intro.css"
import Me from "../../img/me.png"
export default function Intro() {
  return (
    <div className='i'>
        <div className="i-left">
        <div className="i-left-wrapper">
            <h2 className='i-intro'>Hello My name is</h2>
            <h1 className='i-name'>Rohan Shinde</h1>
            <div className="i-title">
                <div className="i-title-wrapper">
                    <div className="i-title-item">Full-stack Developer</div>
                    <div className="i-title-item">Android app Developer</div>
                    <div className="i-title-item">java programmer</div>
                    <div className="i-title-item">Web app Developer</div>
                    <div className="i-title-item">Investor</div>

                </div>
        
            </div>

            <p className="i-desc">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit qui iste dolorum repudiandae, quam distinctio debitis architecto accusamus consequuntur maxime sequi necessitatibus minima perferendis recusandae, earum nostrum voluptas laborum saepe quis vel tempora Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat aspernatur sint libero?
            </p>
        </div>
        </div>
     
        <div className="i-right">
            <div className="i-bg"></div>
            <img src={Me} alt="" className="i_img"/>
        </div>
        
    </div>
  )
}
