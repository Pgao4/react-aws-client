import dynamic from 'next/dynamic'
import withUser from '../withUser'

const Layout = dynamic(
  () => import('../../components/Layout'),
  { ssr: false }
)

const User = ({ user, token }) => {
  return <Layout>{JSON.stringify(user)}
  
  </Layout>
}



export default withUser(User)