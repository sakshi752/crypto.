import axios from "axios";

const get100Coins = async () => {
  try {
    const { data } = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd');
    return data;
  } catch (error) {
    console.error("Error fetching coins data:", error);
    return [];
  }
};

export default get100Coins;
