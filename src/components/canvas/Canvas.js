import React, { useState, useEffect } from 'react'
import { Stage, Layer, Rect, Circle } from 'react-konva';

import './Canvas.css'

export const Canvas = () => {

    const [width, setWidth] = useState(100);
    const [height, setHeight] = useState(100);
    var canvasWrapper = document.getElementById('canvasWrapper');
    var sidebarIcon = null;

    function resizeCanvas() {
        canvasWrapper = document.getElementById('canvasWrapper');
        setWidth(canvasWrapper.clientWidth);
        setHeight(canvasWrapper.clientHeight);
    }

    useEffect(() => {
        resizeCanvas();
        sidebarIcon = document.getElementById('sidebarIcon');
        sidebarIcon.addEventListener('click', resizeCanvas);
    }, []);


    window.addEventListener('resize', resizeCanvas);
    //sidebarIcon.addEventListener('click', resizeCanvas);

  return (
    <div className='canvas-wrapper' id='canvasWrapper'>

    
    <Stage className='' width={width} height={height}>
      <Layer>
        <Rect width={50} height={50} fill="red" />
        <Circle x={200} y={200} stroke="black" radius={50} />
      </Layer>
    </Stage>
    </div>
  );
}

export default Canvas;