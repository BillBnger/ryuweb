import {useCallback} from 'react';
import useBamFinance from './useBamFinance';
import useHandleTransactionReceipt from './useHandleTransactionReceipt';
import {Bank} from '../bam-finance';

const useCompound = (bank: Bank) => {
  const bamFinance = useBamFinance();
  const handleTransactionReceipt = useHandleTransactionReceipt();

  const handleReward = useCallback(() => {
    handleTransactionReceipt(
      bamFinance.compound(bank.contract, bank.poolId, bank.sectionInUI),
      `Compound Node rewards`,
    );
  }, [bank, bamFinance, handleTransactionReceipt]);

  return {onCompound: handleReward};
};

export default useCompound;
