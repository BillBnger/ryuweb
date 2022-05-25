import {useEffect, useState} from 'react';
import useBamFinance from './useBamFinance';
import {TokenStat} from '../bam-finance/types';
import useRefresh from './useRefresh';

const useBamStats = () => {
  const [stat, setStat] = useState<TokenStat>();
  const {fastRefresh} = useRefresh();
  const bamFinance = useBamFinance();

  useEffect(() => {
    async function fetchBamPrice() {
      try {
        setStat(await bamFinance.getBamStat());
      } catch (err) {
        console.error(err);
      }
    }
    fetchBamPrice();
  }, [setStat, bamFinance, fastRefresh]);

  return stat;
};

export default useBamStats;
