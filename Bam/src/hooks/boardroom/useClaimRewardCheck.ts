import {useEffect, useState} from 'react';
import useRefresh from '../useRefresh';
import useBamFinance from '../useBamFinance';

const useClaimRewardCheck = () => {
  const {slowRefresh} = useRefresh();
  const [canClaimReward, setCanClaimReward] = useState(false);
  const bamFinance = useBamFinance();
  const isUnlocked = bamFinance?.isUnlocked;

  useEffect(() => {
    async function canUserClaimReward() {
      try {
        setCanClaimReward(await bamFinance.canUserClaimRewardFromBoardroom());
      } catch (err) {
        console.error(err);
      }
    }
    if (isUnlocked) {
      canUserClaimReward();
    }
  }, [isUnlocked, slowRefresh, bamFinance]);

  return canClaimReward;
};

export default useClaimRewardCheck;
