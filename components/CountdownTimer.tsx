import React, { useEffect, useState } from 'react';

const calculateTimeLeft = () => {
  const targetDate = new Date('2025-12-15T00:00:00Z').getTime();
  const now = new Date().getTime();
  const difference = targetDate - now;

  let timeLeft = {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  };

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  return timeLeft;
};

const TimeBlock: React.FC<{ value: number; label: string }> = ({ value, label }) => (
  <div className="flex flex-col items-center">
    <span className="text-4xl md:text-5xl font-bold text-lime-400 tracking-wider">
      {String(value).padStart(2, '0')}
    </span>
    <span className="text-xs text-neutral-400 uppercase tracking-widest">{label}</span>
  </div>
);

export const CountdownTimer: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  return (
    <div className="my-10">
      <h3 className="text-lg font-semibold text-white uppercase tracking-widest mb-4">Lançamento em:</h3>
      <div className="grid grid-cols-4 gap-4 max-w-sm mx-auto">
        <TimeBlock value={timeLeft.days} label="Dias" />
        <TimeBlock value={timeLeft.hours} label="Horas" />
        <TimeBlock value={timeLeft.minutes} label="Minutos" />
        <TimeBlock value={timeLeft.seconds} label="Segundos" />
      </div>
    </div>
  );
};