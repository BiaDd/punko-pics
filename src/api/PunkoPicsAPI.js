// fetch the pictures from the bucket
export const fetchPictures = async () => {
    try {
        const res = await fetch(`/pictures`, {
            "method": "GET",
            "headers": {
                'punkopics-api-key': process.env.VUE_APP_PUNKOPICS_API_KEY
            }
        })
        if (res.status === 200) {
            return await res.json();
        }
        else {
            return false;
        }
    }
    catch (error) {
        return false;
    }
}