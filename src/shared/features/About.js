import React from 'react'

export default function About() {
    return (
        <div id='About' className="About">
            <div  className="About-cv-part">
                <p className="About-title">About</p>
               <a href="/images/Marko Maricic - CV.pdf"  download target="">
                    <img align="middle" className="cv-icon"
                     src="/images/cv_icon.png"/>
                </a>
            </div>
            
           
            <div className="Atributes">
                <div className="Atributes-left">
                <div >
                    <img className="Atributes-img-left" src="/images/creative.png"/>
                    <p className="Atributes-p-left">Innovative and creative with great analytical skills.</p>
                </div>
                <div >
                    <img className="Atributes-img-left"  src="/images/progress.png"/>
                    <p className="Atributes-p-left">Highly motivated, self tought
with great desire for learning and improving programming skills.</p>
                </div>
                </div>
                <div className="Atributes-myimg-div">
                    <img className="Atributes-myimg" src="/images/markomaricic.png"/>
                </div>
                <div className="Atributes-right">
                <div>
                    <img src="/images/team.png" className="Atributes-img-right" />
                    <p className="Atributes-p-right">Team player, hard-working and highly organized</p>
                </div>
                <div>
                    <img src="/images/smile.png" className="Atributes-img-right" />
                    <p className="Atributes-p-right">Cheerful and touchy person with a bunch of funny comments that will laugh colleagues and raise a team spirit</p>
                </div>
                </div>
            </div>
        </div>
    )
}
