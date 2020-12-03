import React, { useState, useEffect } from "react";
import styles from "./Post.module.css";


class Post extends React.Component {
  
  fetchPost = () => {
    const post = this.props.posts.find((post) => post.id = this.props.postId);
    if (post) {
      console.log('post', post);
      return (
        <div>
          <img className={styles.postImage} src={post.url} alt="post"/>
          <div className={styles.ratingContainer}>
            <div>${post.price} / night</div>
            <div className={styles.starContainer}>
                <img className={styles.star} src="https://www.flaticon.com/svg/static/icons/svg/1828/1828884.svg" alt="star"/>
                {post.rating}
            </div>
          </div>
          <h2>{post.title}</h2>
          <p className={styles.postDescription}>{post.description}</p>
        </div>
      )
    }
  }
  
  getCategoryImage = (category) => {
    switch(category) {
        case 'treehouse':
            return 'https://news.airbnb.com/wp-content/uploads/sites/4/2018/08/1-mushroom-dome-min.jpg?fit=1024,683&resize=2048,1366';
            break;
        case 'tinyhouse':
            return 'https://a0.muscache.com/im/pictures/81a84488-3297-4a9f-b9d1-6dcb3ae9e726.jpg?im_w=1440';
            break;
        case 'farmstay' :
            return 'https://a0.muscache.com/im/pictures/467632ae-09d8-4334-8620-0f67cb4fd055.jpg?im_w=1440';
            break;
        case 'boat' :
            return 'https://a0.muscache.com/im/pictures/00d3733e-a272-48d5-8601-d53170bdce97.jpg?im_w=1200';
            break;
        case 'camper' :
            return 'https://a0.muscache.com/im/pictures/dcb763ed-e6ff-4680-880e-f21026a584dc.jpg?im_w=1440';
            break;
        case 'tent' :
            return 'https://a0.muscache.com/im/pictures/1e4a48e2-91cc-404f-a9d4-5d676b009c49.jpg?im_w=1200';
            break;
        case 'yurt' :
            return 'https://a0.muscache.com/im/pictures/4cb336e9-c8b2-4337-90ec-a75d6005e938.jpg?im_w=1440';
            break;
    }
}
  
  displayCategories = () => {
    const listItems = this.props.categories.map((category, index) => 
            <a className={styles.category} href={`/categories/${category}`} key={index}>
                <img className={styles.categoryImg} src={this.getCategoryImage(category)} />
                <div className={styles.categoryBottom}>
                    <span className={styles.categoryTitle}>{category}</span>
                </div>
            </a>
    );
    return (listItems)
}
  
  
  render() {
    return (
      <div>
        <div className={styles.row2}>
          <h2 className={styles.anywhere}>Live anywhere</h2>
          <div className={styles.row2Container}>
              {this.displayCategories()}
          </div>
        </div>
        <div className={styles.postMain}>
          {this.fetchPost()}
        </div>
      </div>
    )
  }
}

export default Post
