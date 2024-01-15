import { useContext } from "react";
import { StockContext } from "../Contexts/StockContext";

export default function useStock() {
  return useContext(StockContext)
}