import { Layout, Skeleton, Button } from 'antd';

import FooterComponent from '../components/FooterComponent';
import MainHeader from '../components/MainHeader';
import React from 'react';

const { Content } = Layout;
export default function AboutPage() {
  return (
    <Layout className='layout'>
      <MainHeader active={'2'} />
      <Content style={{ padding: '0 50px' }}>
        <div className='site-layout-content'>
          <Button type='primary'>About Us</Button>
          <Skeleton active paragraph={{ rows: 30 }} />
        </div>
      </Content>
      <FooterComponent />
    </Layout>
  );
}
