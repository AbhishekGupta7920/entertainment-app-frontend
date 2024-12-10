// from installed packages 
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';

// from custom files 
import fetchMultiMedia from '../../utils/fetchMultiMedia';

import ShowVideo from './ShowVideo';
import ShimmerUiHomePage from '../ShimmarUi/ShimmerUiHomePage';

// showing a video on the home page   
function HomePageVideo() {
    const [isHovered, setIsHovered] = useState(null)

    // fetch media 
    const {
        data: mediaData,
        isLoading,
        isError,
    } = useQuery([1, 'trending'], () => fetchMultiMedia(1, "trending"));

    // till data is not fetched show shimmer ui to ui for engaging look
    if(isLoading) return <ShimmerUiHomePage />
    return(
        <div className=''>
          <ShowVideo  mediaData={mediaData}/>
        </div>
    )
}


export default HomePageVideo;