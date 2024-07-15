import axios from "axios";
export const getCoinPrices = async (id,days) => {
    try {
        const { data } = await axios.get(`https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=${days}&interval=daily`);
        return data.prices;
    } catch (error) {
        console.error("Error fetching coin prices:", error);
        return null
    }
}