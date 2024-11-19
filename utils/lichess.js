import axios from "axios";

const API_PUBLIC_URL='https://lichess.org/api';
const TOKEN=process.env.ACCESS_TOKEN;

export const userProfile= async(username)=>{
    const response= await axios.get(`${API_PUBLIC_URL}/user/${username}`,{
        headers:{
            Authorization: `Bearer ${TOKEN}`
        }
    });
    console.log(response.data);
    return response.data;
    
}