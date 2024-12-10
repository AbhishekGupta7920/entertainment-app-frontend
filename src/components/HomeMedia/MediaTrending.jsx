// from installed packages 
import React from 'react';
import { useQuery } from 'react-query';

// from custom files 
import Media from '../MediaComponents/Media';
import fetchMultiMedia from '../../utils/fetchMultiMedia';
import ShimmerUi from '../ShimmarUi/ShimmerUi';

// trending media components  
function MediaTrending() {

    // fetch media 
    const {
        data: mediaData,
        isLoading,
        isError,
    } = useQuery([1, 'trending'], () => fetchMultiMedia(1, "trending"));


    // css style 
    const containerStyle = "p-4 mt-2 flex flex-col gap-6";
    const headingStyle = "text-2xl md:text-4xl font-bold";
    const wrapperStyle = "flex sm:grid grid-rows-1 grid-flow-col overflow-x-scroll gap-5 lg:gap-7 scrollbar-corner-transparent scrollbar scrollbar-thumb-red-800 scrollbar-track-transparent"

    // render loading or error 
    if (isLoading) return(
        <div>
            <h1 className={headingStyle}> Trending Movies & Tv Shows</h1>
            <ShimmerUi />
        </div>
    )
    if (isError) return <div>Error fetching data</div>;



    return (
        <>
            <div className={containerStyle}>
                <h1 className={headingStyle}> Trending Movies & Tv Shows</h1>
                <div
                    className={wrapperStyle}
                    style={{ gridAutoColumns: "minmax(230px, auto)" }}
                >
                    <Media mediaData={mediaData} />
                </div>
            </div>
        </>
    )
}

export default MediaTrending;
