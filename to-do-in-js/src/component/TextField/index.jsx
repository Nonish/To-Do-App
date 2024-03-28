import { forwardRef } from "react"
import cn from 'classnames'
import './TextField.scss'


// eslint-disable-next-line react/display-name, react/prop-types
const TextField = forwardRef(({ className, ...rest }, ref) => {
   return (
      <input
         {...rest}
         ref={ref}
         className={cn('text-field', className)}
      />
   )
})

export default TextField;