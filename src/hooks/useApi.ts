import axios from 'axios';

const api = axios.create({
    baseURL: process.env.REACT_APP_API
})

export const useAPI = () => ({
    validateToken: async (token:string) => {

    },
    signIn: async (email:string, password: string) => {

    },
    logOut: async () => {
        
    }




})