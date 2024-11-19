import axios from "axios";

const API_URL="https://lichess.org/api";
const TOKEN='lip_7sZF8TV5VMuXITvg8rPz';

export const userProfile= async(username)=>{
    const response= await axios.get(`${API_URL}/account`,{
        headers:{
            Authorization: `Bearer ${TOKEN}`
        }
    });
    console.log(response.data);
    return response.data;
    
}