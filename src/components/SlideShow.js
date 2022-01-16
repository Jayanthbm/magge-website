import { Carousel } from 'antd';
import React from 'react';

function SlideShow(props) {
  return (
    <div className='site-layout-content'>
      <Carousel autoplay>
        {props.images.map((image, index) => (
          <div key={index}>
            <div
              style={{
                backgroundColor: '#CCCCCC',
                maxHeight: 400,
              }}
            >
              <img
                src={image}
                alt={index}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  top: '50%',
                  left: '50%',
                }}
              />
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default SlideShow;
