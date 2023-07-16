import React from 'react'
import './Footer.css'

function Footer(){
    return(
        <div>
            <footer>
                    <div className="About">

                        <b>About Us</b>
                        <p className ="Google">Soft Toys availabe </p>
                    
                    </div> 
                    <div className="contact">
                
                        <b>Contact Information</b>
                        <div className="mobile">
                            <img className="contactNumber" src="Resources/call1.png" alt=""/>    
                            <p className="paragraph">Mobile no:+91-9676948462</p><br/>
                        
                        </div>

                        <div className="mobile">
                            <img className="contactnumber" src="Resources/email-icon.png" alt=""/>  
                            <p className="paragraph1">E-mail: theTeddyProject@gmail.com</p>
                        </div>
                    </div>

                <div className="connect">

                    <b>Follow us on</b>
                
                    <div className ="equal">
                        <img  className="facebookImage"src = "Resources/facebook.png" alt=""/>                
                        <img  className="facebookImage"src = "Resources/googleicon.webp" alt=""/> 
                        <img  className="facebookImage"src = "Resources/twitter.png" alt=""/>                 
                        <img  className="facebookImage"src = "Resources/linkdin.png" alt=""/>
                    </div>  
                </div>
            </footer>
        </div>
    )
}
export default Footer 