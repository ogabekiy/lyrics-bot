import axios from "axios";
import dotenv from 'dotenv';
dotenv.config();

const base_url = process.env.BASE_URL;

// get albums
export async function getAlbums() {
    try {
        const response = await axios.get(`${base_url}/albums/all`);
        // console.dir(response.data, { depth: null }); 
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}
// get song by query

export async function getSongByQuery(query){
    try{
        const response = await axios.get(`${base_url}/songs/search/${encodeURIComponent(query)}`);
        // console.log(response.data);
        return response.data
    } catch(err){
        console.error('Error fetching data', err.message);
    }
}