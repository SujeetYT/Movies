import React, { Component } from 'react'
import { movies } from './getMovies'
import axios from 'axios';

export default class Movies extends Component {
    constructor(){
        super();
        this.state = {
            parr:[1]
        }
    }

    componentDidMount(){

    }
    
    render() {
    let movie = movies.results;
    return (
        <>
        {
            (movie.length == 0)?
            <div class="spinner-border" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>:
            <div>
                <h3 className='text-center'><strong>Trending</strong></h3>
                <div className="movies-list">
                    {movie.map((movieObj)=>(
                    <div className="movies-card">
                        <img src={`https://image.tmdb.org/t/p/original${movieObj.backdrop_path}`} className="card-img-top movies-img" alt={movieObj.original_title}/>
                        <h5 className="movies-title">{movieObj.original_title}</h5>
                        <div className="button-wrapper" style={{display:'flex', justifyContent:'center', width:'1005'}}>
                            <a href="#" className="btn btn-primary movies-button">Add to favourite</a>
                        </div>
                    </div>
                    ))}
                </div>
                <div style={{display:'flex', justifyContent:'center', }}>
                    <nav aria-label="Page navigation example">
                        <ul class="pagination">
                            <li class="page-item"><a class="page-link" href="#">Previous</a></li>
                            {
                                this.state.parr.map((value)=>(
                                    <li class="page-item"><a class="page-link" href="#">{value}</a></li>
                                ))
                            }
                            <li class="page-item"><a class="page-link" href="#">Next</a></li>
                        </ul>
                    </nav>
                </div>
            </div>

        }
        </>
    )
  }
}
