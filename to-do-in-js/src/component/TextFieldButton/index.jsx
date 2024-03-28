import { forwardRef } from 'react'
import './TextFieldButton.scss'
import cn from 'classnames'

// eslint-disable-next-line react/prop-types, react/display-name
const TextFieldButton = forwardRef(({ children, className, ...rest }, ref) => {
   return (
      <button {...rest} ref={ref} className={cn(className)}>
         {children || "Submit"}
      </button>
   )
});

export default TextFieldButton;