import React from 'react'
import { BiText } from 'react-icons/bi'
import { FaDoorClosed } from 'react-icons/fa'
import { GiBrickWall, GiFlatPlatform } from 'react-icons/gi'
import { MdWindow } from 'react-icons/md'
import { BsBox } from 'react-icons/bs'

export const BuildData = [
    {
        icon: <BsBox/>,
        title: 'Cômodo',
        cName: 'pages-btn'
    },
    {
        icon: <GiBrickWall/>,
        title: 'Parede',
        cName: 'pages-btn'
    },
    {
        icon: <GiFlatPlatform/>,
        title: 'Superfície',
        cName: 'pages-btn'
    },
    {
        icon: <FaDoorClosed/>,
        title: 'Porta',
        cName: 'pages-btn'
    },
    {
        icon: <MdWindow/>,
        title: 'Janela',
        cName: 'pages-btn'
    },
    {
        icon: <BiText/>,
        title: 'Texto',
        cName: 'pages-btn'
    },

]