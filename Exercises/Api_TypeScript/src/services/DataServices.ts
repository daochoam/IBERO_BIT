import { DataEntry } from "../types"
import Data from "./Data.json"

// .tsx .ts .node .js .jason
// Type Assertion: Data as Array<DataEntry>  ==  <Array<DataEntry>>Data;
const Datas: Array<DataEntry> = <DataEntry[]>Data

export const getEntries = () => Datas  // get all entries from the database Data.json

export const addEntries = () => null // add all entries to the database Data.json
