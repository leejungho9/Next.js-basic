import { useRouter } from "next/router"
import BlogMainPost from "../../components/BlogMainPost";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import BolgPostDetail from "../../components/BolgPostDetail";
import SanityService from "../../service/SanityService";
import styles from '../../styles/Home.module.css';

export default function PostAll({slug, post}) {
console.log(post)
    return ( 
        <div className= { styles.container}>
        <Header/>
        <BlogMainPost {...post}/>
        <BolgPostDetail blocks={post.content}/>
        <Footer/>
      </div>
    )
}


export async function getStaticPaths() {
    const posts = await new SanityService().getPost();
  
      const paths = posts.map(post => ({
          params : {
              slug : post.slug
          }
      }))
    
    return {
        paths,
        fallback : false 
    }
}

export async function getStaticProps ({params}) {
    
    const {slug} = params ;
    
      const posts = await new SanityService().getPost();
          const post = posts.find(p => p.slug == slug );
    return {
        props : {
            slug,
            post
        },
        
    } 
}