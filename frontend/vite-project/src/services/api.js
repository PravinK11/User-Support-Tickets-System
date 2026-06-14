import axios from "axios";

const API = axios.create({
    baseURL: "http://localhost:8080"
});



export const getUsers = async () => {
    const response = await API.get("/users");
    return response.data;
};



export const getTicketsByUser = async (userId) => {
    const response = await API.get(
        `/tickets/user/${userId}`
    );

    return response.data;
};


export const getResponsesByTicket = async (
    ticketId
) => {
    const response = await API.get(
        `/responses/${ticketId}`
    );

    return response.data;
};