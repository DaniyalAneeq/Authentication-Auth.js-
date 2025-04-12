

import React from 'react'
import { CardWrapper } from '@/components/auth/card-wrapper';
import { FaExclamationTriangle } from 'react-icons/fa';

const ErrorCard = () => {
  return (
   <CardWrapper
   headerLabel='Oops! Something went wrong!'
   backButtonhref='/auth/login'
   backButtonLabel='Back to login'
   >
    <div className='w-full flex justify-center items-center'>
        <FaExclamationTriangle className='text-destructive'/>
    </div>
   </CardWrapper>
  );
};

export default ErrorCard