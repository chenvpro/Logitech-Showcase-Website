import React from 'react'
import '../HomeProduct.css'
import HomeProduct from '../HomeProduct'
import img_mx_keys_s from '../../images/mx-keys-s.svg'
import img_k120 from '../../images/k120.svg'
import img_mk470 from '../../images/mk470.svg'
import img_pro_x60 from '../../images/pro-x60.svg'
import img_g715 from '../../images/g715.svg'
import img_g915 from '../../images/g915.svg'
import img_g213_prodigy from '../../images/g213-prodigy.svg'
import img8_g413_tkl from '../../images/g413-tkl.svg'
import img9_g512_carbone from '../../images/g512-carbone.svg'


function Product() {
  return (
    <>
        <h1 className='category-title'>Produits</h1>
        <HomeProduct title="Bureautiques" productName1="Mx keys s" productName2="K120" productName3="Mk 470" img1={img_mx_keys_s} img2={img_k120} img3={img_mk470 } />
        <HomeProduct title="Gaming" productName1="Pro x60" productName2="G715" productName3="G915" img1={img_pro_x60} img2={img_g715} img3={img_g915} />
        <HomeProduct title="Starters" productName1="G213 prodigy" productName2="G413 tkl" productName3="G512 carbone" img1={img_g213_prodigy} img2={img8_g413_tkl} img3={img9_g512_carbone} />
    </>
  )
}

export default Product
