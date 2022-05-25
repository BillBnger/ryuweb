import {useEffect, useState} from 'react';
import useBamFinance from './useBamFinance';
import {TokenStat} from '../bam-finance/types';
import useRefresh from './useRefresh';

const useCashPriceInEstimatedTWAP = () => {
  const [stat, setStat] = useState<TokenStat>();
  const bamFinance = useBamFinance();
  const {slowRefresh} = useRefresh();

  useEffect(() => {
    async function fetchCashPrice() {
      try {
        setStat(await bamFinance.getBamStatInEstimatedTWAP());
      } catch (err) {
        console.error(err);
      }
    }
    fetchCashPrice();
  }, [setStat, bamFinance, slowRefresh]);

  return stat;
};

export default useCashPriceInEstimatedTWAP;
