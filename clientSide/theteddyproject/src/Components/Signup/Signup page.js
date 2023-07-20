import React from 'react'
import './Signup.css'


function Signup(){
    return(
        <div>
            <div className="main">
                <div className="mainTag">
                    <div className="leftTag">
                    <img  className = "size"src="resources/sign3.jpg"alt=""/>
                    </div>
                    <div className="rightTag">
                            <h2>SignUp</h2>
                            <input type="text" placeholder="name"></input><br/>
                            <input type="text" placeholder="Username"></input><br/>
                            <input type="text" placeholder="E-mail"></input><br/>
                            <input type="Password" placeholder="Password"></input><br/>
                            <input type="number" placeholder="Mobile number"></input><br/>
                            <button className="button">Submit</button> 
                            {/* <h6>By creating this account, you agree to our Privacy Policy & Cookie Policy.</h6> */}
                            
                     </div>
                </div>
                
                <div id="bottom">
                <h5>____Or Connect with____</h5>
                    {/* <img className="google" src="resources/googleicon.webp" alt=""/>
                    <img className="google" src="resources/twitter.png"alt=""/>
                    <img className="google" src="resources/linkdin.png"alt=""/>
                    <img className="google" src="resources/facebook.png"alt=""/> */}
                </div>
                
            </div>
           
        </div>
    )
}
export default Signup;