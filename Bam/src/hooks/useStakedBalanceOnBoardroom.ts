import {useEffect, useState} from 'react';
import {BigNumber} from 'ethers';
import useBamFinance from './useBamFinance';
import useRefresh from './useRefresh';

const useStakedBalanceOnBoardroom = () => {
  const {slowRefresh} = useRefresh();
  const [balance, setBalance] = useState(BigNumber.from(0));
  const bamFinance = useBamFinance();
  const isUnlocked = bamFinance?.isUnlocked;
  useEffect(() => {
    async function fetchBalance() {
      try {
        setBalance(await bamFinance.getStakedSharesOnBoardroom());
      } catch (e) {
        console.error(e);
      }
    }
    if (isUnlocked) {
      fetchBalance();
    }
  }, [slowRefresh, isUnlocked, bamFinance]);
  return balance;
};

export default useStakedBalanceOnBoardroom;
