import {useEffect, useState} from 'react';
import useBamFinance from './useBamFinance';
import {TokenStat} from '../bam-finance/types';
import useRefresh from './useRefresh';

const useBondStats = () => {
  const [stat, setStat] = useState<TokenStat>();
  const {slowRefresh} = useRefresh();
  const bamFinance = useBamFinance();

  useEffect(() => {
    async function fetchBondPrice() {
      try {
        setStat(await bamFinance.getBondStat());
      } catch (err) {
        console.error(err);
      }
    }
    fetchBondPrice();
  }, [setStat, bamFinance, slowRefresh]);

  return stat;
};

export default useBondStats;
