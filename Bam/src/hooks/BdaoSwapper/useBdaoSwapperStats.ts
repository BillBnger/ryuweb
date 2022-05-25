import {useEffect, useState} from 'react';
import useBamFinance from '../useBamFinance';
import {BdaoSwapperStat} from '../../bam-finance/types';
import useRefresh from '../useRefresh';

const useBdaoSwapperStats = (account: string) => {
  const [stat, setStat] = useState<BdaoSwapperStat>();
  const {fastRefresh /*, slowRefresh*/} = useRefresh();
  const bamFinance = useBamFinance();

  useEffect(() => {
    async function fetchBdaoSwapperStat() {
      try {
        if (bamFinance.myAccount) {
          setStat(await bamFinance.getBdaoSwapperStat(account));
        }
      } catch (err) {
        console.error(err);
      }
    }
    fetchBdaoSwapperStat();
  }, [setStat, bamFinance, fastRefresh, account]);

  return stat;
};

export default useBdaoSwapperStats;
