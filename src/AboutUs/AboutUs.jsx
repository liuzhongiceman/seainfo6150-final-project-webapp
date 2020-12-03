import React from "react";
import styles from "./AboutUs.module.css";


class AboutUs extends React.Component {
  
  displayContent = () => {
    const data = this.props.pageData["aboutus"];
    if (data) {
      let listPosts = [];
      Object.keys(data).map((key) => {
        listPosts.push(data[key]);
      });
      const firstRow = (
          <div className={styles.aboutusrow1}>
              <div className={styles.row1text}>
                  <div className={styles.row1title}>{listPosts[0].title}</div>
                  <div className={styles.row1subtitle}>{listPosts[0].subtitle}</div>
              </div>
              <div className={styles.row1images}>
                  <img className={styles.row1image0} src={listPosts[1]["img1"]} alt="room"/>
                  <img className={styles.row1image} src={listPosts[1]["img2"]} alt="room"/>
                  <img className={styles.row1image0} src={listPosts[1]["img3"]} alt="room"/>
              </div>
          </div>
      );
      return (
        <div className={styles.aboutus}>
          {firstRow}
        </div>
      )
    }
  }
  
  render() {
    return (<div>{this.displayContent()}</div>);
  }
}

export default AboutUs
