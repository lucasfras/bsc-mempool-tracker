import React from 'react'

export const Txn = ({gas, from, to, gasPrice, value, hash}) => {


  const copyToClipBoard = (value) => {
    navigator.clipboard.writeText(value);
  }
  return (
    <tr>
        <td onClick={()  => copyToClipBoard(parseInt(gas, 16))} >{parseInt(gas, 16)}</td>
        <td onClick={()  => copyToClipBoard(parseInt(gasPrice, 16))}>{parseInt(gasPrice, 16)}</td>
        <td onClick={()  => copyToClipBoard(from)}>{
          `${from.substring(0,7)}...${from.substring(from.length - 6, from.length)}`
        }</td>
        <td onClick={()  => copyToClipBoard(to)}>{
          `${to.substring(0,7)}...${to.substring(to.length - 6, to.length)}`
        }</td>
        <td onClick={()  => copyToClipBoard((parseInt(value, 16) / 1e18))}>{
          (parseInt(value, 16) / 1e18)
          
          }</td>
        <td onClick={()  => copyToClipBoard(hash)}>{
          `${hash.substring(0,7)}...${hash.substring(hash.length - 6, hash.length)}`
        }</td>
    </tr>
  )
}

export default Txn