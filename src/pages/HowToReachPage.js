import { Layout, Skeleton } from 'antd';

import FooterComponent from '../components/FooterComponent';
import MainHeader from '../components/MainHeader';
import React from 'react';

const { Content } = Layout;

export default function HowToReachPage() {
  return (
    <Layout className='layout'>
      <MainHeader active={'5'} />
      <Content style={{ padding: '0 50px' }}>
        <div className='site-layout-content'>
          <Skeleton active paragraph={{ rows: 5 }} />
          <div
            style={{
              position: 'relative',
              textAlign: 'right',
              height: '500px',
              width: '100%',
            }}
          >
            <div
              style={{
                overflow: 'hidden',
                background: 'none!important',
                height: '500px',
                width: '100%',
              }}
            >
              <iframe
                title='map'
                width='100%'
                height='500'
                id='gmap_canvas'
                src={
                  'https://maps.google.com/maps?q=Venugopala%20Swamy%20Temple,%20Doddamagge&t=&z=17&ie=UTF8&iwloc=&output=embed'
                }
                frameborder='0'
                scrolling='no'
                marginheight='0'
                marginwidth='0'
              ></iframe>
            </div>
          </div>
        </div>
      </Content>
      <FooterComponent />
    </Layout>
  );
}
