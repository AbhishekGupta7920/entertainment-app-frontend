import React from 'react'

// shimmer ui for the image cards 
const ShimmerUi = () => {
    // console.log("shimmer ui ");
    const wrapperStyle = "mt-10 grid gap-10 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
  return (
    <div>
      <div
                className={wrapperStyle}
                style={{ gridAutoColumns: "minmax(230px, auto)" }}
            >
                <div className='bg-gray-300 w-[230px] h-[150px] rounded-xl '>
                           ShimmarUi
                </div>
                <div className='bg-gray-300 w-[230px] h-[150px] rounded-xl '>
                           ShimmarUi
                </div>
                <div className='bg-gray-300 w-[230px] h-[150px] rounded-xl '>
                           ShimmarUi
                </div>
                <div className='bg-gray-300 w-[230px] h-[150px] rounded-xl '>
                           ShimmarUi
                </div>
                <div className='bg-gray-300 w-[230px] h-[150px] rounded-xl '>
                           ShimmarUi
                </div>
               
            </div>
    </div>
  )
}

export default ShimmerUi
