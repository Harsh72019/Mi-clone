import React from 'react'
import "../styles/Offers.css"
import Offer from './Offer.js'

const Offers = ({offers}) => {
  return (
    <div className='offerSection'>
        {
            offers.map((item,index) => (
               <Offer key={item.image} index={index} src={item.image} link = {item.url} />
            ))
        }
    </div>
  )
}

export default Offers