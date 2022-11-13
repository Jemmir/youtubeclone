import axios from "axios"

export const link = 'https://youtube-v31.p.rapidapi.com'

const options = {
   
    
    params: {
           maxResults: '200'
    },
    headers: {
      'X-RapidAPI-Key': '11c6f076d0msh21a465fdb41fd0cp118ec4jsnc06001f80ff8',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };
  
  

  export const fetchFromAPI = async(url) => {
    try {
        const {data} = await axios.get(`${link}/${url}`, options)

        return data
    } catch (error) {
       
    }
   
  }
  