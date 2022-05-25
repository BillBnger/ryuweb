import {useCallback, useState, useEffect} from 'react';
import useBamFinance from './useBamFinance';
import {Bank} from '../bam-finance';
import {PoolStats} from '../bam-finance/types';
import config from '../config';

const useStatsForPartner = (bank: Bank) => {
  const bamFinance = useBamFinance();

  const [poolAPRs, setPoolAPRs] = useState<PoolStats>();

  const fetchAPRsForPool = useCallback(async () => {
    setPoolAPRs(await bamFinance.getPartnerAPRs(bank));
  }, [bamFinance, bank]);

  useEffect(() => {
    fetchAPRsForPool().catch((err) => console.error(`Failed to fetch APR info: ${err.stack}`));
    const refreshInterval = setInterval(fetchAPRsForPool, config.refreshInterval);
    return () => clearInterval(refreshInterval);
  }, [setPoolAPRs, bamFinance, fetchAPRsForPool]);

  return poolAPRs;
};

export default useStatsForPartner;
