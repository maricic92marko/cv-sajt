import React, { Component } from 'react'
import {Helmet} from "react-helmet";
import NavBar from './features/NavBar'
import About from './features/About'
import Skills from './features/Skills'
import Projects from './features/Projects'
import Contact from './features/Contact'

class App extends Component {

    constructor(props)
    {
        super(props)
        this.beginTour = this.beginTour.bind(this)
    }

    beginTour()
    {
        document.getElementById('About').scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});

    }

    render() {

        return (
            <div className='page-container'>
                    <Helmet>
                    <meta charSet="utf-8" />
                    <link rel="stylesheet" href="/main.css"/>
                    <title>Marko Maricic</title>
                    <link rel="/images/logoTab.png" href="http://localhost:3000/images/logoTab.png" type="image/x-icon" />

                    <meta name="Marko Maricic" 
                    content="Innovative and creative with great analytical skills. Highly motivated, self tought
                    with great desire for learning and improving programming skills." />
                    <link rel="canonical" href="http://markomaricic.com" />
                </Helmet>
                <NavBar/>
                <div id='begining' className="begining">
                   <div className="begining-div">
                    <p  className="begining-p1">
                        Hello!
                    </p>
                    <p  className="begining-p2">
                        Welcome to my site presentation.
                    </p>
                    <button onClick={this.beginTour} className="begining-btn">Begin tour</button>
                </div>
                </div>
                <About/>
                <Skills/>
                <Projects/>
                <Contact/>
            </div>
        )
    }
}
export default App