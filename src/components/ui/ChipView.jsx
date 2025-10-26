import React from 'react';
import { cva } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';

const chipViewClasses = cva(
  'inline-flex items-center justify-center transition-all duration-200',
  {
    variants: {
      variant: {
        default: 'bg-gray-100 text-gray-800 hover:bg-gray-200',
        primary: 'bg-blue-100 text-blue-800 hover:bg-blue-200',
        secondary: 'bg-gray-200 text-gray-700 hover:bg-gray-300',
      },
      size: {
        small: 'px-2 py-1 text-xs',
        medium: 'px-3 py-1.5 text-sm',
        large: 'px-4 py-2 text-base',
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