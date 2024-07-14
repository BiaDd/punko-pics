// fetch the pictures from the bucket
const api_link = import.meta.env.VITE_APP_BACKEND_API || "http://localhost:8000";

export const generatePicture = async (prompt) => {
    try {
        const response = await fetch(`${import.meta.env.VITE_APP_DREAMBOOTH_API}`, {
            "method": "POST",
            "body": JSON.stringify(prompt),
            "headers": {
                'Authorization': `Bearer ${import.meta.env.VITE_APP_HUGGINGFACE_TOKEN}`
            }
        }).then((res) => res.blob())
        .then((blob) => {
            return URL.createObjectURL(blob);
        });
        
        if (response) {
            return response;
        }

        else {
            return false;
        }
    }
    catch(error) {
        return false;
    }
}

export const fetchPictures = async () => {
    try {
        const res = await fetch(`${api_link}/pictures`, {
            "method": "GET",
            "headers": {
                'Content-Type': 'application/json',
                'punkopics-api-key': import.meta.env.VITE_APP_PUNKOPICS_API_KEY
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