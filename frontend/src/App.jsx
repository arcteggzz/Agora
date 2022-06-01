import './App.css';
import React, { useEffect } from 'react';
import { useWeb3ExecuteFunction, useMoralis } from "react-moralis";
import Balance from './Balance';


function App() {
  const { authenticate, isAuthenticated, user, logout } = useMoralis();

  useEffect(() => {
  if (isAuthenticated) {
    console.log(user)
  }
  }, [isAuthenticated]);

  const login = async () => {
    if (!isAuthenticated) {

      await authenticate({signingMessage: "Log in using Moralis" })
        .then(function (user) {
          console.log("logged in user:", user);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }

  const logOut = async () => {
    await logout();
    console.log("logged out");
  }

  const ABI = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"_loyalCustomer","type":"address"}],"name":"_addLoyalCustomer","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint8","name":"id","type":"uint8"},{"internalType":"string","name":"rewardName","type":"string"},{"internalType":"uint256","name":"rewardCost","type":"uint256"}],"name":"_addReward","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"},{"internalType":"uint8[]","name":"_justPurchased","type":"uint8[]"}],"name":"_addTwoArrays","outputs":[{"internalType":"uint8[]","name":"","type":"uint8[]"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"_balances","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"_extraMint","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint8[]","name":"chosenIds","type":"uint8[]"}],"name":"_findTotalCost","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"}],"name":"_getListOfExistingPurchasedItems","outputs":[{"internalType":"uint8[]","name":"","type":"uint8[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address[]","name":"_arrayOfLoyalCustomers","type":"address[]"}],"name":"_isListActual","outputs":[{"internalType":"bool","name":"maybe","type":"bool"},{"internalType":"uint256","name":"id","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"}],"name":"_isLoyalCustomer","outputs":[{"internalType":"bool","name":"","type":"bool"},{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"_loyalCustomers","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"_loyalCustomersTransferTokens","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"_owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint8[]","name":"chosenIds","type":"uint8[]"}],"name":"_purchaseRewards","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"_purchasedRewards","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"_purchasedRewardsID","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_loyalCustomer","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"_rewardLoyalCustomers","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"_rewardsPool","outputs":[{"internalType":"uint8","name":"id","type":"uint8"},{"internalType":"string","name":"rewardName","type":"string"},{"internalType":"uint256","name":"rewardCost","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint8[]","name":"_updatedList","type":"uint8[]"},{"internalType":"address","name":"_address","type":"address"}],"name":"_updatePurchasedItems","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"},{"internalType":"uint8[]","name":"chosenIds","type":"uint8[]"}],"name":"_updatePurchasedRewardsMapping","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"_viewAdminBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_viewAllLoyalCustomers","outputs":[{"internalType":"address[]","name":"","type":"address[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_loyalCustomerAddress","type":"address"}],"name":"_viewUserBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address[]","name":"_arrayOfLoyalCustomers","type":"address[]"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"multiSendTokensToCustomers","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}]
  const contractProcessor = useWeb3ExecuteFunction()
  
  async function extraMint (val) {

    let options = {
      contractAddress: "0x85B1935C9F05Ed298A80985FE240A699c4Fe5475",
      functionName: "_extraMint",
      abi: ABI,
      params: {
        amount: val
      }
    }

    await contractProcessor.fetch({
      params: options
    })
  }

  // async function viewBalance () {

  //   let options = {
  //     contractAddress: "0x85B1935C9F05Ed298A80985FE240A699c4Fe5475",
  //     functionName: "_viewAdminBalance",
  //     abi: ABI,
  //   }

  //   const balaceValue = await contractProcessor.fetch({
  //     params: options
  //   }) 
  //   console.log(balaceValue)
  //   setBalance(balaceValue)
  // }

  return (
    <div className="App">
      <div className="login">
        <button id='loginbtn' onClick={login}>Login</button>
        <button id='logoutbtn' onClick={logOut}>Logout</button>
      </div>
      <div className="extraMint">
        <input type="text" />
        <button onClick={() => extraMint(500)}>ExtraMint</button>
      </div>
      <Balance />
    </div>
  );
}

export default App;