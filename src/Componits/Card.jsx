import React from 'react'
import {Bookmark} from 'lucide-react'

const Card = ({imge, Name,Time, Job, WTime, Level, Price}) => {
  return (
    <>
    <div className='parent'>
             <div className='card'>
    <div>
          <div className='top'>
          <img src={imge} alt=""  />
          <button>Save <Bookmark size={13} /> </button>

        </div>

        <div className='main'>
          <h3 >{Name} <span>{Time}</span></h3>
          <h2> {Job}</h2>
          <div className='tag'>
            <h4>{WTime} </h4>
            <h4> {Level}</h4>
          </div>
        </div>
  </div>
        <div className='bottom'>
          <div>
          <h3> {Price} </h3>
          <p>Kabul, Afghanistan</p>
          </div>
          <button>Applay Now</button>

        </div>

    </div>

    </div>

   </>
    
  )
}
export default Card