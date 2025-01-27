"use client";
import { Input } from "@chakra-ui/react";
import { CiSearch } from "react-icons/ci";

interface Props {
  value: string;
  handleSearch: (event: React.FormEvent) => void;
  handleInputChange: (value: string) => void;
  handleFilterChange: (filter: string) => void; // New prop for filter selection
}

const SearchForm = ({ handleInputChange, value, handleSearch, handleFilterChange }: Props) => {
  return (
    <div className="flex justify-center my-6 gap-2">
      <form
        onSubmit={handleSearch}
        className="bg-white flex lg:w-[40%] md:w-[60%] w-[100%] gap-2 justify-between items-center rounded pr-2"
      >
        <Input
          value={value}
          onChange={(event) => handleInputChange(event.target.value)}
          placeholder="Search title or organisation"
          size="sm"
          type="search"
          my={0}
          border="none"
          _focusVisible={{ outline: "none" }}
          focusBorderColor="none"
          _focus={{ outline: "none", border: "none" }}
        />
        <button type="submit">
          <CiSearch className="text-2xl text-black" />
        </button>
      </form>

      <select
        onChange={(e) => handleFilterChange(e.target.value)} // Call the handler on change
        className="px-2 rounded lg:w-auto md:w-auto w-[10%]"
      >
        <option value="all">All posts</option>
        <option value="newest">Newest posts</option>
        <option value="oldest">Oldest posts</option>
      </select>
    </div>
  );
};

export default SearchForm;
