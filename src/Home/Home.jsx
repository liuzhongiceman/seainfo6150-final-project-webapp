import React from "react";
import styles from "./Home.module.css";

class Home extends React.Component {
    
    displayPosts = () => {
        const listItems = this.props.posts.map((post, index) => 
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
        return (listItems)
    }
    
    getCategoryImage = (category) => {
        console.log('category', category);
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
            <div className={styles.main}>
                <div className={styles.row1}>
                    <div className={styles.row1Content}>
                        <div>
                            <h1>Unique stays</h1>
                            <h3>Tents, treehouses, and more—these spaces are more than just a place to sleep.</h3>
                        </div>
                    </div>
                </div>
                <div className={styles.row2}>
                    <h2 className={styles.anywhere}>Live anywhere</h2>
                    <div className={styles.row2Container}>
                        {this.displayCategories()}
                    </div>
                </div>
                <div className={styles.row3}>
                    {this.displayPosts()}
                </div>
            </div>
        );
    }
}

export default Home
