import React from 'react';
import { cva } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';

const buttonClasses = cva(
  'inline-flex items-center justify-center font-medium transition-all duration-300 ease-out focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed',
  {
    variants: {
      variant: {
        primary: 'bg-primary-background !text-white hover:bg-primary-dark hover:shadow-lg hover:scale-105 active:scale-95 focus:ring-primary-light',
        secondary: 'bg-white border-2 border-gray-300 !text-gray-900 hover:border-gray-400 hover:shadow-lg hover:scale-105 active:scale-95 focus:ring-gray-500',
        outline: 'border-2 border-current bg-transparent hover:bg-opacity-10 hover:shadow-md hover:scale-105 active:scale-95 focus:ring-primary-light',
      },
      size: {
        small: 'text-sm px-4 py-2 rounded-full',
        medium: 'text-base px-6 py-2.5 rounded-full',
        large: 'text-lg px-8 py-3 rounded-full',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'medium',
    },
  }
);

const Button = ({
  text,
  text_color,
  fill_background_color,
  padding,
  variant,
  size,
  disabled = false,
  className,
  children,
  onClick,
  type = "button",
  ...props
}) => {
  const handleClick = (event) => {
    if (disabled) return;
    if (typeof onClick === 'function') {
      onClick(event);
    }
  };

  // Custom styles from props
  const customStyles = [
    text_color,
    fill_background_color,
    padding,
  ].filter(Boolean).join(' ');

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={handleClick}
      className={twMerge(
        buttonClasses({ variant, size }),
        customStyles,
        className
      )}
      aria-disabled={disabled}
      {...props}
    >
      {children || text}
    </button>
  );
};

export default Button;