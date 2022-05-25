import {useEffect, useState} from 'react';
import useBamFinance from './useBamFinance';
import {AllocationTime} from '../bam-finance/types';
import useRefresh from './useRefresh';

const useTreasuryAllocationTimes = () => {
  const {slowRefresh} = useRefresh();
  const [time, setTime] = useState<AllocationTime>({
    from: new Date(),
    to: new Date(),
  });
  const bamFinance = useBamFinance();
  useEffect(() => {
    if (bamFinance) {
      bamFinance.getTreasuryNextAllocationTime().then(setTime);
    }
  }, [bamFinance, slowRefresh]);
  return time;
};

export default useTreasuryAllocationTimes;
