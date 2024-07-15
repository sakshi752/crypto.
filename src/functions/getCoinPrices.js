import axios from "axios";
export const getCoinPrices = async (id,days) => {
    try {
        const { data } = await axios.get(`https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=${days}&interval=daily`);
        console.log(data.market_caps);
        console.log(data.total_volumes);
        return data.prices;
    } catch (error) {
        console.error("Error fetching coin prices:", error);
        return null
    }
}