import styles from './PostItem.module.css';

export const PostItem = ({ post }) => {
    return (
        <div className={styles.PostItem}>
            <img
                className={styles.img}
                width={50}
                src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.etsystatic.com%2F15728396%2Fr%2Fil%2Fc637b5%2F1681256902%2Fil_794xN.1681256902_b9dy.jpg&f=1&nofb=1&ipt=fd873f67144ddb3c0ac29fdf13f4212d3839e5017e09c81214febf9a68b2b719&ipo=images" />
            <div>{post.name}</div>
            <div>{post.description}</div>
            <div>like</div>
            <div>dislike</div>
        </div>
    )
}