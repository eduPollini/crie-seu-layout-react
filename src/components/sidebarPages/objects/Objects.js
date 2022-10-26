import React from 'react'
import { ObjectsData } from './ObjectsData'

function Objects() {
  return (
    <div className='pages objects'>
        <h3>Objetos</h3>
        <ul className='page-items'>
            {ObjectsData.map((item, index) => {
                return(
                    <li key={index}>
                        <button className={item.cName}>
                            {item.icon}{item.title}
                        </button>
                    </li>
                )
            })}
        </ul>
    </div>
  )
}

export default Objects