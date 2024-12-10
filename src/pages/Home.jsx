// importing installed packages
import React from 'react';

// importing custom files 
import MediaRecommend from '../components/HomeMedia/MediaRecommend';
import MediaTrending from '../components/HomeMedia/MediaTrending';
import HomePageVideo from '../components/HomeMedia/HomePageVideo';

// home page 
function Home() {
    return (
        <>
            <HomePageVideo />
            <MediaTrending />
            <MediaRecommend />
        </>
    )
}

export default Home;
