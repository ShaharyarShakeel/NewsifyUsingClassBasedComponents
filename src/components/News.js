import React, {useEffect, useState} from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';


export default function News(props) {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
    const [totalResults, setTotalResults] = useState(0);

    const capitalizedFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    const updateNews = async ()=> {
        props.mySetProgress(10);
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&in&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
        setLoading(true);
        let data = await fetch(url);
        props.mySetProgress(30);
        let response = await data.json();
        props.mySetProgress(70);
        console.log(response);
        setArticles(response.articles);
        setTotalResults(response.totalResults);
        setLoading(false);
        props.mySetProgress(100);
    }

    useEffect(()=>{
        document.title = `${capitalizedFirstLetter(props.category)} - News`;
        updateNews();
    },[])
    

    // handlePreviousClick = async () => {
    //     this.setState({
    //         page: this.state.page - 1,
    //     })
    //     this.updateNews();
    // }

    // handleNextClick = async () => {
    //     this.setState({
    //         page: this.state.page + 1,
    //     })
    //     this.updateNews();
    // }

    const fetchMoreData = async () => {
        // this.setState({
        //     page: this.state.page + 1,
        // })
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&in&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`;
        setPage(page+1);
        // this.setState({ loading: true });
        setLoading(true);
        let data = await fetch(url);
        let response = await data.json();
        console.log(response);
        setArticles(articles.concat(response.articles));
        setTotalResults(response.totalResults);
        setLoading(false);
        
    }
    return (
        <>
            <div className="container my-3">
                <h1 className='text-center' style={{marginTop: "80px"}}>Newsify - Top {capitalizedFirstLetter(props.category)} Headlines</h1>
                {loading && <Spinner />}
                <InfiniteScroll
                    dataLength={articles.length}
                    next={fetchMoreData}
                    hasMore={articles.length !== totalResults}
                    loader={loading && <Spinner />}
                >
                    <div className="container">
                        <div className="row">
                            {articles.map((element) => {
                                return <div className="col-md-4" key={element.url}>
                                    <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description : ""} newsURL={element.url} imageURL={element.urlToImage ? element.urlToImage : "https://cdn.dribbble.com/users/95510/screenshots/1694572/no-chat_gif.gif"} author={element.author ? element.author : ""} date={element.publishedAt} source={element.source.name} />
                                </div>
                            })}
                        </div>
                    </div>
                </InfiniteScroll>
            </div>
            {/* <div className="container d-flex justify-content-between">
                        <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handlePreviousClick}>&larr; Previous</button>
                        <button disabled={this.state.page + 1 > Math.ceil((this.state.totalResults / props.pageSize))} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
                    </div> */}
        </>
    )
}
News.defaultProps = {
    country: 'in',
    pageSize: 8,
    category: 'general'

}
News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
}
