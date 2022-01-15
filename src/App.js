import { Layout } from 'antd';
import MainHeader from './components/MainHeader';
const { Content } = Layout;

function App() {
  return (
    <>
      <Layout className='layout'>
        <MainHeader />
        <Content style={{ padding: '0 50px' }}></Content>
      </Layout>
    </>
  );
}

export default App;
