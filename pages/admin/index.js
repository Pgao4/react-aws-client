import dynamic from 'next/dynamic'
import withAdmin from '../withAdmin'

const Layout = dynamic(
  () => import('../../components/Layout'),
  { ssr: false }
)

const Admin = ({user, token}) => {
    return <Layout>{JSON.stringify(user)}</Layout>
  }
  
export default withAdmin(Admin)