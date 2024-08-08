export default async function titokDownload({link}:{link:string}) {
    const url = `https://social-media-video-downloader.p.rapidapi.com/smvd/get/tiktok?url=${link}`;
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '95645dc66amshd46b97ea279fd35p156efbjsn6378dcd2d7ca',
            'x-rapidapi-host': 'social-media-video-downloader.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        return result
    } catch (error) {
        console.error(error);
    }
}
export  async function instagramDownload({ link }: { link: string }) {
    const url = `https://social-media-video-downloader.p.rapidapi.com/smvd/get/instagram?url=${link}`;
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '95645dc66amshd46b97ea279fd35p156efbjsn6378dcd2d7ca',
            'x-rapidapi-host': 'social-media-video-downloader.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        return result
    } catch (error) {
        console.error(error);
    }
}
export async function facebookDownload({ link }: { link: string }) {
    const url = `https://social-media-video-downloader.p.rapidapi.com/smvd/get/facebook?url=${link}`;
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '95645dc66amshd46b97ea279fd35p156efbjsn6378dcd2d7ca',
            'x-rapidapi-host': 'social-media-video-downloader.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        return result
    } catch (error) {
        console.error(error);
    }
}

export async function youtubeDownload({ link }: { link: string }) {
    const url = `https://social-media-video-downloader.p.rapidapi.com/smvd/get/youtube?url=${link}`;
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '95645dc66amshd46b97ea279fd35p156efbjsn6378dcd2d7ca',
            'x-rapidapi-host': 'social-media-video-downloader.p.rapidapi.com'
        }
    }

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        return result
    } catch (error) {
        console.error(error);
    }
}

