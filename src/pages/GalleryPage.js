import { Layout, Skeleton } from 'antd';

import FooterComponent from '../components/FooterComponent';
import MainHeader from '../components/MainHeader';
import React from 'react';

const { Content } = Layout;
export default function GalleryPage() {
  return (
    <Layout className='layout'>
      <MainHeader active={'3'} />
      <Content style={{ padding: '0 50px' }}>
        <div className='site-layout-content'>
          <Skeleton active paragraph={{ rows: 15 }} />
        </div>
      </Content>
      <FooterComponent />
    </Layout>
  );
}
