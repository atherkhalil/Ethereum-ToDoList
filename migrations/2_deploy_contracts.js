const toDoList = artifacts.require("./toDoList.sol");

module.exports = function(deployer) {
  deployer.deploy(toDoList);
};
