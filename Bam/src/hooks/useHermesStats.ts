import {useEffect, useState} from 'react';
import useBamFinance from './useBamFinance';
import {TokenStat} from '../bam-finance/types';
import useRefresh from './useRefresh';

const useHermesStats = () => {
  const [stat, setStat] = useState<TokenStat>();
  const {fastRefresh} = useRefresh();
  const bamFinance = useBamFinance();

  useEffect(() => {
    async function fetchHermesPrice() {
      try {
        setStat(await bamFinance.getHermesStat());
      } catch (err) {
        console.error(err);
      }
    }
    fetchHermesPrice();
  }, [setStat, bamFinance, fastRefresh]);

  return stat;
};

export default useHermesStats;
