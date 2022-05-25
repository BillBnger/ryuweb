import {useCallback} from 'react';
import useBamFinance from './useBamFinance';
import useHandleTransactionReceipt from './useHandleTransactionReceipt';
import {Bank} from '../bam-finance';

const useHarvest = (bank: Bank) => {
  const bamFinance = useBamFinance();
  const handleTransactionReceipt = useHandleTransactionReceipt();

  const handleReward = useCallback(() => {
    handleTransactionReceipt(
      bamFinance.harvest(bank.contract, bank.poolId, bank.sectionInUI),
      `Claim ${bank.earnTokenName} from ${bank.contract}`,
    );
  }, [bank, bamFinance, handleTransactionReceipt]);

  return {onReward: handleReward};
};

export default useHarvest;
