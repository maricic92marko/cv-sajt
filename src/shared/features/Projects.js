import React from 'react'

export default function Projects() {
    function handleClick(link){
      
            window.open( 
                link, "_blank");  
    }
    return (
        <div id='Projects' className="Projects">
            <p>Projects</p>
            <div className="GitImage">
                <a href="https://github.com/maricic92marko">
                <img src="/images/git_logo.png" href="https://github.com/maricic92marko"/>
                </a>
            </div>
            <div className="Projects-imgContainer"> 
            <a onClick={()=>handleClick("https://rolten.info/")}>
                    <img src="/images/Rolten-info.jpg"/>
                    <div className="overlay">
                        <div className="text">RoloSistem</div>
                    </div>
                </a>
            </div>
            <div className="Projects-imgContainer"> 
            <a onClick={()=>handleClick("https://github.com/maricic92marko/cv-sajt")}>
                    <img src="/images/cv-sajt.jpg"/>
                    <div className="overlay">
                        <div className="text">cv-sajt</div>
                    </div>
                </a>
            </div>
        </div>
    )
}
