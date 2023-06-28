import { useEffect } from 'react';

import { api } from 'api';
import { usePageContext } from 'context/PageContext';

import Card from './components/Card';
import Header from './components/Header';
import SearchForm from './components/SearchForm';

export default function Home() {
  const { setData, setError } = usePageContext();

  useEffect(() => {
    api
      .get('users/octocat')
      .then((response) => setData(response.data))
      .catch(setError);
  }, [setData, setError]);

  return (
    <section className="home">
      <div className="home--container">
        <Header />
        <SearchForm />
        <Card />
      </div>
    </section>
  );
}
