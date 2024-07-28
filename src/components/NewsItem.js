import React from 'react'

export default function NewsItem(props) {
  let { title, description, imageURL, newsURL, author, date, source } = props;
  return (
    <div className='my-3'>
      <div className="card">
        <div style={{ position: 'relative' }}>
          <span className="badge rounded-pill bg-danger" style={{ display: "flex", justifyContent: 'flex-end', position: 'absolute', right: -5, top: -10 }}>
            {source}
          </span>
        </div>
        <img src={imageURL} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <p className="card-text"><small>By {author} on {new Date(date).toGMTString()}</small></p>
          <a rel="noreferrer" href={newsURL} target='_blank' className="btn btn-sm btn-dark">Read More</a>
        </div>
      </div>
    </div>
  )
}
