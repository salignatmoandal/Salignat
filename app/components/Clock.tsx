'use client';

import { useState, useEffect } from 'react';

export interface ClockProps {
  className?: string;
}
export default function Clock({ }: ClockProps) {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval); // clean-up
  }, []);

  const hours = String(time.getHours()).padStart(2, '0');
  const minutes = String(time.getMinutes()).padStart(2, '0');
  const seconds = String(time.getSeconds()).padStart(2, '0');

  return (
    <div className="flex flex-col items-center text-center select-none">
      <div className="text-[1.25rem] font-[var(--font-geist-mono)] text-[#0B23FF] tracking-wider">
        {hours}:{minutes}:{seconds}
      </div>
      <div className="text-xs text-[#0B23FF] font-serif uppercase tracking-widest mt-1">
        Paris, France
      </div>

      
    </div>
  );
}
