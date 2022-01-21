import { Layout, Skeleton } from 'antd';

import FooterComponent from '../components/FooterComponent';
import MainHeader from '../components/MainHeader';
import React from 'react';

const { Content } = Layout;
export default function ContactPage() {
  return (
    <Layout className='layout'>
      <MainHeader active={'6'} />
      <Content style={{ padding: '0 50px' }}>
        <div className='site-layout-content'>
          <Skeleton active paragraph={{ rows: 6 }} />
          <section id='contact'>
            <div className='contact-box'>
              <div className='contact-links'>
                <h2>CONTACT</h2>
                <div className='links'>
                  <div className='link'>
                    <a>
                      <img
                        src='https://i.postimg.cc/m2mg2Hjm/linkedin.png'
                        alt='linkedin'
                      />
                    </a>
                  </div>
                  <div className='link'>
                    <a>
                      <img
                        src='https://i.postimg.cc/YCV2QBJg/github.png'
                        alt='github'
                      />
                    </a>
                  </div>
                  <div className='link'>
                    <a>
                      <img
                        src='https://i.postimg.cc/W4Znvrry/codepen.png'
                        alt='codepen'
                      />
                    </a>
                  </div>
                  <div className='link'>
                    <a>
                      <img
                        src='https://i.postimg.cc/NjLfyjPB/email.png'
                        alt='email'
                      />
                    </a>
                  </div>
                </div>
              </div>
              <div className='contact-form-wrapper'>
                <form>
                  <div className='form-item'>
                    <input type='text' name='sender' required />
                    <label>Name:</label>
                  </div>
                  <div className='form-item'>
                    <input type='text' name='email' required />
                    <label>Email:</label>
                  </div>
                  <div className='form-item'>
                    <textarea class='' name='message' required></textarea>
                    <label>Message:</label>
                  </div>
                  <button className='submit-btn'>Send</button>
                </form>
              </div>
            </div>
          </section>
        </div>
      </Content>
      <FooterComponent />
    </Layout>
  );
}
