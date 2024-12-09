import axios from "axios"

export const taskAPI = axios.create({
    baseURL: 'https://connections-api.goit.global/',
})