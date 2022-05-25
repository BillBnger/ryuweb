import {useEffect, useState} from 'react';
import useBamFinance from './useBamFinance';
import {TokenStat} from '../bam-finance/types';
import useRefresh from './useRefresh';
import useWallet from 'use-wallet';
const useRaffleStats = (account: string, raffleAddress: string) => {
  const [stat, setStat] = useState<TokenStat>();
  const {fastRefresh} = useRefresh();
  const bamFinance = useBamFinance();
  
  useEffect(() => {
    async function fetchBamPrice() {
      
      try {
        setStat(await bamFinance.getRaffleStat(account, raffleAddress));
      } catch (err) {
        console.error(err);
      }
    }
    fetchBamPrice();
  }, [setStat, bamFinance, fastRefresh]);

  return stat;
};

export default useRaffleStats;
