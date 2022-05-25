import {useEffect, useState} from 'react';
import useBamFinance from './useBamFinance';
import useRefresh from './useRefresh';

const useTotalValueLocked = () => {
  const [totalValueLocked, setTotalValueLocked] = useState<Number>(0);
  const {slowRefresh} = useRefresh();
  const bamFinance = useBamFinance();

  useEffect(() => {
    async function fetchTVL() {
      try {
        setTotalValueLocked(await bamFinance.getTotalValueLocked());
      } catch (err) {
        console.error(err);
      }
    }
    fetchTVL();
  }, [setTotalValueLocked, bamFinance, slowRefresh]);

  return totalValueLocked;
};

export default useTotalValueLocked;
