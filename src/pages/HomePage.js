import { Layout } from 'antd';
import MainHeader from '../components/MainHeader';
import React from 'react';
export default function HomePage() {
  return (
    <Layout className='layout'>
      <MainHeader active={'1'} />
    </Layout>
  );
}
