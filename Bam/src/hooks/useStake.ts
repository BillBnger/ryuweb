import {useCallback} from 'react';
import useBamFinance from './useBamFinance';
import {Bank} from '../bam-finance';
import useHandleTransactionReceipt from './useHandleTransactionReceipt';
import {parseUnits} from 'ethers/lib/utils';
import {BigNumber} from 'ethers';

const useStake = (bank: Bank) => {
  const bamFinance = useBamFinance();
  const handleTransactionReceipt = useHandleTransactionReceipt();

  const handleStake = useCallback(
    (amount: string) => {
      const amountBn = bank.sectionInUI !== 3 
      ? parseUnits(amount, bank.depositToken.decimal)
      : BigNumber.from(amount);
      if(bank.sectionInUI === 3){
        handleTransactionReceipt(
          bamFinance.stake(bank.contract, bank.poolId, bank.sectionInUI, amountBn),
            `Buy ${amount} ${bank.depositTokenName} Node`,  
        );
      }else{
        handleTransactionReceipt(
          bamFinance.stake(bank.contract, bank.poolId, bank.sectionInUI, amountBn),
            `Stake ${amount} ${bank.depositTokenName} to ${bank.contract}`,  
        );
      }
      
    },
    [bank, bamFinance, handleTransactionReceipt],
  );
  return {onStake: handleStake};
};

export default useStake;
