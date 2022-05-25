import {useCallback, useEffect, useState} from 'react';
import useBamFinance from './useBamFinance';
import useStakedBalanceOnBoardroom from './useStakedBalanceOnBoardroom';

const useBoardroomVersion = () => {
  const [boardroomVersion, setBoardroomVersion] = useState('latest');
  const bamFinance = useBamFinance();
  const stakedBalance = useStakedBalanceOnBoardroom();

  const updateState = useCallback(async () => {
    setBoardroomVersion(await bamFinance.fetchBoardroomVersionOfUser());
  }, [bamFinance?.isUnlocked, stakedBalance]);

  useEffect(() => {
    if (bamFinance?.isUnlocked) {
      updateState().catch((err) => console.error(err.stack));
    }
  }, [bamFinance?.isUnlocked, stakedBalance]);

  return boardroomVersion;
};

export default useBoardroomVersion;
