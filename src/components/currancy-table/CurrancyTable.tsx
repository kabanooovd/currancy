import { ICionsData, ICoin } from "../../store/coins-types";
import { CoinRow } from "./Coin-row/CoinRow";
import "./currancy-table.css";

interface ICurrancyTable {
  coinsData: ICionsData;
}

export const CurrancyTable: React.FC<ICurrancyTable> = (props) => {
  const { coinsData } = props;
  return <>
    {coinsData.Data.map((coin: ICoin) => {
      const { 
        IMAGEURL, 
        PRICE, 
        CHANGEPCT24HOUR, 
        MKTCAP,
        TOTALVOLUME24HTO,
        SUPPLY,
      } = coin.DISPLAY["USD"]
      const { Name } = coin.CoinInfo;

      return <CoinRow 
        key={coin.CoinInfo.Id}
        imageUrl={IMAGEURL}
        price={PRICE}
        coinName={Name}
        changePct={CHANGEPCT24HOUR}
        mktCap={MKTCAP}
        totalVol24={TOTALVOLUME24HTO}
        circularSupply={SUPPLY}
      />
    })}
  </>
}