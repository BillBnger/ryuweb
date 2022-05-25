import {useEffect, useState} from 'react';
import useBamFinance from './useBamFinance';
import {TokenStat} from '../bam-finance/types';
import useRefresh from './useRefresh';

const useBtcStats = () => {
  const [stat, setStat] = useState<Number>();
  const {slowRefresh} = useRefresh();
  const bamFinance = useBamFinance();

  useEffect(() => {
    async function fetchSharePrice() {
      try {
        setStat(await bamFinance.getBTCPriceUSD());
      } catch (err) {
        console.error(err);
      }
    }
    fetchSharePrice();
  }, [setStat, bamFinance, slowRefresh]);

  return stat;
};

export default useBtcStats;
