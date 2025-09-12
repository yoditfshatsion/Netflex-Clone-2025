import React from 'react'
import './RowList.css'
import Row from '../Row/Row';
import request from "../../../utube/request"
const RowList = () => {
  return (
    <>
      <Row title="NETFLIX ORGINALS" fetchUrl={request.fetchNetflixOriginals} />
      <Row title="top rated movie" fetchUrl={request.fetchTopRatedMovies} />
      <Row title="trendind Now" fetchUrl={request.fetchTrending} />
      {/* <Row title="comendy Movie" fetchUrl={request.fetchComedyMovies} /> */}
      <Row title="comendy" fetchUrl={request.fetchComedyMovies} />
      <Row title="documentary" fetchUrl={request.fetchDocumentaries} />
      <Row title="science fiction" fetchUrl={request.fetchScienceFiction} />
      <Row title="TV show" fetchUrl={request.fetchTvShow} />
    </>
  );
}

export default RowList
