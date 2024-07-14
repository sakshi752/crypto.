import axios from "axios";
const getCoinData = async (id) => {
    try {
        const { data } = await axios.get(`https://api.coingecko.com/api/v3/coins/${id}`);
        return data;
    } catch (error) {
        console.error("Error fetching coin data:", error);
        return null;
    }
};

export default getCoinData;
