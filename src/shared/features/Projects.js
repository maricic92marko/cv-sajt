import React from 'react'

export default function Projects() {
    function handleClick(){
      
            window.open( 
              "https://rolten.info/", "_blank");  
    }
    return (
        <div id='Projects' className="Projects">
            <p>Projects</p>
            <div className="Projects-imgContainer"> 
            <a onClick={handleClick}>
                    <img src="/images/Rolten-info.jpg"/>
                    <div className="overlay">
                        <div className="text">RoloSistem</div>
                    </div>
                </a>
            </div>
        </div>
    )
}
