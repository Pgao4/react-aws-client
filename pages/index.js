import dynamic from 'next/dynamic'
const Layout = dynamic(
  () => import('../components/Layout'),
  { ssr: false }
)

const Home = () => {
    return <Layout>Welcome to Next.js!</Layout>
  }
  
export default Home