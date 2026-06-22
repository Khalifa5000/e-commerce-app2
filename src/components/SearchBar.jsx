import './SearchBar.css';

function SearchBar({ search, setSearch }) {
  return (
    <input className="SearchBar"
      type="text"
      placeholder="ابحث..."
      value={search}
      onChange={(e) =>
        setSearch(e.target.value)
      }
    />
  );
}

export default SearchBar;