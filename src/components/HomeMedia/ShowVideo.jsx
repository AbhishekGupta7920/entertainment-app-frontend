import React, { useEffect, useState } from 'react'
import MediaPlay from '../MediaComponents/MediaPlay';

import axios from 'axios';
import baseUrl from '../../utils/baseUrl';
import { LuDot } from 'react-icons/lu';
import { MdLocalMovies } from 'react-icons/md';
import { TbDeviceTvOld } from 'react-icons/tb';


// showwing a video on the home page with details
const ShowVideo = ({ mediaData }) => {
    const [mediaImage, setMediaImage] = useState(null);
    const [isHovered, setIsHovered] = useState(null)

    // fetch extra high quality image 
    useEffect(() => {
        let isMounted = true;
        const fetchImage = async () => {
            try {
                const { data } = await axios.get(`${baseUrl}/media/Movie/image/${mediaData[0].id}`);
                if (isMounted) {
                    setMediaImage(data.imagePath);
                }
            } catch (error) {
                // console.error("Error fetching multi-media:", error);
                setMediaImage(null);
            }
        };
        const timer = setTimeout(() => {
            fetchImage();
        }, 2000);
        return () => {
            clearTimeout(timer);
            isMounted = false;
        };
    }, [mediaData]);


    // css style 
    const containerStyle = "p-4 mt-2 flex flex-col gap-6";
    

    return (
        <>
            <div className={containerStyle}>
                {mediaData && (
                    <div key={mediaData[0].id} className="relative h-[66vh] flex flex-col gap-2">
                        <div
                            className="relative h-full"
                            onMouseEnter={() => setIsHovered(mediaData[0].id)}
                            onMouseLeave={() => setIsHovered(null)}
                        >
                            {/* Media Image */}
                            <img
                                src={`https://image.tmdb.org/t/p/w500/${mediaImage}`}
                                className="w-full h-full object-cover rounded-lg"
                                alt="img"
                            />

                            {/* Media Play Button */}
                            {isHovered === mediaData[0].id && (
                                <MediaPlay singleMediaData={mediaData[0]} />
                            )}

                            {/* Media Info (positioned at the lower bottom) */}
                            <div className="absolute bottom-6 left-6 text-white">
                                <span className="text-2xl font-bold">
                                    {mediaData[0].title ? mediaData[0].title : "NA"}
                                </span>
                                <div className="flex gap-2 items-center text-sm mt-2">
                                    <span>
                                        {mediaData[0].releaseDate
                                            ? mediaData[0].releaseDate.split('-')[0]
                                            : "NA"}
                                    </span>
                                    <LuDot />
                                    <span>
                                        {mediaData[0].mediaType === "movie" ? (
                                            <MdLocalMovies />
                                        ) : (
                                            <TbDeviceTvOld />
                                        )}
                                    </span>
                                    <span>
                                        {mediaData[0].mediaType ? "Movie" : "NA"}
                                    </span>
                                    <LuDot />
                                    <span>{mediaData[0].isAdult ? "18+" : "PG"}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>

        </>
    )
}

export default ShowVideo;
