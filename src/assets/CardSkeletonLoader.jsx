import React, { Component } from 'react'

export default class CardSkeletonLoader extends Component {
  render() {
    return (
    <div className="card" aria-hidden="true">
        <img src="" className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 class="card-title placeholder-glow">
                <span className="placeholder col-6"></span>
            </h5>
            <p className="card-text placeholder-glow">
            <span className="placeholder col-7"></span>
            <span className="placeholder col-4"></span>
            <span className="placeholder col-4"></span>
            <span className="placeholder col-6"></span>
            <span className="placeholder col-8"></span>
            </p>
            <a class="btn btn-primary disabled placeholder col-6"></a>
        </div>
    </div>
    )
  }
}
