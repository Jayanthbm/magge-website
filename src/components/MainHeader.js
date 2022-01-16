import { Col, Layout, Menu, Row } from 'antd';

import { Link } from 'react-router-dom';
import { MenuOutlined } from '@ant-design/icons';

const { Header } = Layout;
function MainHeader(props) {
  const logoText = {
    color: 'white',
    fontWeight: 'bold',
    fontSize: '20px',
    textDecoration: 'none',
  };
  return (
    <Header className='header-fixed'>
      <Row>
        <Col xl={12} lg={12} md={12} sm={20} xs={20}>
          <div className='logo' style={logoText}>
            Magge
          </div>
        </Col>
        <Col xl={12} lg={12} md={12} sm={4} xs={4}>
          <Menu
            theme='dark'
            mode='horizontal'
            defaultSelectedKeys={[`${props.active}`]}
            breakpoint='lg'
            collapsedWidth='0'
            overflowedIndicator={<MenuOutlined />}
          >
            <Menu.Item key='1'>
              {' '}
              <Link to='/'>Home</Link>
            </Menu.Item>
            <Menu.Item key='2'>
              <Link to='/about'>About</Link>
            </Menu.Item>
            <Menu.Item key='3'>
              <Link to='/gallery'>Gallery</Link>
            </Menu.Item>
            <Menu.Item key='4'>
              <Link to='/events'>Events</Link>
            </Menu.Item>
            <Menu.Item key='5'>
              <Link to='/how-to-reach'> How to Reach</Link>
            </Menu.Item>
            <Menu.Item key='6'>
              <Link to='/contact'>Contact</Link>
            </Menu.Item>
          </Menu>
        </Col>
      </Row>
    </Header>
  );
}
export default MainHeader;
