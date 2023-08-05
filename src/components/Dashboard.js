import React, { Component } from 'react'
import Book from './Book';
import Navbar from './Navbar';

export default class Dashboard extends Component {
    articles = [
        {
            'title':'Rich Dad And Poor Dad',
            'image':'https://pngimg.com/uploads/book/book_PNG2111.png',
            'description':"This book is osam for your thinking and your future"
        },
        {
            'title':'Rich Dad And Poor Dad',
            'image':'https://pngimg.com/uploads/book/book_PNG2111.png',
            'description':"This book is osam for your thinking and your future"
        },
        {
            'title':'Rich Dad And Poor Dad',
            'image':'https://pngimg.com/uploads/book/book_PNG2111.png',
            'description':"This book is osam for your thinking and your future"
        },
        {
            'title':'Rich Dad And Poor Dad',
            'image':'https://pngimg.com/uploads/book/book_PNG2111.png',
            'description':"This book is osam for your thinking and your future"
        },
        {
            'title':'Rich Dad And Poor Dad',
            'image':'https://pngimg.com/uploads/book/book_PNG2111.png',
            'description':"This book is osam for your thinking and your future"
        },
        {
            'title':'Rich Dad And Poor Dad',
            'image':'https://pngimg.com/uploads/book/book_PNG2111.png',
            'description':"This book is osam for your thinking and your future"
        },{
            'title':'Rich Dad And Poor Dad',
            'image':'https://pngimg.com/uploads/book/book_PNG2111.png',
            'description':"This book is osam for your thinking and your future"
        }
    ];
    constructor() {
      super();
      this.state = {
        articles: this.articles,
      };
      // console.log("constructor"+ this.state.artical);
    }

    // componentDidMount(props) {
    //     axios
    //       .get(
    //         "https://gnews.io/api/v4/top-headlines?country=in&lang=en&apikey=d123564b538f828838a90f39b3eed9fe"
    //         // 'https://newsapi.org/v2/top-headlines?country=in&apiKey=2d5d6108c52b4e7781b7c229d4679c0c&page=2'
    //       )
    //       .then((response) => {
    //         if (response.data.articles !== undefined) {
    //           this.setState({
    //             articles: response.data.articles
    //         })
    //         }
    //       })
    //       .catch((error) => {
    //         console.error(error);
    //       });
    //   }
    
      prevviousButton = ()=>{
        console.log("previous");
      }
    
      nextButton = ()=>{
        console.log("");
      }
    render() {
    return (
        <>
        <div className="container my-5">
        <div className="row">
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-4 mb-4" key={element.url}>
                <Book
                  title={
                    element.title === null ? "" : element.title.slice(0, 40)
                  }
                  // discription={element.description}
                  discription={
                    element.description === null
                      ? ""
                      : element.description.slice(0, 70) + "..."
                  }
                  imageurl={
                    element.image === null
                      ? "https://pngimg.com/uploads/book/book_PNG2111.png"
                      : "https://pngimg.com/uploads/book/book_PNG2111.png"
                  }
                  newsUrl={element.url}
                />
              </div>
            );
          })}
        </div>
        <div className="row justify-content-between">
        <button type="button" className="col-auto btn btn-dark" onClick={this.prevviousButton}>&#8249; Prev</button>
        <button type="button" className="col-auto btn btn-dark" onClick={this.nextButton}>Next &#8250;</button>
        </div>
      </div>
      <Navbar/>
      </>
    )
  }
}
