import FooterComponent from '../components/FooterComponent';
import { Layout } from 'antd';
import React from 'react';

const { Content } = Layout;
function NotFoundPage() {
  return (
    <Layout className='layout'>
      <Content style={{ padding: '0 50px' }}>
        <div className='site-layout-content'></div>
        <FooterComponent />
      </Content>
    </Layout>
  );
}

export default NotFoundPage;
