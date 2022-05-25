import {useCallback} from 'react';
import useBamFinance from './useBamFinance';
import useHandleTransactionReceipt from './useHandleTransactionReceipt';

const useStakeToBoardroom = () => {
  const bamFinance = useBamFinance();
  const handleTransactionReceipt = useHandleTransactionReceipt();

  const handleStake = useCallback(
    (amount: string) => {
      handleTransactionReceipt(bamFinance.stakeShareToBoardroom(amount), `Stake ${amount} BDAO to the Boardroom`);
    },
    [bamFinance, handleTransactionReceipt],
  );
  return {onStake: handleStake};
};

export default useStakeToBoardroom;
