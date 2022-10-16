import dynamic from 'next/dynamic'
const Layout = dynamic(
  () => import('../../components/Layout'),
  { ssr: false }
)

const Admin = () => {
    return <Layout>Hello Admin</Layout>
  }
  
export default Admin