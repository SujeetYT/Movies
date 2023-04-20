import React, { Component } from 'react'
import {movies} from "./getMovies"
import CardSkeletonLoader from "./../assets/CardSkeletonLoader"

export default class Banner extends Component {
  render() {
    let movie = movies.results[0];
    return (
        <>
            {
                (movie === '')?
                <CardSkeletonLoader />:
                <div className="banner-card">
                    <img src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} className="card-img-top banner-img" alt="..."/>
                    {/* <div className="card-body"> */}
                    <h5 className="banner-title">{movie.original_title}</h5>
                    <p className="banner-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                    {/* </div> */}
                </div>
            }
        </>
    )
  }
}
