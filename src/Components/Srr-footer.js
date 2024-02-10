import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBBtn
} from 'mdb-react-ui-kit';

export default function SrrFooter() {
  return (
    <MDBFooter className=' text-center text-white'>
      <div className='text-center p-3 ' style={{ backgroundColor: 'rgba(0, 0, 0, 1)' }}>
        © 2024 Copyright:  Sri Raja Rajeshwara Jewelery
        <MDBContainer className='p-2 pb-0'>
        <section className='mb-2'>
          <MDBBtn
            floating
            className='m-1'
            style={{ backgroundColor: '#3b5998' }}
            href='#!'
            role='button'
          >
            <MDBIcon fab icon='whatsapp' />
          </MDBBtn>

          <MDBBtn
            floating
            className='m-1'
            style={{ backgroundColor: '#55acee' }}
            href='#!'
            role='button'
          >
            <MDBIcon fab icon='facebook' />
          </MDBBtn>
        </section>
      </MDBContainer>
      </div>
    </MDBFooter>
  );
}