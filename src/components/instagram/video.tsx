import React, {useEffect, useRef, useState} from 'react'
import {Instagram} from "../../types/instagram";
import {GatsbyImage, getImage, IGatsbyImageData} from "gatsby-plugin-image";

type Props = {
    instagram: Instagram
}

const InstagramVideo: React.FC<Props> = ({instagram}) => {
    const video = useRef<HTMLVideoElement | null>(null)
    const [showVideo, setShowVideo] = useState(false)
    const [imageIsLoaded, setImageIsLoaded] = useState(false)

    const image = getImage(instagram.localFile) as IGatsbyImageData

    useEffect(() => {
        if(imageIsLoaded && video.current) {
            video.current.src = instagram.media_url;
            video.current.loop = true
            video.current.muted = true
            if(video.current){
                video
                    .current
                    .play()
                    .then(() => setShowVideo(true))
            }
        }
    }, [imageIsLoaded, video.current])

    return (
        <div>
            <video style={{maxHeight: showVideo ? '100vh' : 0}} ref={video} />
            {!showVideo && (
                <GatsbyImage onLoad={() => setImageIsLoaded(true)} image={image} alt={instagram.username} />
            )}
        </div>
    )
}

export default InstagramVideo
