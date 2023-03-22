import React from "react"
import { AppRoutes } from "./AppRoutes"
import { Header } from "./components"

export const Root: React.FC<{}> = () => {

  return <>
    <Header />
    <AppRoutes />
  </>
}