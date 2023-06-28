import { SyntheticEvent, useState } from 'react';

import { getUser } from 'api';
import { usePageContext } from 'context/PageContext';
import Search from 'media/Search';

export default function SearchForm() {
  const { setData, error, setError } = usePageContext();
  const [search, setSearch] = useState('');

  function handleSubmit(e: SyntheticEvent) {
    e.preventDefault();
    getUser(search, setData, setError);
    setSearch('');
  }

  return (
    <form className="search--form" onSubmit={handleSubmit}>
      <Search className="search--icon" size={26} />
      <input
        type="text"
        className="search--input"
        placeholder="Search GitHub username…"
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
          setError(false);
        }}
      />
      {error && <p className="search-error">No Results</p>}
      <button type="submit" className="search--button">
        Search
      </button>
    </form>
  );
}
