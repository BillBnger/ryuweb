import { Button, Container, Grid, Typography } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import keccak256 from "keccak256";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toChecksumAddress } from "web3-utils";
import { getMerkleTree, _doThis } from "./libs/api";
import { getContractNft } from "./libs/smart-contract";
import "./mint.css";
import { connect } from "./redux/blockchain/blockchainActions";
import { fetchData } from "./redux/data/dataActions";
// images used in hero section

const bbImage = ["./images/bbImage.png"];
const ee19 = ["./images/graphics/ee19.png"];
const ee20 = ["./images/graphics/ee20.png"];

const useStyles = makeStyles({
  imgMobiHid: {
    display: { xs: "hidden", sm: "12", md: "6", lg: "12" },
  },
  topSmallHeading: {
    fontWeight: "700",
    fontSize: "17px",
    fontFamily: "Poppins",
    color: "#FFF",
    letterSpacing: "1px",
    maxWidth: "100%",
  },
  topSmallHeading2: {
    display: "inline",
    color: "#FF2FDE",
    fontWeight: "700",
    fontSize: "17px",
    fontFamily: "Poppins",
    letterSpacing: "1px",
  },
  topMainHeading: {
    fontWeight: "900",
    fontSize: { xs: "40px", md: "48px" },
    color: "#fff",
    fontName: "Poppins",
  },
  topMainHeading2: {
    fontWeight: "900",
    color: "#FF2FDE",
    fontFamily: "Poppins",
    fontSize: { xs: "40px", md: "48px" },
  },
  topText: {
    fontSize: "16px",
    fontWeight: "600",
    lineHeight: "2",
    color: "#FFF",
    display: { xs: "12", md: "6", },
  },
  joinBtn: {
    backgroundColor: "#009bf2",
    width: {
      xs: "95%",
      md: "auto",
    },
    fontSize: "14px",
    fontWeight: "800",
    fontFamily: "Poppins",
    color: "white",
    borderRadius: "50px",
    padding: "10px 20px",
    "&:hover": {
      backgroundColor: "#ff2fde",
    },
  },
  actionBtn: {
    backgroundColor: "#009bf2",
    fontSize: "20px",
    fontWeight: "800",
    fontFamily: "Poppins",
    color: "white",
    padding: "10px 20px",
    "&:hover": {
      backgroundColor: "#ff2fde",
    },
    borderRadius: "0px",
  },
  roundRightBtn: {
    borderTopRightRadius: "20px",
    borderBottomRightRadius: "20px",
  },
  roundLeftBtn: {
    borderTopLeftRadius: "20px",
    borderBottomLeftRadius: "20px",
  },
  actionRoundBtn: {
    borderRadius: "20px",
  },
  mintBtn: {
    borderRadius: "20px",
  },
  roadmapBtn: {
    color: "white",
    fontSize: "14px",
    fontFamily: "Poppins",
    fontWeight: "800",
    width: {
      xs: "100%",
      md: "auto",
    },
    padding: "6px 20px",
    "&:hover": {
      backgroundColor: "transparent",
      color: "#ff2fde",
    },
  },
});

