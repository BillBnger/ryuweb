import keccak256 from "keccak256";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import {
  Button,
  Card,
  Col,
  Container,
  FormControl,
  FormGroup,
  Image,
  InputGroup,
  Row,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { toChecksumAddress } from "web3-utils";
import LogoImg from "./../assets/images/logo.png";
// import mainImage from "./../assets/images/main-bg.png";
import sideImg from "./../assets/images/dragon1.png";
import "./center-mint.css";
import { getMerkleTree, _doThis } from "./libs/api";
import { getContractNft } from "./libs/smart-contract";
import { connect } from "./redux/blockchain/blockchainActions";
import { fetchData } from "./redux/data/dataActions";

const fontFamily = `'montserrat', sans-serif`;
const textColor = `#262732`;
const errorColor = `red`;
const btnColor = `#7ed857`;
const backgroundColor = `#000`;
// const backgroundImage = mainImage;

function CenterMint() {
  const dispatch = useDispatch();
  const blockchain = useSelector((state) => state.blockchain);
  const data = useSelector((state) => state.data);

  const totalSupply = useMemo(() => 5000, []);
  const siteTitle = useMemo(() => "RyuWorld", []);
  const tagLine1 = useMemo(() => "Pre-sale is active", []);
  // const tagLine2 = useMemo(() => "Pre-sale is active", []);
  // const footerContent = useMemo(
  //   () =>
  //     "Please make sure you are connected to the right network (Avalanche Mainnet). Please note: You can buy a maximum of 5 in a single transaction (3 for Whitelist). Each wallet can hold a maximum of 20 Node Puppies.",
  //   []
  // );

  const mintHead = useMemo(() => "MINT", []);
  const connectBtn = useMemo(() => "Connect Wallet", []);
  const mintBtn = useMemo(() => "Mint NFT", []);

  const nftPrice = 0.0;
  const maxNfts = 5;

  const [feedback, setFeedback] = useState("");
  const [claimingNft, setClaimingNft] = useState(false);
  const [mintingNft, setMintingNft] = useState(1);
  const [loading, setLoading] = useState(false);
  const [remainingToken, setRemaining] = useState(0);
  const [isWhiteListed, setIsWhiteListed] = useState(true);

  const _remainToken = async () => {
    return _doThis(async (account, web3) => {
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
      // const price = web3.utils.fromWei(
      //   await nft.methods.cost().call()
      // );

      const _howMany = Number(mintingNft);
      console.log(mintingNft + "Checking1");
      const totalPrice = web3.utils.toWei(
        (Number(price) * _howMany).toString()
      );
      console.log(totalPrice + " totalPrice");

      // Work for UI now
      // check this address available or not in whitelist
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
        } catch (eiii) { }

        if (errorMsg.indexOf("Allowlist is not active") > -1) {
          msg = "contract is paused";
        } else if (errorMsg.indexOf("You are not in presale") > -1) {
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
            "WOW, you now own a RyuWorld. go visit Opensea.io to view it."
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
    <>
      <Container fluid style={{ backgroundColor: `${backgroundColor}` }}>
        <Container>
          <Row className="section">
            <Col md={12}>
              <div className="top-navbar">
                <div className="d-flex align-items-center text-center justify-content-center">
                  <div className="logo-container">
                    <Image src={LogoImg} fluid />
                  </div>
                </div>
              </div>
            </Col>
          </Row>
          <Row className="d-flex align-items-center section">
            <Col md={6}>
              <div className="side-img text-center">
                <Image src={sideImg} fluid roundedCircle />
              </div>
            </Col>
            <Col md={6}>
              <Card className="text-center mint-card">
                <Card.Body className="text-center">
                  <Row>
                    <Col md={12}>
                      <h1 className="supply-head">
                        {remainingToken}/{totalSupply}
                      </h1>
                      <h2 className="site-title"> {siteTitle} </h2>
                      <p className="site-tagline"> {tagLine1} </p>
                      {/* <p className="site-tagline"> {tagLine2} </p> */}
                      {remainingToken >= totalSupply && (
                        <>
                          <h4>The sale has ended.</h4>
                          <Button className="btn-connect" variant="primary">
                            <a
                              target={"_blank"}
                              href={"https://opensea.io"}
                              rel="noreferrer"
                            >
                              Opensea.io
                            </a>
                          </Button>
                        </>
                      )}
                      <div className="mint-box d-flex align-items-center flex-column justify-content-center">
                        <h2 className="mint-head">{mintHead}</h2>
                        <FormGroup>
                          <InputGroup className="mb-3 mint-input-group">
                            <InputGroup.Text
                              className="input-group-prepend"
                              onClick={() =>
                                setMintingNft((mintingNft) =>
                                  mintingNft > 2 ? mintingNft - 1 : 1
                                )
                              }
                            >
                              -
                            </InputGroup.Text>
                            <FormControl
                              className="text-center"
                              value={mintingNft}
                              aria-label=""
                              onChange={(e) => onChangeNft(e.target.value)}
                            />
                            <InputGroup.Text
                              className="input-group-append"
                              onClick={() =>
                                setMintingNft((mintingNft) =>
                                  mintingNft >= maxNfts
                                    ? maxNfts
                                    : mintingNft + 1
                                )
                              }
                            >
                              +
                            </InputGroup.Text>
                          </InputGroup>
                        </FormGroup>
                      </div>
                      <div className="price-box">
                        <span id="ETH">{nftPrice}</span> ETH + Gas Fee Required
                      </div>
                      <div className="mint-action-box">
                        {(blockchain.account === "" ||
                          blockchain.smartContract === null) && (
                            <Button
                              className="btn-connect"
                              variant="primary"
                              onClick={(e) => {
                                e.preventDefault();
                                dispatch(connect());
                                getData();
                              }}
                            >
                              {connectBtn}
                            </Button>
                          )}
                        {!!blockchain.account && (
                          <Button
                            className="btn-mint"
                            variant="primary"
                            onClick={(e) => {
                              e.preventDefault();
                              mintNfts();
                              getData();
                            }}
                          >
                            {claimingNft ? "Minting..." : mintBtn}
                          </Button>
                        )}
                      </div>
                      <div className="error-box">
                        {blockchain.errorMsg !== "" && (
                          <p>{blockchain.errorMsg}</p>
                        )}
                        <br />
                        {feedback !== "" && <p>{feedback}</p>}
                        <br />
                        {!isWhiteListed && `You are not whitelisted`}
                      </div>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
        {/* <Container className="footer section" fluid>
          <Container>
            <Row>
              <Col className="text-center">
                <p>{footerContent}</p>
              </Col>
            </Row>
          </Container>
        </Container> */}
      </Container>
    </>
  );
}

export default CenterMint;
