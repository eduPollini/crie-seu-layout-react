import React, { useState } from 'react'
import './Sidebar.css'
import { Routes, Route, Link } from 'react-router-dom'

import SelectLayout from '../sidebarPages/selectLayout/SelectLayout'
import Build from '../sidebarPages/build/Build'
import Objects from '../sidebarPages/objects/Objects'
import Export from '../sidebarPages/export/Export'

import { SiBlueprint } from 'react-icons/si'
import { MdChair } from 'react-icons/md'
import { FaHammer, FaShareSquare, FaChevronLeft, FaChevronRight } from 'react-icons/fa'

function Sidebar() {

    const [click, setClick] = useState(false);
    const [clickSelectLayout, setClickSelectLayout] = useState(true);
    const [clickBuild, setClickBuild] = useState(false);
    const [clickObjects, setClickObjects] = useState(false);
    const [clickExport, setClickExport] = useState(false);

    const handleClick = () => setClick(!click);
    const handleClickSelectLayout = () => {
        setClickSelectLayout(true);
        setClickBuild(false);
        setClickObjects(false);
        setClickExport(false);
    }
    const handleClickBuild = () => {
        setClickSelectLayout(false);
        setClickBuild(true);
        setClickObjects(false);
        setClickExport(false);
    }
    const handleClickObjects = () => {
        setClickSelectLayout(false);
        setClickBuild(false);
        setClickObjects(true);
        setClickExport(false);
    }
    const handleClickExport = () => {
        setClickSelectLayout(false);
        setClickBuild(false);
        setClickObjects(false);
        setClickExport(true);
    }
    

    return(
        <>
            <nav className={click ? 'sidebar hide' : 'sidebar'}>
                <ul className='sidebar-menu'>
                    <li className='sidebar-item'>
                        <Link to='/' className={clickSelectLayout ? 'sidebar-links bg-white' : 'sidebar-links bg-dark-green'} onClick={handleClickSelectLayout}>
                            <SiBlueprint/>
                        </Link>
                    </li>
                    <li className='sidebar-item'>
                        <Link to='/build' className={clickBuild ? 'sidebar-links bg-white' : 'sidebar-links bg-dark-green'} onClick={handleClickBuild}>
                            <FaHammer/>
                        </Link>
                    </li>
                    <li className='sidebar-item'>
                        <Link to='/objects' className={clickObjects ? 'sidebar-links bg-white' : 'sidebar-links bg-dark-green'} onClick={handleClickObjects}>
                            <MdChair/>
                        </Link>
                    </li>
                    <li className='sidebar-item'>
                        <Link to='/export' className={clickExport ? 'sidebar-links bg-white' : 'sidebar-links bg-dark-green'} onClick={handleClickExport}>
                            <FaShareSquare/>
                        </Link>
                    </li>
                </ul>

                <div className='sidebar-pages'>
                    <Routes>
                        <Route path='/' element={<SelectLayout/>} />
                        <Route path='/build' element={<Build/>} />
                        <Route path='/objects' element={<Objects/>} />
                        <Route path='/export' element={<Export/>} />
                    </Routes>
                </div>
            </nav>

            <div id='sidebarIcon' className={click ? 'sidebar-icon left' : 'sidebar-icon'} onClick={handleClick}>
                {click ? <FaChevronRight/> : <FaChevronLeft/>}
            </div>
        </>
    )
}

export default Sidebar;