import React from 'react'
import './HomeProduct.css'

function HomeProduct({title, productName1, productName2, productName3, img1, img2, img3}) {
  return (
    <>
        <hr className='product-mobile-bar'/>
        <div className="home-products-container">
            <h2 className='home-products-title'>{title}</h2>
            <div className="home-products-items-container">
                <div className="home-products-item">
                    <div className="item-background">
                        <img className='product-images' src={img1} alt="image du clavier wave keys" />
                    </div>
                    <p className='item-name'>{productName1}</p>
                </div>
                <div className="home-products-item">
                    <div className="item-background">
                        <img className='product-images' src={img2} alt="image du clavier pebble keys 2 k380s" />
                    </div>
                    <p className='item-name'>{productName2}</p>
                </div>
                <div className="home-products-item">
                    <div className="item-background">
                        <img className='product-images' src={img3} alt="image du clavier mx keys s" />
                    </div>
                    <p className='item-name'>{productName3}</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default HomeProduct
