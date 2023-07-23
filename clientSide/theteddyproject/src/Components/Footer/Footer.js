import React from 'react'
import './Footer.css'

import { ImagesSources, contactSources } from '../Constant/footerConstant'



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

                        
                        <div className="gmail">
                            {
                                contactSources.map((data,index)=>(
                                    <div>
                                    <img className="contactNumber"key={index} src={data.imageLink} />
                                    <p>{data.text}</p>
                                    </div>
                                ))
                            }

                        </div>
                    </div>
                <div className="connect">
                    <b>Follow us on</b>
                    <div className ="equal">
                        {
                            ImagesSources.map((element,index)=>(
                                <img className="facebookImage"key={index} src={element}/>
                            ))
                        }
                    </div>  
                </div>
            </footer>
        </div>
    )
}
export default Footer 