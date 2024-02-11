// fetch the pictures from the bucket
const api_link = import.meta.env.VITE_APP_BACKEND_API;
const api_key = import.meta.env.VITE_APP_PUNKOPICS_API_KEY;

export const fetchPictures = async () => {
    try {
        const res = await fetch(`${api_link}/pictures`, {
            "method": "GET",
            "headers": {
                'Content-Type': 'application/json',
                'punkopics-api-key': api_key
            }
        });
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