import {useCallback, useEffect, useState} from 'react';

import {BigNumber} from 'ethers';
import useBamFinance from './useBamFinance';
import {ContractName} from '../bam-finance';
import config from '../config';

const useStakedBalance = (poolName: ContractName, poolId: Number) => {
  const [balance, setBalance] = useState(BigNumber.from(0));
  const bamFinance = useBamFinance();
  const isUnlocked = bamFinance?.isUnlocked;

  const fetchBalance = useCallback(async () => {
    const balance = await bamFinance.stakedBalanceOnBank(poolName, poolId, bamFinance.myAccount);
    setBalance(balance);
  }, [poolName, poolId, bamFinance]);

  useEffect(() => {
    if (isUnlocked) {
      fetchBalance().catch((err) => console.error(err.stack));

      const refreshBalance = setInterval(fetchBalance, config.refreshInterval);
      return () => clearInterval(refreshBalance);
    }
  }, [isUnlocked, poolName, setBalance, bamFinance, fetchBalance]);

  return balance;
};

export default useStakedBalance;
