import {useCallback, useEffect, useState} from 'react';
import {BigNumber} from 'ethers';
import useBamFinance from './useBamFinance';
import {ContractName} from '../bam-finance';
import config from '../config';

const useEarnings = (poolName: ContractName, earnTokenName: String, poolId: Number) => {
  const [balance, setBalance] = useState(BigNumber.from(0));
  const bamFinance = useBamFinance();
  
  const isUnlocked = bamFinance?.isUnlocked;

  const fetchBalance = useCallback(async () => {
    const balance = await bamFinance.earnedFromBank(poolName, earnTokenName, poolId, bamFinance.myAccount);
    setBalance(balance);
  }, [poolName, earnTokenName, poolId, bamFinance]);

  useEffect(() => {
    if (isUnlocked) {
      fetchBalance().catch((err) => console.error(err.stack));

      const refreshBalance = setInterval(fetchBalance, config.refreshInterval);
      return () => clearInterval(refreshBalance);
    }
  }, [isUnlocked, poolName, bamFinance, fetchBalance]);

  return balance;
};

export default useEarnings;
