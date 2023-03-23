import React from "react"
import "./coin-row.css"

interface ICoinRow {
  imageUrl: string;
  price: string;
  coinName: string;
  changePct: string;
  mktCap: string;
  totalVol24: string;
  circularSupply: string;
}

export const CoinRow: React.FC<ICoinRow> = (props) => {
  const { imageUrl, 
    price, 
    coinName, 
    changePct, 
    mktCap, 
    totalVol24,
    circularSupply, 
  } = props
  return <div className={"row__wrapper"}>
    <div className={"imge__wrapper"}>
      <img 
        src={`https://www.cryptocompare.com/${imageUrl}`} 
        alt={imageUrl}
      />
    </div>
    <span className={"coin-name"}>{coinName}</span>
    <span className={"coin-price"}>{price}</span>
    <span className={"coin-changePct"}>{`${changePct} %`}</span>
    <span className={"coin-market-cap"}>{mktCap}</span>
    <span className={"coin-total-vol-24"}>{totalVol24}</span>
    <span className={"coin-circular-supply"}>{circularSupply}</span>
  </div>
}