import React from 'react'
import { ExportData } from './ExportData'

function Export() {
  return (
    <div className='pages export'>
        <h3>Exportar</h3>
        <ul className='page-items'>
            {ExportData.map((item, index) => {
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

export default Export