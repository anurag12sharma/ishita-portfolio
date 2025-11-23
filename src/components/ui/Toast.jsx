import React, { useEffect, useRef, useState } from 'react';

const Toast = ({ show, message, duration = 2500, onClose }) => {
  const [visible, setVisible] = useState(false);
  const [mounted, setMounted] = useState(false);
  const hideTimer = useRef(null);
  const endTimer = useRef(null);

  useEffect(() => {
    if (show) {
      // Trigger mount animation
      setMounted(true);
      // Small delay before showing to allow mount animation
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setVisible(true);
        });
      });

      // Schedule start of exit animation slightly before end
      hideTimer.current = setTimeout(() => setVisible(false), Math.max(0, duration - 400));
      // Schedule onClose after full duration
      endTimer.current = setTimeout(() => {
        setMounted(false);
        onClose?.();
      }, duration);
    } else {
      // If show is turned off externally, trigger exit immediately
      setVisible(false);
      setTimeout(() => setMounted(false), 400);
      if (hideTimer.current) clearTimeout(hideTimer.current);
      if (endTimer.current) clearTimeout(endTimer.current);
    }

    return () => {
      if (hideTimer.current) clearTimeout(hideTimer.current);
      if (endTimer.current) clearTimeout(endTimer.current);
    };
  }, [show, duration, onClose]);

  // Keep rendered while animating out
  if (!show && !mounted) return null;

  return (
    <div
      aria-live="polite"
      className="fixed left-1/2 bottom-24 z-[9999] pointer-events-none"
      style={{
        transform: 'translateX(-50%)',
      }}
    >
      <div
        className="pointer-events-auto max-w-[440px] w-auto mx-4 flex items-center gap-3.5 px-5 py-3.5 rounded-2xl"
        style={{
          background: 'linear-gradient(135deg, #814eff 0%, #673fcc 50%, #8b5cf6 100%)',
          boxShadow: visible
            ? '0 20px 40px rgba(129, 78, 255, 0.4), 0 8px 16px rgba(103, 63, 204, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.15)'
            : '0 10px 20px rgba(129, 78, 255, 0.2), 0 4px 8px rgba(103, 63, 204, 0.15)',
          transform: visible
            ? 'translateY(0) scale(1)'
            : 'translateY(16px) scale(0.95)',
          opacity: visible ? 1 : 0,
          transition: 'all 400ms cubic-bezier(0.34, 1.56, 0.64, 1)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
        }}
      >
        {/* Animated gradient accent */}
        <div
          className="flex-shrink-0 relative overflow-hidden"
          style={{
            width: '4px',
            height: '36px',
            borderRadius: '12px',
            background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0.7) 50%, rgba(255, 255, 255, 0.6) 100%)',
            boxShadow: '0 0 12px rgba(255, 255, 255, 0.4)',
          }}
        >
          {/* Shimmer effect */}
          <div
            style={{
              position: 'absolute',
              top: '-100%',
              left: 0,
              right: 0,
              height: '100%',
              background: 'linear-gradient(180deg, transparent 0%, rgba(255, 255, 255, 0.6) 50%, transparent 100%)',
              animation: visible ? 'shimmer 1.5s ease-in-out infinite' : 'none',
            }}
          />
        </div>

        {/* Success icon with animation */}
        <div
          className="flex-shrink-0 relative"
          style={{
            transform: visible ? 'scale(1) rotate(0deg)' : 'scale(0) rotate(-180deg)',
            transition: 'all 450ms cubic-bezier(0.34, 1.56, 0.64, 1)',
            transitionDelay: visible ? '100ms' : '0ms',
          }}
        >
          <div
            style={{
              width: '20px',
              height: '20px',
              borderRadius: '50%',
              background: 'rgba(255, 255, 255, 0.25)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 2px 8px rgba(255, 255, 255, 0.2)',
              border: '1.5px solid rgba(255, 255, 255, 0.4)',
            }}
          >
            <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 12l5 5L20 7"
                stroke="white"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{
                  strokeDasharray: '24',
                  strokeDashoffset: visible ? '0' : '24',
                  transition: 'stroke-dashoffset 600ms cubic-bezier(0.34, 1.56, 0.64, 1)',
                  transitionDelay: visible ? '200ms' : '0ms',
                }}
              />
            </svg>
          </div>
        </div>

        {/* Message text */}
        <div
          className="text-sm font-poppins font-medium pr-1"
          style={{
            color: 'white',
            transform: visible ? 'translateX(0)' : 'translateX(-8px)',
            opacity: visible ? 1 : 0,
            transition: 'all 400ms cubic-bezier(0.34, 1.56, 0.64, 1)',
            transitionDelay: visible ? '150ms' : '0ms',
          }}
        >
          {message}
        </div>
      </div>

      {/* Keyframe animation for shimmer */}
      <style jsx>{`
        @keyframes shimmer {
          0% {
            top: -100%;
          }
          50% {
            top: 200%;
          }
          100% {
            top: 200%;
          }
        }
      `}</style>
    </div>
  );
};

export default Toast;
