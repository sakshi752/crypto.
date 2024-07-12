import React, { useEffect, useState } from 'react';
import TabsComponent from '../components/Dashboard/TabsComponent';
import Search from '../components/Dashboard/Search';
import axios from 'axios';
import debounce from 'lodash.debounce';

const Dashboard = () => {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);

  const fetchCoins = async () => {
    try {
      const { data } = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd');
      setCoins(data);
    } catch (error) {
      console.log("error:", error);
    }
  };

  useEffect(() => {
    fetchCoins();
  }, []);

  const debouncedFilter = debounce((searchValue) => {
    const suggestions = coins.filter((coin) =>
      coin.name.toLowerCase().includes(searchValue.toLowerCase())
    );
    setFilteredSuggestions(suggestions);
  }, 300);

  const handleSearch = (e) => {
    const searchValue = e.target.value;
    setSearch(searchValue);
    debouncedFilter(searchValue);
  };

  return (
    <div className='container mx-auto'>
      <Search search={search} handleSearch={handleSearch} suggestions={filteredSuggestions} />
      <TabsComponent coins={filteredSuggestions.length ? filteredSuggestions : coins} />
    </div>
  );
};

export default Dashboard;
