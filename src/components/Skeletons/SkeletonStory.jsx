import React from 'react'

import SkeletonElement from './SkeletonElement'

const  SkeletonStory =({theme}) =>  {

  const themeClass = theme || "light" ; 
  return (
   
    <div className={`skeleton-wrapper ${themeClass} `}>

        <div className="skeleton-story">
            <SkeletonElement type="thumbnail"/>
            <SkeletonElement type="Title"/>
            <SkeletonElement type="text"/>
            <SkeletonElement type="text"/>
            <SkeletonElement type="text"/>
        </div>
    
    </div>
    
  )
}

export default SkeletonStory