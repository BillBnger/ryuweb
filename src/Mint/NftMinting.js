import React, { useCallback, useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { _doThis } from "./libs/api";
import { getContractNft } from "./libs/smart-contract";
import { connect } from "./redux/blockchain/blockchainActions";
import { fetchData } from "./redux/data/dataActions";
import * as s from "./styles/globalStyles";

const fontFamily = `'montserrat', sans-serif`;
const textColor = `#fff`;
const errorColor = `red`;
const btnColor = `#d9534f`;
const containerBgColor = `transparent`;
const backgroundColor = `black`;
const backgroundImage = "";

export const SiteTitleHead = styled.h1`
  font-size: 36px;
  font-weight: 700;
  margin-top: 20px;
  margin-bottom: 20px;
  font-family: inherit;
  color: ${textColor};
  font-family: ${fontFamily};
`;

export const TagLine = styled.p`
  color: ${textColor};
  font-size: 18px;
  margin: 0 0 20px;
  font-family: ${fontFamily};
`;

export const MintHead = styled.h4`
  color: ${textColor};
  font-family: inherit;
  font-weight: 500;
  line-height: 1.1;
  margin-top: 10px;
  margin-bottom: 10px;
  font-size: 18px;
  font-family: ${fontFamily};
`;

export const NftMintBox = styled.div`
  text-align: center;
  margin-bottom: 25px;
`;

export const NftMintContainer = styled.div`
  text-align: center;
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${containerBgColor};
  border-radius: 20px;
`;

export const NftAudioBox = styled.div`
  display: none;
`;

export const NftButton = styled.button`
  position: relative;
  display: inline-block;
  float: left;
  background: ${btnColor} !important;
  border: 1px solid ${btnColor} !important;
  border-radius: 0px;
  padding: 9px 12px;
  border-radius: 0px;
  color: ${textColor};
  font-size: 14px;
  font-weight: 400;
  line-height: 1.42857143;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  cursor: pointer;
  font-family: ${fontFamily};
`;

export const NftMintConnectBtn = styled.button`
  font-size: 14px;
  border: 0px;
  padding: 14px 51px;
  color: ${textColor};
  display: block;
  font-weight: 600;
  text-transform: capitalize;
  display: inline-block;
  border-radius: 45px;
  position: relative;
  transition: 0.2s ease-in-out;
  overflow: hidden;
  border-radius: 6px;
  background: ${btnColor};
  box-shadow: 0px 4px 0px #9839ba1f;
  margin-bottom: 15px;
  font-family: ${fontFamily};
  cursor: pointer;
`;

export const NftTextInput = styled.input`
  border-radius: 0;
  min-width: 50px;
  width: 160px;
  display: inline-block;
  float: left;
  height: 40px;
  position: relative;
  z-index: 2;
  padding: 6px 12px;
  font-size: 14px;
  line-height: 1.42857143;
  color: #555;
  background-color: #fff;
  background-image: none;
  border: 1px solid #ccc;
  box-shadow: inset 0 1px 1px rgb(0 0 0 / 8%);
  border-color: #66afe9;
  font-family: ${fontFamily};
`;

export const NftPriceBox = styled.h4`
  color: ${textColor};
  font-family: inherit;
  font-weight: 500;
  line-height: 1.1;
  margin-top: 10px;
  margin-bottom: 10px;
  font-size: 18px;
  font-family: ${fontFamily};
`;

export const NftSaleEnded = styled.h4`
  color: ${textColor};
  font-family: inherit;
  font-weight: 500;
  line-height: 1.1;
  margin-top: 10px;
  margin-bottom: 10px;
  font-size: 18px;
  font-family: ${fontFamily};
`;

export const NftErrorBox = styled.h4`
  color: ${errorColor};
  font-family: inherit;
  font-weight: 500;
  line-height: 1.1;
  margin-top: 10px;
  margin-bottom: 10px;
  font-size: 18px;
  font-family: ${fontFamily};
`;

export const TotalSupplyBox = styled.h4`
  color: ${textColor};
  font-family: inherit;
  font-weight: 500;
  line-height: 1.1;
  margin-top: 10px;
  margin-bottom: 10px;
  font-size: 18px;
  font-family: ${fontFamily};
`;

export const ResponsiveWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: stretched;
  align-items: stretched;
  width: 100%;
  @media (min-width: 767px) {
    flex-direction: row;
  }
`;

export default function NftMinting() {
  const dispatch = useDispatch();
  const blockchain = useSelector((state) => state.blockchain);
  const data = useSelector((state) => state.data);

  const totalSupply = useMemo(() => 8888, []);
  const siteTitle = useMemo(() => "MINT", []);
  const tagLine1 = useMemo(() => "", []);
  const tagLine2 = useMemo(() => "Pre-sale is active", []);

  const mintHead = useMemo(() => "MINT", []);
  const connectBtn = useMemo(() => "Connect Wallet", []);
  const mintBtn = useMemo(() => "Mint NFT", []);

  const nftPrice = 0.088;
  const maxNfts = 10;

  const [feedback, setFeedback] = useState("");
  const [claimingNft, setClaimingNft] = useState(false);
  const [mintingNft, setMintingNft] = useState(1);
  const [loading, setLoading] = useState(false);
  const [remainingToken, setRemaining] = useState(0);
  const [isWhiteListed, setIsWhiteListed] = useState(true);

  const _remainToken = async () => {
    const token = getContractNft();
    const tokenMinted = await token.methods.totalSupply().call();
    return setRemaining(tokenMinted);
  };

  const mintNfts = () => {
    try {
      _doThis(async (account, web3) => {
        if (!mintingNft || isNaN(mintingNft)) {
          alert("Enter some nft quantity to buy");
          return;
        }

        setFeedback("Minting ...");
        setClaimingNft(true);

        const nft = getContractNft(web3);

        // const price = web3.utils.fromWei(
        //   await nft.methods.itemPrice().call(),
        // );

        // const price = web3.utils.fromWei(
        //   await nft.methods.cost().call()
        // );

        // Mainnet

        const price = web3.utils.fromWei(
          await nft.methods.itemPricePresale().call()
        );

        const _howMany = Number(mintingNft);
        console.log(mintingNft + "Checking1");
        const totalPrice = web3.utils.toWei(
          (Number(price) * _howMany).toString()
        );
        console.log(totalPrice + " totalPrice");

        //Mainnet
        const purchase = nft.methods.purchasePresaleTokens(mintingNft);

        //This is for rinkeby
        // const purchase = nft.methods.mint(mintingNft);

        // Gas for rinkeby and mainnet
        let options = {
          from: account,
          gas: "0",
          value: totalPrice,
        };
        try {
          const estimateGas = Math.trunc(await purchase.estimateGas(options));
          options = {
            ...options,
            gas: "" + estimateGas,
          };
        } catch (e) {
          let msg = null;
          let errorMsg = e.message.toString();
          try {
            let a = e.message;
            msg = JSON.parse(
              a.substring(a.indexOf("{"), a.lastIndexOf("}") + 1)
            ).message;
            msg = msg.replace("err: ", "");
            msg = msg.replace("execution reverted: ", "");
          } catch (eiii) {}

          if (errorMsg.indexOf("Allowlist is not active") > -1) {
            msg = "contract is paused";
          } else if (errorMsg.indexOf("You are not in allowlist") > -1) {
            msg = "you are not whitelisted";
          }
          if (!msg || msg === undefined) {
            msg = "Insufficient funds";
          }

          setFeedback("Sorry, " + msg);
          setClaimingNft(false);
          return;
        }

        try {
          setLoading(true);
          await purchase.send(options).on("confirmation", (i) => {
            //here
            // if (i === 0) {
            //   setLoading(false);
            //   if (
            //     window.confirm(
            //       `Welcome to The Doggos ! Go check out your Doggo on opensea.io`
            //     )
            //   ) {
            //     //window.location.href = `https://opensea.io/${account}`;
            //   }
            // }

            setFeedback(
              "WOW, you now own a Dysfunctional Dog. go visit Opensea.io to view it."
            );
            setClaimingNft(false);
            dispatch(fetchData(blockchain.account));
          });
        } catch (e) {
          setLoading(false);

          setFeedback("Sorry, something went wrong please try again later.");
          setClaimingNft(false);
        }
      }, true);
    } catch (e) {
      console.log("error", e.message);
    }
  };

  const getData = () => {
    if (blockchain.account !== "" && blockchain.smartContract !== null) {
      dispatch(fetchData(blockchain.account));

      //getIsWhitelisted().then(setIsWhiteListed);

      _remainToken();

      setInterval(() => {
        _remainToken();
      }, 3000);
    }
  };

  useEffect(() => {
    getData();
  }, [blockchain.account]);

  const onChangeNft = useCallback(
    (value) => {
      value = parseInt(value);
      value = isNaN(value) ? 1 : value;
      if (value > maxNfts) {
        setMintingNft(maxNfts);
      } else if (value < 2) {
        setMintingNft(1);
      } else {
        setMintingNft(value);
      }
    },
    [maxNfts]
  );

  return (
    <s.Container
      className="minting-container"
      flex={1}
      ai={"center"}
      style={{ padding: 24 }}
    >
      <ResponsiveWrapper flex={1} style={{ padding: 24 }}>
        <s.SpacerMedium />
        <s.Container
          flex={1}
          jc={"center"}
          ai={"center"}
          style={{ backgroundColor: "", padding: 24 }}
        >
          <div className="audio-container">
            {/* <NftAudioBox>
                <ReactAudioPlayer
                  id={'myAudio'}
                  src={BgAudio}
                  autoPlay={true}
                  controls
                  loop={true}
                />
              </NftAudioBox> */}
          </div>
          <NftMintContainer>
            <SiteTitleHead>{siteTitle}</SiteTitleHead>
            <TagLine style={{ textAlign: "center" }}>{tagLine1}</TagLine>
            <TagLine style={{ textAlign: "center" }}>{tagLine2}</TagLine>
            {remainingToken < totalSupply && (
              <>
                <MintHead>{mintHead}</MintHead>
                <NftMintBox>
                  <NftButton
                    onClick={() =>
                      setMintingNft((mintingNft) =>
                        mintingNft > 2 ? mintingNft - 1 : 1
                      )
                    }
                  >
                    -
                  </NftButton>
                  <NftTextInput
                    value={mintingNft}
                    onChange={(e) => onChangeNft(e.target.value)}
                  ></NftTextInput>
                  <NftButton
                    onClick={() =>
                      setMintingNft((mintingNft) =>
                        mintingNft > maxNfts ? maxNfts : mintingNft + 1
                      )
                    }
                  >
                    +
                  </NftButton>
                </NftMintBox>
                <NftPriceBox>
                  <span id="ETH">{nftPrice}</span> ETH + Gas Fee Required
                </NftPriceBox>
                {(blockchain.account === "" ||
                  blockchain.smartContract === null) && (
                  <NftMintConnectBtn
                    onClick={(e) => {
                      e.preventDefault();
                      dispatch(connect());
                      getData();
                    }}
                  >
                    {connectBtn}
                  </NftMintConnectBtn>
                )}
                {!!blockchain.account && (
                  <NftMintConnectBtn
                    onClick={(e) => {
                      e.preventDefault();
                      mintNfts();
                      getData();
                    }}
                  >
                    {claimingNft ? "Minting..." : mintBtn}
                  </NftMintConnectBtn>
                )}
              </>
            )}

            {remainingToken >= totalSupply && (
              <>
                <NftSaleEnded>The sale has ended.</NftSaleEnded>
                <NftButton>
                  <a
                    target={"_blank"}
                    href={"https://opensea.io"}
                    rel="noreferrer"
                  >
                    Opensea.io
                  </a>
                </NftButton>
              </>
            )}

            <NftErrorBox>
              {blockchain.errorMsg !== "" && `${blockchain.errorMsg}`}
              <br />
              {feedback !== "" && `${feedback}`}
              <br />
              {!isWhiteListed && `You are not whitelisted`}
            </NftErrorBox>

            <TotalSupplyBox>
              {remainingToken}/{totalSupply}
            </TotalSupplyBox>
          </NftMintContainer>
        </s.Container>
      </ResponsiveWrapper>
      <s.SpacerSmall />
    </s.Container>
  );
}
