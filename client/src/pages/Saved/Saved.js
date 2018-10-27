import React, { Component } from "react";
import DeleteBtn from "../../components/DeleteBtn";
import API from "../../utils/API";
import { List, ListItem } from "../../components/List";
import "./Saved.css";

class Detail extends Component {
  state = {
    articles: []
  };

  componentDidMount() {
    this.loadArticles();
  }

  //calls to the database so that saved articles can be loaded and displayed on the page
  loadArticles = () => {
    API.getSaved()
      .then(res =>
        this.setState({ articles: res.data })
      )
      .catch(err => console.log(err));
  };

  //deletes the article from the database
  deleteArticle = id => {
    API.deleteArticle(id)
      .then(res => this.loadArticles())
      .catch(err => console.log(err));
  };

  render() {
    return (
    <div className="container">
           
         
            <h2>Saved Articles</h2>
              {this.state.articles.length ? (
              <List>
                {this.state.articles.map(article => (
                  <ListItem key={article._id}>
                    <h5>{article.title}   <span style={{fontSize: "16px", marginLeft: "30px"}}><strong>{ (new Date(article.date)).toLocaleDateString() }</strong></span></h5>
                    <p>{article.snippet}</p>
                    <a href={article.url}>
                      <strong>
                        {article.url}
                      </strong>
                    </a>
                    <DeleteBtn onClick={() => this.deleteArticle(article._id)} />
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
         </div>
    );
  }
}

export default Detail;
