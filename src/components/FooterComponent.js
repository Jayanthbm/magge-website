import { Layout } from 'antd';
import React from 'react';
const { Footer } = Layout;
function FooterComponent() {
  return (
    <>
      <Footer style={{ textAlign: 'center' }}>
        ©{new Date().getFullYear()} Created by Magge
      </Footer>
    </>
  );
}

export default FooterComponent;
