import React from 'react'

// shimmer ui for the card details page
const ShimmerUiDetailsPage = () => {
    // console.log('ahimme hjghjg');
  return (
    <div>
      <div className='flex flex-row gap-6'>
        <div className=' bg-gray-400 rounded-xl h-[90vh] w-[30vw]'></div>
        <div className='flex flex-col gap-10 '>
            <div className='h-12 max-w-28 bg-gray-400'></div>
            <div className='h-12 w-40 bg-gray-400'></div>
            <div className='h-12 w-26 bg-gray-400'></div>
            <div className='h-12 w-22 bg-gray-400'></div>
            <div className='h-12 w-22 bg-gray-400'></div>
            <div className='h-12 w-22 bg-gray-400'></div>
            
        </div>
      </div>
    </div>
  )
}

export default ShimmerUiDetailsPage
