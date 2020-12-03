import React from "react";
import styles from "./Categories.module.css";

class Categories extends React.Component {
    
    displayPosts = () => {
        const posts = this.props.posts[this.props.category];
        console.log('posts', posts);
        if (posts) {
          let listPosts = [];
          Object.keys(posts).map((key) => {
            console.log('key', key);
            listPosts.push(posts[key]);
          });
          const listItems = listPosts.map((post, index) => 
          <a className={styles.post} href={`/posts/${post.id}`} key={post.title + post.id}>
              <img className={styles.postImg} src={post.url} />
              <div className={styles.bottom}>
                  <div className={styles.title}>
                      <h2>{post.title}</h2>
                      <div className={styles.starContainer}>
                          <img className={styles.star} src="https://www.flaticon.com/svg/static/icons/svg/1828/1828884.svg" alt="star"/>
                          {post.rating}
                      </div>
                  </div>
                 
                  <div>
                      <span className={styles.subtitle}>{post.subtitle}</span>
                      <span className={styles.price}>${post.price}</span>
                  </div>
                </div>
            </a>
        );
        return (listItems);
        }
      }
            
    render() {
        return (
            <div className={styles.root}>
              <h2 className={styles.categoryTitle}>{this.props.category}</h2>
                <div className={styles.main}>
              {this.displayPosts()}
              </div>
            </div>
        );
    }
}

export default Categories