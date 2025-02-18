import axios from 'axios';


const APIBase = (props) => {
    // Request Configuration
    const configuration = {
        method: props.method,
        url: props.url,
        baseURL: import.meta.env.VITE_ENVIRONMENT === "Production" ? (
            import.meta.env.VITE_APPLICATION === "ApurvChatur" ? "https://backend-for-apurv-chatur-application.onrender.com" :
            import.meta.env.VITE_APPLICATION === "AnushreeMandape" ? "https://backend-for-anushree-mandape-application.onrender.com" :
            import.meta.env.VITE_APPLICATION === "SofieBerkin" ? "https://backend-for-sofie-berkin-application.onrender.com" : "NULL"
        ) : "http://localhost:8000",
        headers: { 
            'Content-Type': 'application/json',
        },
        withCredentials: true,
        credentials: 'include'
    }

    // Request Data
    if (props.method === "POST" || props.method === "PUT") {
        configuration.data = props.data;
    }

    // Request Params
    if (props.method === "GET") {
        configuration.params = props.params;
    }

    // Return Request
    return axios(configuration)
}

export default APIBase
