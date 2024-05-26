import { forwardRef, ReactNode, JSX } from 'react'
import './TextFieldButton.scss'
import cn from 'classnames'

type Props = {
   children?: ReactNode;
   // type: 'submit' | 'button';
   className: {};
   onClick: () => void;
}

// eslint-disable-next-line no-undef
export type Ref = HTMLButtonElement;

const TextFieldButton = forwardRef<Ref, Props>(({ children, className, ...rest }, ref): JSX.Element => {
   return (
      <button
         {...rest}
         ref={ref}
         className={cn(className)}
      >
         {children}
      </button>
   )
});

export default TextFieldButton;