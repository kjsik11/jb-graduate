import React from 'react';
import cn from 'classnames';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  size?: 'sm' | 'md' | 'base' | 'lg' | 'xl';
  Component?: string | React.JSXElementConstructor<any>;
}
const Button = React.forwardRef<any, Props>(
  (
    { className, size = 'base', children, Component = 'button', ...props },
    buttonRef,
  ) => {
    switch (size) {
      case 'sm':
        return (
          <Component
            ref={buttonRef as never}
            type="button"
            className={cn(
              className,
              'inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500',
            )}
            {...props}
          >
            {children}
          </Component>
        );
      case 'md':
        return (
          <Component
            ref={buttonRef as never}
            type="button"
            className={cn(
              className,
              'inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500',
            )}
            {...props}
          >
            {children}
          </Component>
        );
      case 'base':
        return (
          <Component
            ref={buttonRef as never}
            type="button"
            className={cn(
              className,
              'inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500',
            )}
            {...props}
          >
            {children}
          </Component>
        );
      case 'lg':
        return (
          <Component
            ref={buttonRef as never}
            type="button"
            className={cn(
              className,
              'inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500',
            )}
            {...props}
          >
            {children}
          </Component>
        );
      default:
        return (
          <Component
            ref={buttonRef as never}
            type="button"
            className={cn(
              className,
              'inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500',
            )}
            {...props}
          >
            {children}
          </Component>
        );
    }
  },
);

export default Button;
