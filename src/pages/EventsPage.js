import { Layout, Skeleton } from 'antd';

import FooterComponent from '../components/FooterComponent';
import MainHeader from '../components/MainHeader';
import React from 'react';

const { Content } = Layout;
export default function EventsPage() {
  return (
    <Layout className='layout'>
      <MainHeader active={'4'} />
      <Content style={{ padding: '0 50px' }}>
        <div className='site-layout-content'>
          <Skeleton active paragraph={{ rows: 10 }} />
          <Skeleton active paragraph={{ rows: 10 }} />
        </div>
      </Content>
      <FooterComponent />
    </Layout>
  );
}
