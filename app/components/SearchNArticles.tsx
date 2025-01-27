"use client"
import React, { useState } from "react";
import SearchForm from "./SearchForm";
import Articles from "./Articles";
import { Article } from "./TrendingArticles";
import DropdownMenu3 from "@/app/components/DropdownMenu3";

const SearchNArticles = ({ articles }: { articles: Article[] }) => {
  const [newArticles, setNewArticles] = useState<Article[]>(articles); // Directly set the initial articles
  const [value, setValue] = useState("");
  const [filter, setFilter] = useState("all");

  // Search handler
  const handleSearch = (event: React.FormEvent) => {
    event.preventDefault();
  
    // Filter the articles
    const filteredArticles = articles.filter((article) => {
      const matchesTitle = article.title.toLowerCase().includes(value.toLowerCase());
      const matchesOrganization = article.organization?.name.toLowerCase().includes(value.toLowerCase());
      const matchesTags = article.tag_list.some((tag) =>
        tag.toLowerCase().includes(value.toLowerCase())
      );
  
      return matchesTitle || matchesOrganization || matchesTags;
    });
  
    setNewArticles(filteredArticles);
  };
  
  // Handle input changes
  const handleInputChange = (inputData: string) => {
    setValue(inputData);
  };

  // Handles filtering
  const handleFilterChange = (selectedFilter: string) => {
    setFilter(selectedFilter);
  
    if (selectedFilter === "all") {
      // Reset to show all articles
      setNewArticles(articles);
      return;
    }
  
    // Filter articles based on search value
    let filteredArticles = articles.filter(
      (article) =>
        article.title.toLowerCase().includes(value.toLowerCase()) ||
        article.organization?.name.toLowerCase().includes(value.toLowerCase()) ||
        article.tag_list.some((tag) => tag.toLowerCase().includes(value.toLowerCase()))
    );
  
    // Apply sorting for "newest" and "oldest"
    if (selectedFilter === "newest") {
      filteredArticles = filteredArticles.sort(
        (a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
      );
    } else if (selectedFilter === "oldest") {
      filteredArticles = filteredArticles.sort(
        (a, b) => new Date(a.created_at).getTime() - new Date(b.created_at).getTime()
      );
    }
  
    setNewArticles(filteredArticles);
  };
  
  

  return (
    <>
      <SearchForm handleFilterChange={handleFilterChange}  value={value} handleInputChange={handleInputChange} handleSearch={handleSearch}/>
      <Articles articles={newArticles} />
    </>
  );
};

export default SearchNArticles;