export const Mint = () => {
  const classes = useStyles();

  const dispatch = useDispatch();
  const preSaleStartTime = new Date("2022-01-01T00:00:00.000Z").getTime();
  const saleStartTime = new Date("2022-06-01T00:00:00.000Z").getTime();
  const todayTime = new Date().getTime();

  const [preSaleActive, setPreSaleActive] = useState(
    todayTime >= preSaleStartTime && todayTime < saleStartTime
  );
  const [saleActive, saleSaleActive] = useState(todayTime >= saleStartTime);
  const [nftPrice, setNftPrice] = useState(0.2);
  const [maxNfts, setMaxNfts] = useState(5);
  const [totalSupply, setTotalSupply] = useState(5000);

  const [feedback, setFeedback] = useState("");
  const [claimingNft, setClaimingNft] = useState(false);
  const [mintingNft, setMintingNft] = useState(1);
  const [loading, setLoading] = useState(false);
  const [remainingToken, setRemaining] = useState(0);
  const [isWhiteListed, setIsWhiteListed] = useState(true);

  const endDate = new Date("2022-06-01T00:00:00.000Z");
  const [nowDate, setNowDate] = useState(new Date());
  const days = parseInt((endDate - nowDate) / (1000 * 60 * 60 * 24));
  const hours = parseInt((Math.abs(endDate - nowDate) / (1000 * 60 * 60)) % 24);
  const minutes = parseInt(
    (Math.abs(endDate.getTime() - nowDate.getTime()) / (1000 * 60)) % 60
  );
  const seconds = parseInt(
    (Math.abs(endDate.getTime() - nowDate.getTime()) / 1000) % 60
  );
  const timer = useRef(null);
  useEffect(() => {
    timer.current = setInterval(() => setNowDate(new Date()), 1000);
    return () => {
      clearInterval(timer.current);
    };
  }, []);

  const blockchain = useSelector((state) => state.blockchain);
  const data = useSelector((state) => state.data);

  const [openModal, setOpenModal] = React.useState(false);
  const handleOpenModal = () => {
    setOpenModal(true);
  };
  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const _remainToken = async () => {
    const token = getContractNft();
    const tokenMinted = await token.methods.totalSupply().call();
    return setRemaining(tokenMinted);
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
        await (saleActive
          ? nft.methods.itemPricePresale().call()
          : nft.methods.cost().call())
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
      const purchase = saleActive
        ? nft.methods.mint(mintingNft, proof)
        : nft.methods.purchasePresaleTokens(mintingNft, proof);
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
  };

  const getContractCores = () => {
    _doThis(async (account, web3) => {
      const nft = getContractNft(web3);

      let priceMethod = nft.methods.itemPricePresale();
      let maxMintAmountMethod = nft.methods.presaleMaxMint();
      let maxSupplyMethod = nft.methods.maxSupply();

      if (saleActive) {
        priceMethod = nft.methods.cost();
        maxMintAmountMethod = nft.methods.maxMintAmount();
      } else if (preSaleActive) {
      }

      const price = web3.utils.fromWei(await priceMethod.call());
      const maxMintAmount = await maxMintAmountMethod.call();
      const maxSupply = await maxSupplyMethod.call();

      setNftPrice(price);
      setMaxNfts(maxMintAmount);
      setTotalSupply(maxSupply);
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

    getContractCores();
  };

  useEffect(() => {
    setPreSaleActive(
      todayTime >= preSaleStartTime && todayTime < saleStartTime
    );
    saleSaleActive(todayTime >= saleStartTime);
  }, []);

  useEffect(() => {
    getData();
  }, [blockchain.account]);

  return (
    <React.Fragment>
      <CssBaseline />
      <Container
        to="/#hero"
        sx={{
          mt: 2,
          pt: 8,
          background: "rgba(256, 256, 256, 0.15)",
          pb: 5,
          borderRadius: "20px 20px 20px 20px",
          mb:10,
        }}
      >
        <Grid container spacing={2}>
          {/* Ellipse 19 top left  */}
          <Box
            sx={{
              float: "left",
              position: "absolute",
              mt: { md: 0 },
              ml: { md: -13 },
              display: { xs: "none", md: "block" },
            }}
          >
            <img src={ee19} width={130} alt="triangle" />
          </Box>

          <Grid
            md={6}
            item
            sx={{ display: { xs: "12", sm: "12", md: "6", lg: "12" } }}
          >
            {/* triangle top right  */}
            <Box
              sx={{
                opacity: "0.6",
                float: "right",
                mr: { md: -83 },
                mt: { md: 30 },
                display: { xs: "none", md: "block" },
              }}
            >
              <img src={ee20} width={130} alt="triangle" />
            </Box>
            <Box>
              <Grid
                item
                className={classes.topSmallHeading}
                sx={{
                  mb: 1,
                  ml: { xs: 2, md: 4 },
                }}
              >
                {" "}
                GET IN THE ACTION.&nbsp;
                <Box component="span" className={classes.topSmallHeading2}>
                  JOIN OUR FACTION.
                </Box>
              </Grid>

              <Typography
                variant="h2"
                className={classes.topMainHeading}
                sx={{
                  ml: { xs: 2, md: 4 },
                }}
              >
                Welcome to
              </Typography>
              <Typography
                variant="h2"
                gutterBottom
                className={classes.topMainHeading2}
                sx={{
                  ml: { xs: 2, md: 4 },
                }}
              >
                Bubble Faction
              </Typography>
              <Typography
                variant="h2"
                className={classes.topMainHeading}
                sx={{
                  ml: { xs: 2, md: 4 },
                }}
              >
                {remainingToken} / {totalSupply}
              </Typography>
              <Typography
                className={classes.topText}
                sx={{
                  pb: 3,
                  ml: { xs: 2, md: 4 },
                }}
              >
                1 BUBBLE - {nftPrice} ETH + GAS FEES
              </Typography>
            </Box>
          </Grid>

          <Grid
            item
            className={classes.imgMobiHid}
            sx={{
              margin: "auto",
              display: { xs: "none", md: "flex" },
            }}
          >
            <Box
              sx={{
                borderRadius: "50%",
                background: "rgba(256, 256, 256, 0.2)",
                backgroundImage: `url(${bbImage})`,
                backgroundSize: "cover",
                repeat: "no-repeat",
                backgroundPosition: "center",
                minHeight: "430px",
                minWidth: "430px",
              }}
            >
              {" "}
              &nbsp;{" "}
            </Box>
          </Grid>
          <Grid container>
            <Grid
            xs={12}
              md={6}
              className="d-flex align-items-center justify-content-round"
              style={{ marginLeft: "5px" }}
            >
              <Grid  style={{ float: "left"}}>
                <Button
                  className={[classes.actionBtn, classes.roundLeftBtn]}
                  color="inherit"
                  onClick={() =>
                    setMintingNft((mintingNft) =>
                      mintingNft > 2 ? mintingNft - 1 : 1
                    )
                  }
                >
                  -
                </Button>
                <Button className={classes.actionBtn} color="inherit">
                  {mintingNft}
                </Button>
                <Button
                  className={[classes.actionBtn, classes.roundRightBtn]}
                  color="inherit"
                  onClick={() =>
                    setMintingNft((mintingNft) =>
                      mintingNft >= maxNfts ? maxNfts : mintingNft + 1
                    )
                  }
                >
                  +
                </Button>
              </Grid>
              <Grid md={3} style={{ float: "left", textAlign: "right" }}>
                {!!blockchain.account ? (
                  <Button
                    className={[classes.actionBtn, classes.actionRoundBtn]}
                    color="inherit"
                    onClick={(e) => {
                      e.preventDefault();
                      mintNfts();
                      getData();
                    }}
                  >
                    Mint
                  </Button>
                ) : (
                  <Button
                  
                  className={[classes.actionBtn, classes.actionRoundBtn]}
                    color="inherit"
                    onClick={(e) => {
                      e.preventDefault();
                      dispatch(connect());
                      getData();
                    }}
                  >
                    Connect
                  </Button>
                )}
              </Grid>
            </Grid>
            <Grid md={6}></Grid>
            <Grid md={6} style={{ marginLeft: 10 }}>
              <Typography
                className={classes.topText}
                sx={{
                  pb: 3,
                  ml: { xs: 2, md: 4 },
                }}
              >
                {blockchain.errorMsg !== "" && <p>{blockchain.errorMsg}</p>}
                {feedback !== "" && <p>{feedback}</p>}
                {!isWhiteListed && <p>You are not whitelisted</p>}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
};
