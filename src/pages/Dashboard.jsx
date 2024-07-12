import React, { useEffect, useState } from 'react';
import TabsComponent from '../components/Dashboard/TabsComponent';
import Search from '../components/Dashboard/Search';
import axios from 'axios';
import debounce from 'lodash.debounce';
import PaginationSection from '../components/Dashboard/PaginationSection';
import BackToTopBtn from '../components/Dashboard/BackToTopBtn';

const ITEMS_PER_PAGE = 10;

const Dashboard = () => {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

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
    setCurrentPage(1); // Reset to first page on search
  };

  // Pagination Logic
  const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
  const currentItems = filteredSuggestions.length
    ? filteredSuggestions.slice(indexOfFirstItem, indexOfLastItem)
    : coins.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to top
  };

  return (
    <div className='container mx-auto'>
      <Search search={search} handleSearch={handleSearch} suggestions={filteredSuggestions} />
      <TabsComponent coins={currentItems} handlePageChange={handlePageChange} />
      <PaginationSection
        currentPage={currentPage}
        totalPages={Math.ceil((filteredSuggestions.length ? filteredSuggestions.length : coins.length) / ITEMS_PER_PAGE)}
        onPageChange={handlePageChange}
      />
      <BackToTopBtn/>
    </div>
  );
};

export default Dashboard;
