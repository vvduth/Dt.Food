import axios from "axios";



export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers:{
        Authorization: 
            'Bearer hCt6FZmcmEoas1kTq8Aw-2GKrE7K49v-ydRZ1_WxpKPBCws7HbF8DGAeTCpPdKEAczVTe92Lknotj3oe4_JtmL8CrxZtoQ3kOQVWKmzO2ONBpaciASuLFzPg52QVYXYx'
    }
});

