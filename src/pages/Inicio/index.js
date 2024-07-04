import PostCard from 'components/PostCard'
import styles from './inicio.module.css'

import posts from 'json/posts.json'

const Inicio = () => {
    return (
        <main> 
            <ul className={styles.posts}>
                {posts.map((post) => {
                    return (
                        <li key={post.id}>
                            <PostCard post={post}/>
                        </li>
                    )
                })}
            </ul>

        </main>
    )
}

export default Inicio;