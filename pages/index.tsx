
// FETCH DATA WITH USEQUERY

import Head from 'next/head';
import { useQuery } from '@apollo/client';

//Fetch data from country api in CountriesQuery.graphql file
import QUERY_COUNTRIES from './CountriesQuery.graphql';

import styles from '../styles/Home.module.css';
import { Key, ReactElement, JSXElementConstructor, ReactFragment, ReactPortal } from 'react';

export default function Home() {
  const { data, loading, error } = useQuery(QUERY_COUNTRIES);
  // make sure all data is loaded
  if (loading) {
    return <p>loading...</p>;
  }
  // check for errors
  if (error) {
    return <p>:( an error happened</p>;
  }

  // if all good return data
  return (
    <div className={styles.container}>
      <Head>
        <title>Countries GraphQL</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <h1>Countries</h1>
      {/* let the user know we are fetching the countries */}
      {loading && <p>loading...</p>}
      <div>
        {data.countries.map((country) => (
          <div key={country.code}>{country.name}</div>
        ))}
      </div>
    </div>
  );
}
