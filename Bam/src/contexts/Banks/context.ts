import {createContext} from 'react';
import {Bank} from '../../bam-finance';

export interface BanksContext {
  banks: Bank[];
}

const context = createContext<BanksContext>({
  banks: [],
});

export default context;
