import React from 'react'
import { SelectLayoutData } from './SelectLayoutData'

function SelectLayout() {
  return (
    <div className='pages selectLayout'>
        <h3>Selecionar Layout</h3>
        <ul className='page-items'>
            {SelectLayoutData.map((item, index) => {
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

export default SelectLayout