import { BigNumber } from 'ethers';
import { useCallback, useState, useEffect } from 'react';
import useBamFinance from './useBamFinance';
import config from '../config';

const useUserDetails = (contract: string, sectionInUI: number, user: string) => {
  const bamFinance = useBamFinance();

  const [poolAPRs, setPoolAPRs] = useState<BigNumber[]>([]);

  const fetchNodes = useCallback(async () => {
    setPoolAPRs(await bamFinance.getUserDetails(contract, user));
  }, [bamFinance, contract, user]);

  useEffect(() => {
    if (user && sectionInUI === 3) {
      fetchNodes().catch((err) => console.error(`Failed to fetch APR info: ${err.stack}`));
      const refreshInterval = setInterval(fetchNodes, config.refreshInterval);
      return () => clearInterval(refreshInterval);
    }
  }, [setPoolAPRs, bamFinance, fetchNodes, user, sectionInUI]);

  return poolAPRs;
};

export default useUserDetails;