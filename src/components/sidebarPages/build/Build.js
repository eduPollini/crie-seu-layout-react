import React from 'react'
import { BuildData } from './BuildData'

function Build() {
  return (
    <div className='pages build'>
        <h3>Construir</h3>
        <ul className='page-items'>
            {BuildData.map((item, index) => {
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

export default Build