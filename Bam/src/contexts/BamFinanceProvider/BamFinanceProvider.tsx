import React, {createContext, useEffect, useState} from 'react';
import {useWallet} from 'use-wallet';
import BamFinance from '../../bam-finance';
import config from '../../config';

export interface BamFinanceContext {
  bamFinance?: BamFinance;
}

export const Context = createContext<BamFinanceContext>({bamFinance: null});

type Props = {
  children?: React.ReactNode
};
export const BamFinanceProvider: React.FC<Props> = ({children}) => {
  const {ethereum, account} = useWallet();
  const [bamFinance, setBamFinance] = useState<BamFinance>();

  useEffect(() => {
    if (!bamFinance) {
      const bam = new BamFinance(config);
      if (account) {
        // wallet was unlocked at initialization
        bam.unlockWallet(ethereum, account);
      }
      setBamFinance(bam);
    } else if (account) {
      bamFinance.unlockWallet(ethereum, account);
    }
  }, [account, ethereum, bamFinance]);

  return <Context.Provider value={{bamFinance}}>{children}</Context.Provider>;
};
