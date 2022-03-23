
import styles from '../styles/Home.module.css'
import SanityService from '../service/SanityService';
import Header from '../components/Header'
import BlogHeadline from '../components/BlogHeadline'
import BlogMainPost from '../components/BlogMainPost'
import BlogList from '../components/BlogList'
import Footer from '../components/Footer'


export default function Home({home, posts}) {
  const mainPost = posts.find(p => p.slug == home.mainPostUrl)
  const otherPosts = posts.filter(p=> p.slug !== home.mainPostUrl)

  console.log(mainPost);
  console.log(otherPosts);

  return (
    <div className= { styles.container}>
      <Header/>
      <BlogHeadline/>
      <BlogMainPost {...mainPost}/>
      <BlogList posts={otherPosts}/>
      <Footer/>
    </div>
  )
}

export async function getStaticProps() {
  const home = await new SanityService().getHome();
  const posts = await new SanityService().getPost();

  return {
    props : {
      home,
      posts,
    }
  }
}
