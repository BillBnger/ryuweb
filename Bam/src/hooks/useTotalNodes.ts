import { BigNumber } from 'ethers';
import { useCallback, useState, useEffect } from 'react';
import useBamFinance from './useBamFinance';
import config from '../config';

const useTotalNodes = (contract: string, sectionInUI: number) => {
  const bamFinance = useBamFinance();

  const [poolAPRs, setPoolAPRs] = useState<BigNumber[]>([]);

  const fetchNodes = useCallback(async () => {
    setPoolAPRs(await bamFinance.getTotalNodes(contract));
  }, [bamFinance, contract]);

  useEffect(() => {
    if (sectionInUI === 3) {
      fetchNodes().catch((err) => console.error(`Failed to fetch APR info: ${err.stack}`));
      const refreshInterval = setInterval(fetchNodes, config.refreshInterval);
      return () => clearInterval(refreshInterval);
    }
  }, [setPoolAPRs, bamFinance, fetchNodes, sectionInUI]);

  return poolAPRs;
};

export default useTotalNodes;