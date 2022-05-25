import {useEffect, useState} from 'react';
import useBamFinance from '../useBamFinance';
import {AllocationTime} from '../../bam-finance/types';

const useClaimRewardTimerBoardroom = () => {
  const [time, setTime] = useState<AllocationTime>({
    from: new Date(),
    to: new Date(),
  });
  const bamFinance = useBamFinance();

  useEffect(() => {
    if (bamFinance) {
      bamFinance.getUserClaimRewardTime().then(setTime);
    }
  }, [bamFinance]);
  return time;
};

export default useClaimRewardTimerBoardroom;
