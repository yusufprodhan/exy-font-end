import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

const baseURL = `${process.env.VUE_APP_API_URL}/api/v1`;

// auth token
const authToken = localStorage.getItem("token");

export default axios.create({
            baseURL,
            headers: {
                'Content-Type': 'application/json',
                Authorization: `${authToken ? `Bearer ${authToken}` : ''}`,
    }
});
