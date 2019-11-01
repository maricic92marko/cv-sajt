import React from 'react'

 class NavBar extends React.Component {
   
    constructor(props) {
        super(props);
    
        this.state = {scroll:0, width: 0, height: 0,menu_toggle: false};
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
        this.onScroll = this.onScroll.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }
    

  componentDidMount() {

    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
    window.addEventListener("scroll", this.onScroll);

  }
  
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
    window.removeEventListener("scroll", this.onScroll);
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  onScroll() {
    var scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
    this.setState({ scroll: scrollTop });
    
    if(scrollTop>50)
    {
        document.getElementById("NavBar").className = "NavBar1";
    }
    else{
        document.getElementById("NavBar").className = "NavBar";
    }



  }



  handleClick(e)
  {
    let element = document.getElementById(e.target.innerHTML) 
    let id =   parseInt( e.target.id)

    if(parseInt(e.target.parentElement.id) === 0)
    {
      document.getElementById('begining').scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
    }
    else if(id === 1)
    {
      element.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});

    }
    else if( id === 2)
    {
      element.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});

    }
    else if( id === 3)
    {
      element.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});

    }
    else if( id === 4)
    {
      document.getElementById('Contact').scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});

    }

  }
 
    render(){

    return (
        <div id="NavBar" className="NavBar">
            <ul>
                <li onClick={this.handleClick} id="0" className="logo"><img src="/images/logo.png"></img></li>
                <li onClick={this.handleClick} id="4" className="NavLink">Contact</li>
                <li onClick={this.handleClick} id="3" className="NavLink">Projects</li>
                <li onClick={this.handleClick} id="2" className="NavLink">Skills</li>
                <li onClick={this.handleClick} id="1" className="NavLink">About</li>
            </ul>
        </div>
    )}
}

export default NavBar
