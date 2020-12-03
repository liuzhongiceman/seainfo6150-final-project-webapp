import React from "react";
import styles from "./TrustSafety.module.css";


class TrustSafety extends React.Component {
  
  displayContent = () => {
    const data = this.props.pageData["safetytrust"];
    if (data) {
      let listPosts = [];
      Object.keys(data).map((key) => {
        listPosts.push(data[key]);
      });
      const listItems = listPosts.map((post, index) => 
        <div key={index}>
          <h2>{post.category}</h2>
          <p>{post.text}</p>
        </div>
      );
      return (
        <div className={styles.safetytrust}>
          {listItems}
        </div>
      )
    }
  }
  
  render() {
    return (<div>{this.displayContent()}</div>);
  }
}

export default TrustSafety