import axios from "axios";
export const getCoinPrices = async (id) => {
    try {
        const { data } = await axios.get(`https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=7&interval=daily`);
        return data.prices;
    } catch (error) {
        console.error("Error fetching coin prices:", error);
        return null
    }
}