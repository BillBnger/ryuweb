const SmartContract = artifacts.require("GlassesMan");

module.exports = function (deployer) {
  deployer.deploy(SmartContract, "Name", "Symbol", "https://");
};
