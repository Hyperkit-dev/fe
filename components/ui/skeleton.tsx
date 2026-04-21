import React from 'react';

interface SkeletonProps {
  className?: string;
  width?: string | number;
  height?: string | number;
  rounded?: boolean;
  animate?: boolean;
}

export function Skeleton({ 
  className = '', 
  width, 
  height, 
  rounded = true, 
  animate = true 
}: SkeletonProps) {
  const baseClasses = 'bg-gray-700';
  const roundedClass = rounded ? 'rounded-lg' : '';
  const animateClass = animate ? 'animate-pulse' : '';
  
  const style = {
    ...(width && { width: typeof width === 'number' ? `${width}px` : width }),
    ...(height && { height: typeof height === 'number' ? `${height}px` : height }),
  };

  return (
    <div 
      className={`${baseClasses} ${roundedClass} ${animateClass} ${className}`}
      style={style}
    />
  );
}

// Card Skeleton Component
export function CardSkeleton({ className = '', minHeight }: { className?: string; minHeight?: number }) {
  return (
    <div
      className={`bg-[var(--color-bg-base)] border border-white/5 rounded-3xl p-8 flex flex-col ${className}`}
      style={minHeight ? { minHeight } : undefined}
    >
      <Skeleton height={40} width={40} className="mb-4 rounded-lg bg-white/10" />
      <Skeleton height={24} width="75%" className="mb-2 bg-white/10" />
      <Skeleton height={14} width="100%" className="mb-1 bg-white/5" />
      <Skeleton height={14} width="90%" className="mb-6 bg-white/5" />
      <Skeleton height={14} width={80} className="mb-8 bg-white/5" />
      <div className="mt-auto h-48 rounded-lg bg-white/5" />
    </div>
  );
}

// Image Skeleton Component
export function ImageSkeleton({ 
  width = 300, 
  height = 200, 
  className = '' 
}: { 
  width?: number; 
  height?: number; 
  className?: string; 
}) {
  return (
    <Skeleton 
      width={width} 
      height={height} 
      className={`w-full ${className}`}
    />
  );
}

// Navigation Skeleton
export function NavSkeleton() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black w-full">
      <div className="container max-w-7xl mx-auto flex items-center justify-between py-3">
        <Skeleton height={48} width={120} />
        <div className="hidden lg:flex items-center gap-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <Skeleton key={i} height={20} width={80} />
          ))}
        </div>
        <Skeleton height={40} width={100} />
      </div>
    </nav>
  );
}

// Footer Skeleton
export function FooterSkeleton() {
  return (
    <footer className="bg-black text-white py-8 sm:py-12 lg:py-16 w-full">
      <div className="container max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <Skeleton height={80} width={200} />
          <div className="space-y-3">
            <Skeleton height={24} width={120} />
            {Array.from({ length: 6 }).map((_, i) => (
              <Skeleton key={i} height={16} width={100} />
            ))}
          </div>
          <div className="space-y-3">
            <Skeleton height={24} width={100} />
            {Array.from({ length: 4 }).map((_, i) => (
              <Skeleton key={i} height={16} width={120} />
            ))}
          </div>
          <div className="space-y-3">
            <Skeleton height={24} width={100} />
            {Array.from({ length: 7 }).map((_, i) => (
              <Skeleton key={i} height={16} width={140} />
            ))}
          </div>
        </div>
        <div className="flex justify-between items-center pt-6 border-t border-gray-800">
          <Skeleton height={16} width={200} />
          <div className="flex gap-4">
            {Array.from({ length: 4 }).map((_, i) => (
              <Skeleton key={i} height={24} width={24} rounded />
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
