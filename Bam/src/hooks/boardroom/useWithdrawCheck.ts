import {useEffect, useState} from 'react';
import useBamFinance from '../useBamFinance';
import useRefresh from '../useRefresh';

const useWithdrawCheck = () => {
  const [canWithdraw, setCanWithdraw] = useState(false);
  const bamFinance = useBamFinance();
  const {slowRefresh} = useRefresh();
  const isUnlocked = bamFinance?.isUnlocked;

  useEffect(() => {
    async function canUserWithdraw() {
      try {
        setCanWithdraw(await bamFinance.canUserUnstakeFromBoardroom());
      } catch (err) {
        console.error(err);
      }
    }
    if (isUnlocked) {
      canUserWithdraw();
    }
  }, [isUnlocked, bamFinance, slowRefresh]);

  return canWithdraw;
};

export default useWithdrawCheck;
