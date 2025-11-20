import React from 'react';
import { cva } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';

const chipViewClasses = cva(
  'inline-flex items-center justify-center transition-all duration-300 ease-out',
  {
    variants: {
      variant: {
        default: 'bg-transparent border border-gray-300 text-gray-700 hover:border-primary-background hover:text-primary-background hover:shadow-sm hover:-translate-y-0.5',
        primary: 'bg-primary-background text-white hover:bg-primary-dark hover:shadow-md hover:-translate-y-0.5',
        secondary: 'bg-white border border-gray-300 text-gray-800 hover:border-gray-400 hover:shadow-sm hover:-translate-y-0.5',
      },
      size: {
        small: 'px-3 py-1.5 text-xs rounded-full',
        medium: 'px-4 py-2 text-sm rounded-full',
        large: 'px-5 py-2.5 text-base rounded-full',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'medium',
    },
  }
);

const ChipView = ({
  // Optional parameters (no defaults)
  layout_width,
  position,
  
  // Standard React props
  variant,
  size,
  className,
  children,
  onClick,
  ...props
}) => {
  // Safe validation for optional parameters
  const hasValidWidth = layout_width && typeof layout_width === 'string' && layout_width?.trim() !== '';
  const hasValidPosition = position && typeof position === 'string' && position?.trim() !== '';

  // Build optional Tailwind classes
  const optionalClasses = [
    hasValidWidth ? `w-[${layout_width}]` : '',
    hasValidPosition ? position : '',
  ]?.filter(Boolean)?.join(' ');

  // Safe click handler
  const handleClick = (event) => {
    if (typeof onClick === 'function') {
      onClick(event);
    }
  };

  return (
    <div
      onClick={handleClick}
      className={twMerge(
        chipViewClasses({ variant, size }),
        optionalClasses,
        className
      )}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
      {...props}
    >
      {children}
    </div>
  );
};

export default ChipView;