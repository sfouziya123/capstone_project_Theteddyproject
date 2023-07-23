import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts } from '../../Redux/ProductReducer/Action';


function Product(){
    const  dispatch =useDispatch()
    const productData = useSelector(state => state.Product.productData)

    console.log(productData)
    useEffect(() =>{
        dispatch(getAllProducts())
    },[]);
    return(
        <div>
            {
                productData?.map(({productName,productPrice,productImage})=>
                <div>
                    <div>
                        <img src={productImage} alt="no image"/>
                    </div>
                    <h1>{productName}</h1>
                    <h1>{productPrice}</h1>
                </div>
                )
            }
        </div>
    );
}
export  default Product