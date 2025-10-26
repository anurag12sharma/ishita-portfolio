import React from 'react';
import { cva } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';

const buttonClasses = cva(
  'inline-flex items-center justify-center font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105 hover:shadow-hover active:scale-95',
  {
    variants: {
      variant: {
        primary: 'hover:brightness-110 focus:ring-blue-500',
        secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-gray-500',
        outline: 'border-2 bg-transparent hover:bg-opacity-10 focus:ring-blue-500',
      },
      size: {
        small: 'text-sm px-3 py-1.5',
        medium: 'text-base px-4 py-2',
        large: 'text-lg px-6 py-3',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'medium',
    },
  }
);

const Button = ({
  // Required parameters with defaults
  text = "Read More",
  text_font_size = "text-xs",
  text_font_family = "Poppins",
  text_font_weight = "font-medium",
  text_line_height = "leading-xs",
  text_text_align = "left",
  text_color = "text-text-bright",
  fill_background_color = "bg-accent-green",
  border_border = "3px solid #ffffff",
  border_border_radius = "rounded-2xl",
  
  // Optional parameters (no defaults)
  layout_width,
  padding,
  margin,
  position,
  
  // Standard React props
  variant,
  size,
  disabled = false,
  className,
  children,
  onClick,
  type = "button",
  ...props
}) => {
  // Safe validation for optional parameters
  const hasValidWidth = layout_width && typeof layout_width === 'string' && layout_width?.trim() !== '';
  const hasValidPadding = padding && typeof padding === 'string' && padding?.trim() !== '';
  const hasValidMargin = margin && typeof margin === 'string' && margin?.trim() !== '';
  const hasValidPosition = position && typeof position === 'string' && position?.trim() !== '';

  // Build optional Tailwind classes
  const optionalClasses = [
    hasValidWidth ? `w-[${layout_width}]` : '',
    hasValidPadding ? `p-[${padding}]` : '',
    hasValidMargin ? `m-[${margin}]` : '',
    hasValidPosition ? position : '',
  ]?.filter(Boolean)?.join(' ');

  // Build required styles
  const requiredClasses = [
    text_font_size,
    `font-[${text_font_family}]`,
    text_font_weight,
    text_line_height,
    `text-${text_text_align}`,
    text_color,
    fill_background_color,
    border_border_radius,
    'border-[3px] border-solid border-white'
  ]?.filter(Boolean)?.join(' ');

  // Safe click handler
  const handleClick = (event) => {
    if (disabled) return;
    if (typeof onClick === 'function') {
      onClick(event);
    }
  };

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={handleClick}
      className={twMerge(
        buttonClasses({ variant, size }),
        requiredClasses,
        optionalClasses,
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