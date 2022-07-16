import React, { useState } from "react";
import BlogList from "../../components/Home/BlogList";
import Header from "../../components/Home/Header/index";
import SearchBar from "../../components/Home/SearchBar/index";
import { blogList } from "../../config/data";
import EmptyList from "../../components/common/EmptyList/index";

const Home = () => {
  const [blogs, setBlogs] = useState(blogList);
  const [searchKey, setSearchKey] = useState("");

  //Search Submit
  const handleSearchSubmit = (event) => {
    event.preventDefault();
    handlSearchResults();
  };

  //Search for Blog
  const handlSearchResults = () => {
    const allBlogs = blogList;
    const filteredBlogs = allBlogs.filter((blog) =>
      blog.category.toLowerCase().includes(searchKey.toLowerCase().trim())
    );
    setBlogs(filteredBlogs);
  };

  const handleClearSearch = () => {
    setBlogs(blogList);
    setSearchKey("");
  };

  return (
    <div>
      <Header />

      <SearchBar
        value={searchKey}
        formSubmit={handleSearchSubmit}
        clearSearch={handleClearSearch}
        handleSearchKey={(e) => setSearchKey(e.target.value)}
      />

      {!blogs.length ? <EmptyList /> : <BlogList blogs={blogs} />}
    </div>
  );
};

export default Home;
