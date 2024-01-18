import { posts } from '../../../api/posts';

import { PostItem } from '../PostItem';

export const PostsList = () => {
    return (
        <>
            {posts.map(post => <PostItem key={post.id} post={post} />)}
        </>
    )
}