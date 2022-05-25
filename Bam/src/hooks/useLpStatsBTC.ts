import {useEffect, useState} from 'react';
import useBamFinance from './useBamFinance';
import {LPStat} from '../bam-finance/types';
import useRefresh from './useRefresh';

const useLpStatsBTC = (lpTicker: string) => {
  const [stat, setStat] = useState<LPStat>();
  const {slowRefresh} = useRefresh();
  const bamFinance = useBamFinance();
  
  useEffect(() => {
    async function fetchLpPrice() {
      try {
        setStat(await bamFinance.getLPStatBTC(lpTicker));
      } catch (err) {
        console.error(err);
      }
    }
    fetchLpPrice();
  }, [setStat, bamFinance, slowRefresh, lpTicker]);

  return stat;
};

export default useLpStatsBTC;
