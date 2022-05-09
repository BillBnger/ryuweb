import keccak256 from "keccak256";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import { useDispatch, useSelector } from "react-redux";
import { toChecksumAddress } from "web3-utils";
import MintImg from "../assets/images/dragon1.png";
import { getMerkleTree, _doThis } from "./libs/api";
import { getContractNft } from "./libs/smart-contract";
import "./mint.css";
import { connect } from "./redux/blockchain/blockchainActions";
import { fetchData } from "./redux/data/dataActions";

export const Mint = () => {
  const dispatch = useDispatch();
  const blockchain = useSelector((state) => state.blockchain);
  const data = useSelector((state) => state.data);

  const totalSupply = useMemo(() => 5000, []);
  const siteTitle = useMemo(() => "MINT", []);
  const tagLine1 = useMemo(() => "", []);
  const tagLine2 = useMemo(() => "Pre-sale is active", []);

  const mintHead = useMemo(() => "MINT", []);
  const connectBtn = useMemo(() => "Connect Wallet", []);
  const mintBtn = useMemo(() => "Mint NFT", []);

  const nftPrice = 0.07;
  const maxNfts = 5;

  const [feedback, setFeedback] = useState("");
  const [claimingNft, setClaimingNft] = useState(false);
  const [mintingNft, setMintingNft] = useState(1);
  const [loading, setLoading] = useState(false);
  const [remainingToken, setRemaining] = useState(0);
  const [isWhiteListed, setIsWhiteListed] = useState(true);

  const _remainToken = () => {
    _doThis(async (account, web3) => {
      const token = getContractNft(web3);
      const tokenMinted = await token.methods.totalSupply().call();
      return setRemaining(tokenMinted);
    });
  };

  const mintNfts = () => {
    _doThis(async (account, web3) => {
      if (!mintingNft || isNaN(mintingNft)) {
        alert("Enter some nft quantity to buy");
        return;
      }

      setFeedback("Minting ...");
      setClaimingNft(true);

      const nft = getContractNft(web3);

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

      const leaf = keccak256(toChecksumAddress(account));
      const proof = getMerkleTree().getHexProof(leaf);

      //Mainnet
      const purchase = nft.methods.purchasePresaleTokens(mintingNft, proof);
      // const purchase = nft.methods.mint(mintingNft);

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
          setFeedback(
            "WOW, you now own a Ryu World NFT. go visit Opensea.io to view it."
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
  };

  const getData = () => {
    if (blockchain.account !== "" && blockchain.smartContract !== null) {
      dispatch(fetchData(blockchain.account));
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
    <div className="container section" id="mint">
      <div className="row align-items-center justify-content-space-between">
        <div className="col-md-12 center mb-20">
          <h1 className="main-heading">MINT</h1>
          <p>The Ryu World is a collection of 5000 NFT’s </p>
        </div>
        <div className="col-md-6 section-part section-space-right">
          <ScrollAnimation animateIn="fadeIn">
            <div className="image-responsive">
              <img
                style={{ height: "auto", width: "100%" }}
                alt="about"
                src={MintImg}
              />
            </div>
          </ScrollAnimation>
        </div>
        <div className="col-md-6 section-part ">
          <ScrollAnimation animateIn="fadeIn">
            <div className="mint-box">
              <div className="row center align-items-center">
                {/* <div className="col-md-12">
                  <NftMinting />
                </div> */}

                <div className="col-md-12">
                  <h2 className="mint-heading">MINT</h2>
                  <p>The price is {nftPrice} ETH + Gas fee</p>
                  <p>
                    {remainingToken} / {totalSupply}
                  </p>
                </div>

                <div className="col-md-12">
                  <div className="row align-items-center">
                    <div className="col-md-3"></div>
                    <div className="col-md-6">
                      <div className="form-group mint-input-group">
                        <div className="input-group">
                          <div className="input-group-prepend d-flex">
                            <button
                              className="btn btn-outline-secondary btn-mint-action btn-minus"
                              onClick={() =>
                                setMintingNft((mintingNft) =>
                                  mintingNft > 2 ? mintingNft - 1 : 1
                                )
                              }
                            >
                              -
                            </button>
                          </div>
                          <input
                            type="text"
                            className="form-control center"
                            placeholder="1"
                            aria-label="1"
                            value={mintingNft}
                            onChange={(e) => onChangeNft(e.target.value)}
                          />
                          <div className="input-group-append d-flex">
                            <button
                              className="btn btn-outline-secondary  btn-mint-action btn-plus"
                              onClick={() =>
                                setMintingNft((mintingNft) =>
                                  mintingNft >= maxNfts
                                    ? maxNfts
                                    : mintingNft + 1
                                )
                              }
                            >
                              +
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3"></div>
                  </div>
                </div>
                <div className="col-md-12" style={{ marginBottom: 20 }}>
                  <div className="mint-errors d-flex center justify-content-center">
                    {blockchain.errorMsg !== "" && <p>{blockchain.errorMsg}</p>}
                    <br />
                    {feedback !== "" && <p>{feedback}</p>}
                    <br />
                    {!isWhiteListed && <p>You are not whitelisted</p>}
                  </div>
                </div>
                <div className="col-md-12">
                  {(blockchain.account === "" ||
                    blockchain.smartContract === null) && (
                    <button
                      className="btn btn-primary btn-mint"
                      onClick={(e) => {
                        e.preventDefault();
                        dispatch(connect());
                        getData();
                      }}
                    >
                      Connect Wallet
                    </button>
                  )}

                  {!!blockchain.account && (
                    <>
                      <button
                        className="btn btn-primary btn-mint"
                        onClick={(e) => {
                          e.preventDefault();
                          mintNfts();
                          getData();
                        }}
                      >
                        {claimingNft ? "Minting..." : "Mint Now"}
                      </button>
                    </>
                  )}
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </div>
  );
};
