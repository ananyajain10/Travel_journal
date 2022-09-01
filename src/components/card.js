
import React from 'react'

export default function Card(props){
    console.log(props)
    return(
      <div className='card'>
        <img  className='card--img'
            src={props.item.imageUrl} />
        <div className='card--j'>
          <div className='card--l-url'>
        <p className='card--l'>{props.item.location}</p>  
        <p className='card--url'><a  href={props.item.googleMapsUrl} >View on Google Maps</a></p>
        </div>

        <p className='card--t'>{props.item.title}</p>
        <p className='card--date'>{props.item.startDate} {props.item.endDate}</p>
        <p className='card--des'>{props.item.description}</p>
        </div>
           

      </div>       
    )
}

