'use client';

import React, { memo } from 'react';

interface AuroraTextProps {
  children: React.ReactNode;
  className?: string;
  colors?: string[];
  speed?: number;
}

export const AuroraText = memo(
  ({
    children,
    className = '',
    colors = ['#FF0080', '#7928CA', '#0070F3', '#38bdf8'],
    speed = 1,
  }: AuroraTextProps) => {
    const gradientStyle = {
      backgroundImage: `linear-gradient(135deg, ${colors.join(', ')}, ${colors[0]})`,
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      animationDuration: `${10 / speed}s`,
    };

    return (
      <span
        className={`
          relative inline-block
          ${className}
        `}
        data-testid='auroraText'
      >
        <span className='sr-only'>{children}</span>
        <span
          className={`
            relative animate-aurora bg-clip-text text-transparent
            bg-[length:200%_auto]
          `}
          style={gradientStyle}
          aria-hidden='true'
        >
          {children}
        </span>
      </span>
    );
  }
);

AuroraText.displayName = 'AuroraText';
