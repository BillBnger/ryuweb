import {useEffect, useState} from 'react';
import {BigNumber} from 'ethers';
import useBamFinance from './useBamFinance';
import useRefresh from './useRefresh';

const useTotalStakedOnBoardroom = () => {
  const [totalStaked, setTotalStaked] = useState(BigNumber.from(0));
  const bamFinance = useBamFinance();
  const {slowRefresh} = useRefresh();
  const isUnlocked = bamFinance?.isUnlocked;

  useEffect(() => {
    async function fetchTotalStaked() {
      try {
        setTotalStaked(await bamFinance.getTotalStakedInBoardroom());
      } catch (err) {
        console.error(err);
      }
    }
    if (isUnlocked) {
      fetchTotalStaked();
    }
  }, [isUnlocked, slowRefresh, bamFinance]);

  return totalStaked;
};

export default useTotalStakedOnBoardroom;
