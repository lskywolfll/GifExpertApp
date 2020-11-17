export const getGifs = async (category) => {
    try {
        const token = "gnJOv9a8DsGQR9sT9DOyI3nGa4SY5H7z";
        const limit = 10;
        const url = `https://api.giphy.com/v1/gifs/search?api_key=${token}&q=${encodeURI(category)}&limit=${limit}`;

        const resp = await fetch(url);
        const { data } = await resp.json();

        const gifs = data.map(({ id, title, images: { downsized_medium: { url } } }) => {
            return {
                id,
                title,
                url
            }
        });

        return gifs;
    } catch (error) {
        return error
    }
};
