import {useState, useEffect} from 'react';

interface Props {
  duration: number;
}

export const Countdown = ({duration}: Props) => {
  const [countdown, setCountdown] = useState(duration);

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown((countdown) => countdown - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return <div>{countdown}</div>;
};