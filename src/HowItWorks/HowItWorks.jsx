import React, { useState, useEffect } from "react";
import styles from "./HowItWorks.module.css";


class HowItWorks extends React.Component {
  
  displayContent = () => {
    const data = this.props.pageData["howitworks"];
    if (data) {
      return (
        <div className={styles.howitworks}>
          <div className={styles.row1}>
            <div className={styles.textArea}>
              <div className={styles.howitworksh1}>{data.row1.title}</div>
              <div className={styles.row1Subtitle}>{data.row1.subTitle}</div>
            </div>
          </div>
          <div className={styles.howitworksrow2}>
            <div className={styles.howitworksh2}>{data.row2.title}</div>
          </div>
          <div className={styles.howitworksrow3}>
            <div className={styles.column}>
              <img className={styles.howitworksrow3img} src={data.row3.url} alt="steps"/>
              <h3>{data.row3.title}</h3>
              <p>{data.row3.subTitle}</p>
            </div>
            <div className={styles.column}>
              <img className={styles.howitworksrow3img} src={data.row4.url} alt="steps"/>
              <h3>{data.row4.title}</h3>
              <p>{data.row4.subTitle}</p>
            </div>
            <div className={styles.column}>
              <img className={styles.howitworksrow3img} src={data.row5.url} alt="steps"/>
              <h3>{data.row5.title}</h3>
              <p>{data.row5.subTitle}</p>
            </div>
            <div className={styles.column}>
              <img className={styles.howitworksrow3img} src={data.row6.url} alt="steps"/>
              <h3>{data.row6.title}</h3>
              <p>{data.row6.subTitle}</p>
            </div>
          </div>
        </div>
      )
    }
  }
  
  render() {
    return (<div>{this.displayContent()}</div>);
  }
}

export default HowItWorks