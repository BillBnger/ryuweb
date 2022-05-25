import React from 'react';

//Graveyard ecosystem logos
import bamLogo from '../../assets/img/bam.png';
import bdao from '../../assets/img/bdao.png';
import bbondLogo from '../../assets/img/bbond.png';
import mimLogo from '../../assets/img/mim.png';
import wavax from '../../assets/img/wavax.png';
import bamBdao from '../../assets/img/bam-bdao.png';
import bamMimLpLogo from '../../assets/img/bam-usdc.png';
import bdaoMimLpLogo from '../../assets/img/bdao-usdc.png';
import wamp from '../../assets/img/WAMP.png';
import hsharebdao from '../../assets/img/bam-bdao.png';
import gnode from '../../assets/img/gnode.jpg';
import bdaonode from '../../assets/img/bdaonode.jpg';
import ust from '../../assets/img/ust.png';
import usdc from '../../assets/img/usdc.png';


const logosBySymbol: {[title: string]: string} = {
  //Real tokens
  //=====================
  BAM: bamLogo,
  AVAX: wavax,
  WAVAX: wavax,
  BDAO: bdao,
  BBOND: bbondLogo,
  MIM: mimLogo,
  WAMP: wamp,
  HSHARE: wamp,
  GNODE: gnode,
  BAMNODE: gnode,
  BDAONODE: bdaonode,
  USDC: usdc,
  UST: ust,
  'BAM-USDC-LP' : bamMimLpLogo,
  'BAM-BDAO-LP' : bamBdao,
  'BDAO-USDC-LP' : bdaoMimLpLogo,
  'HSHARE-BDAO-LP' : hsharebdao,
  'Token' : ust,
  'panda' : mimLogo
  
};

type LogoProps = {
  symbol: string;
  size?: number;
};

const TokenSymbol: React.FC<LogoProps> = ({symbol,size=85}) => {
  if (!logosBySymbol[symbol]) {
    throw new Error(`Invalid Token Logo symbol: ${symbol}`);
  }
  if(symbol === 'BAM-USDC-LP' || symbol === 'BDAO-USDC-LP' || symbol === 'BAM-BDAO-LP'){
    return <img src={logosBySymbol[symbol]} alt={`${symbol} Logo`} width={size} height={size} />;
  }else if(symbol === 'MIM' || symbol === 'WAVAX' || symbol === 'WAMP'){
    return <img src={logosBySymbol[symbol]} alt={`${symbol} Logo`} width={65} height={65} />;
  }else{
    return <img src={logosBySymbol[symbol]} alt={`${symbol} Logo`} width={65} height={65} />;
  }
    
};

export default TokenSymbol;
