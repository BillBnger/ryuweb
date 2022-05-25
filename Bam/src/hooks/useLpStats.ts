import {useEffect, useState} from 'react';
import useBamFinance from './useBamFinance';
import {LPStat} from '../bam-finance/types';
import useRefresh from './useRefresh';

const useLpStats = (lpTicker: string) => {
  const [stat, setStat] = useState<LPStat>();
  const {slowRefresh} = useRefresh();
  const bamFinance = useBamFinance();

  useEffect(() => {
    async function fetchLpPrice() {
      try {
        setStat(await bamFinance.getLPStat(lpTicker));
      } catch (err) {
        console.error(err);
      }
    }
    fetchLpPrice();
  }, [setStat, bamFinance, slowRefresh, lpTicker]);

  return stat;
};

export default useLpStats;
