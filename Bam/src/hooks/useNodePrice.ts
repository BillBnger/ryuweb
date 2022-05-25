import { useCallback, useEffect, useState } from 'react';

import { BigNumber } from 'ethers';
import useBamFinance from './useBamFinance';
import { ContractName } from '../bam-finance';
import config from '../config';

const useNodePrice = (poolName: ContractName, poolId: Number, sectionInUI: Number) => {
  const [amount, setAmount] = useState(BigNumber.from(0));
  const bamFinance = useBamFinance();

  const fetchAmount = useCallback(async () => {
    const balance = sectionInUI === 3 ? await bamFinance.getNodePrice(poolName, poolId) : BigNumber.from(0);
    setAmount(balance);
  }, [poolName, poolId, sectionInUI, bamFinance]);

  useEffect(() => {
    if (sectionInUI === 3) {
      fetchAmount().catch((err) => console.error(err.stack));

      const refreshBalance = setInterval(fetchAmount, config.refreshInterval);
      return () => clearInterval(refreshBalance);
    }
  }, [poolName, setAmount, bamFinance, fetchAmount]);

  return amount;
};

export default useNodePrice;