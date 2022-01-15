import './notfound.css';

import { Link } from 'react-router-dom';
import React from 'react';

//bootstrap text center with margin top and bottom
const textCenter = {
  textAlign: 'center',
  marginTop: '20px',
};
function NotFoundPage() {
  return (
    <section className='page_404'>
      <div className='container'>
        <div className='row'>
          <div className='col-sm-12 '>
            <div className='col-sm-10 col-sm-offset-1  text-center'>
              <div className='four_zero_four_bg'>
                <h1 className={textCenter}>404</h1>
              </div>

              <div className='contant_box_404'>
                <h3 className='h2'>Look like you're lost</h3>

                <p>the page you are looking for not avaible!</p>

                <Link to='/'>Go to Home</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NotFoundPage;
