import React from "react"
import { observer } from "mobx-react"
import "./main.css"
import mainData from "../../store/coins"
import { toJS } from "mobx"
import { CurrancyTable } from "../../components"
import { ICionsData } from "../../store/coins-types"

export const Main: React.FC<{}> = observer(() => {

  const mainDataState = toJS(mainData)

  const coinsData: ICionsData | null = mainDataState.coinsMainData

  React.useEffect(() => {
    if (!coinsData) {
      mainData.onGetCoinsMainData()
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return <div className={"main__wrapper"}>
    <div className={"title__wrapper"}>
      <h1>Currency</h1>
    </div>
    <div className={"table__wrapper"}>
      {!coinsData && <h3>Loading...</h3>}
      {coinsData && <CurrancyTable coinsData={coinsData}/>}
    </div>
  </div>
})