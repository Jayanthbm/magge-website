import { Layout, Skeleton } from 'antd';
import { collection, getDocs } from 'firebase/firestore';

import FooterComponent from '../components/FooterComponent';
import MainHeader from '../components/MainHeader';
import React from 'react';
import SlideShow from '../components/SlideShow';
import { getFirestore } from 'firebase/firestore';

const { Content } = Layout;
export default function HomePage() {
  //Connect to Firebase firestore
  const db = getFirestore();
  //Get the data from the firestore
  const [data, setData] = React.useState([]);
  const [imagesLoaded, setImagesLoaded] = React.useState(false);
  React.useEffect(() => {
    async function getData() {
      const querySnapshot = await getDocs(collection(db, 'slideshow'));
      querySnapshot.forEach((doc) => {
        let tmp = doc.data();
        setData(tmp.images);
      });
      setImagesLoaded(true);
    }
    getData();
  }, [db, imagesLoaded]);

  return (
    <Layout className='layout'>
      <MainHeader active={'1'} />
      <Content style={{ padding: '0 50px' }}>
        <Skeleton loading={!imagesLoaded} active>
          {data && data.length > 0 && <SlideShow images={data} />}
        </Skeleton>

        <div className='site-layout-content'>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum
            deleniti quaerat non quo aperiam maiores sunt tempore, natus
            quibusdam iure ad distinctio dolorum consectetur in! Enim ipsa quam
            soluta veritatis!
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum
            deleniti quaerat non quo aperiam maiores sunt tempore, natus
            quibusdam iure ad distinctio dolorum consectetur in! Enim ipsa quam
            soluta veritatis!
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum
            deleniti quaerat non quo aperiam maiores sunt tempore, natus
            quibusdam iure ad distinctio dolorum consectetur in! Enim ipsa quam
            soluta veritatis!
          </p>

          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum
            deleniti quaerat non quo aperiam maiores sunt tempore, natus
            quibusdam iure ad distinctio dolorum consectetur in! Enim ipsa quam
            soluta veritatis!
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum
            deleniti quaerat non quo aperiam maiores sunt tempore, natus
            quibusdam iure ad distinctio dolorum consectetur in! Enim ipsa quam
            soluta veritatis!
          </p>

          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum
            deleniti quaerat non quo aperiam maiores sunt tempore, natus
            quibusdam iure ad distinctio dolorum consectetur in! Enim ipsa quam
            soluta veritatis!
          </p>
        </div>
      </Content>
      <FooterComponent />
    </Layout>
  );
}
