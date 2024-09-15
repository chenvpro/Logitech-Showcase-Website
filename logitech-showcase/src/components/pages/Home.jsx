import React from 'react'
import Intro from '../Intro'
import HomeProduct from '../HomeProduct'
import img_wave_keys from '../../images/wave-keys.svg'
import img_pebble_keys_2_k380s from '../../images/pebble-keys-2-k380s.svg'
import img_mx_keys_s from '../../images/mx-keys-s.svg'
import img_mx_mechanical from '../../images/mx-mechanical.svg'

function Home() {
  return (
    <>
      <Intro/>
      <HomeProduct title="Nouveautés" productName1="Wave keys" productName2="pebble keys 2 k380s" productName3="Mx keys s" img1={img_wave_keys} img2={img_pebble_keys_2_k380s} img3={img_mx_keys_s}/>
      <HomeProduct title="Best Sellers" productName1="Mx mechanical" productName2="Mx keys s" productName3="Pebble keys 2 k380s" img1={img_mx_mechanical} img2={img_mx_keys_s} img3={img_pebble_keys_2_k380s} />
    </>
  )
}

export default Home
