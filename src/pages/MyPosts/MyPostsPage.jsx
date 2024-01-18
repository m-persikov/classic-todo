import styles from './MyPostsPage.module.css';
import { PostsList } from '../../components/Posts/PostsList';

export default function MyPostsPage() {
    return (
        <div className={styles.MyPosts}>
            Ava + description
            <textarea name="" id="" cols="20" rows="5">

            </textarea>
            <button>add</button>
            <button>remove</button>
            <PostsList />
        </div>
    )
}