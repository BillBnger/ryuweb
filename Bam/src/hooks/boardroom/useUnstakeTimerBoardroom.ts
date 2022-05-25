import {useEffect, useState} from 'react';
import useBamFinance from '../useBamFinance';
import {AllocationTime} from '../../bam-finance/types';

const useUnstakeTimerBoardroom = () => {
  const [time, setTime] = useState<AllocationTime>({
    from: new Date(),
    to: new Date(),
  });
  const bamFinance = useBamFinance();

  useEffect(() => {
    if (bamFinance) {
      bamFinance.getUserUnstakeTime().then(setTime);
    }
  }, [bamFinance]);
  return time;
};

export default useUnstakeTimerBoardroom;
