import React from 'react';
import './Navbar.css';

function Navbar(){
    return(
        <div>
      
            <div className="navbar">

                <div>
                    <img id="logo" src = "Resources/Logo2.png" alt=""/> 
                </div> 

                <div className='Flex'>
                    <div className="home">Toys</div>
                    <div className="toys">Age of kids</div>
                    <div className="Offers">Offers</div>
                    <img className="login" src = "Resources/signin1.png" alt=""/>
                    <div className="signin">Signin</div> 
                    <img className="wishList" src = "Resources/whish.png" alt=""/>
                    <div className="Wish">Whishlist</div>
                    <img className="WishList" src = "Resources/cart2.png" alt=""/>
                    <div className="WISH">Add to cart</div>
                    <div className='searchimg'>
                        <img className="search"  src="Resources/search-icon.png" alt=""/>
                    </div>
                    <input id="Input" type="text" placeholder="Search"  />
                </div>
                <div></div>

            </div>
          
        </div>
       
    )
}
export default Navbar;