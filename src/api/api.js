import axios from 'axios';
export const getTopMovies = async (url) => {
   try {
        const response = await axios.get(url);
        return response
   } catch (error) { 
    console.log(error)
}
    
}; 
export var datas;
