import {IGatsbyImageData} from "gatsby-plugin-image";

export type Instagram = {
    media_id: string
    media_type: string
    media_url: string
    username: string
    localFile: IGatsbyImageData
}