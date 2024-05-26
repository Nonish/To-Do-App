import { InputHTMLAttributes, forwardRef } from 'react';
import cn from 'classnames';
import './TextField.scss';

/* eslint-disable no-undef */
const TextField = forwardRef<
   HTMLInputElement,
   InputHTMLAttributes<HTMLInputElement>
>(
   ({ className, ...rest }, ref) => {
      return (
         <input
            {...rest}
            ref={ref}
            className={cn('text-field', className)}
         />
      );
   });

export default TextField;
