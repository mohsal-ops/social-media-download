import React from 'react'
import titokDownload, { facebookDownload, instagramDownload, youtubeDownload } from './apiCall'

export default async function fetchdata({ link, socialPlatform }: { socialPlatform:string, link: string }) {
    
    if (socialPlatform === 'Instagram') {
        const result = await instagramDownload({ link })
        const status = result.success
        return { result, status }    }

    if (socialPlatform === 'TikTok') {
        const result = await titokDownload({ link })
        const status = result.success
        return { result, status }    }

    if (socialPlatform === 'Facebook') {
        const result = await facebookDownload({ link })
        const status = result.success
        return { result, status }
    }

    if (socialPlatform === 'YouTube') {
        const result = await youtubeDownload({ link })
        const status = result?.success 
        return {result,status}
    }
    return { result: null, status: false }; // Default return value

}