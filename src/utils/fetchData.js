export const exerciseOptions = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '3d2b729f47msh645ef0dd28b7fcep1cc708jsn761a04667573',
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
};

 export const youtubeOptions = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '3d2b729f47msh645ef0dd28b7fcep1cc708jsn761a04667573',
        'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
    }
};


export const fetchData = async (url, options) => {
    const response = await fetch(url, options);
    const data = await response.json();

    return data;
};