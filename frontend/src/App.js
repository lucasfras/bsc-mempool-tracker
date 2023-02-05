
import './App.css';
import React, {useState, useEffect } from 'react';
import axios from 'axios';

import Txn from './components/Txn.jsx';

function App() {

  const [pending, setPending] = useState([])
  const [queued, setQueued] = useState([])


  const organize = (data) => {
    const queuedArray = []
    const pendingArray = []
    const datapending = data.data.pending
    const dataqueued = data.data.queued
    Object.entries(dataqueued).forEach(([chave, valor]) => {

      for(const chaves in valor){
        queuedArray.push(valor[chaves])
      }

    })
    Object.entries(datapending).forEach(([chave, valor]) => {

      for(const chaves in valor){
        pendingArray.push(valor[chaves])
      }

    })

    const sortedPending = pendingArray.sort((a, b) => b.gasPrice - a.gasPrice)
    const sortedQueued = queuedArray.sort((a, b) => b.gasPrice - a.gasPrice)
    setPending(sortedPending)
    setQueued(sortedQueued)

  }

  useEffect(()=> {
   axios.get('http://localhost:3000/', {
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then(response => {
      organize(response)
    })
    .catch(error => {
      console.log(error)
    });


  }, [])
  
  return (
    <div className='maindiv'>

      <h1>Mempool tracker</h1>

      <h2>Pending</h2>

      <table>
        <thead>
        <tr>
          <th>Gas</th>
          <th>Gasprice</th>
          <th>From</th>
          <th>To</th>
          <th>Value</th>
          <th>Hash</th>
        </tr>
        </thead>
        <tbody>

        {pending.map((res) => (
          <Txn 
            gas={res.gas}
            gasPrice={res.gasPrice}
            from={res.from}
            value={res.value}
            to={res.to}
            hash={res.hash}
            key={res.hash}
          />
          ))}
          
        </tbody>
      </table>


      <h2>Queued</h2>

      <table>
        <thead>
        <tr>
          <th>Gas</th>
          <th>Gasprice</th>
          <th>From</th>
          <th>To</th>
          <th>Value</th>
          <th>Hash</th>
        </tr>


        </thead>
        <tbody>

        {
        
        queued.map((res) => (
          <Txn 
            gas={res.gas}
            gasPrice={res.gasPrice}
            from={res.from}
            value={res.value}
            to={res.to}
            hash={res.hash}
            key={res.hash}
          />
          ))
          
          }
          
        </tbody>
      </table>

    </div>
  );
}

export default App;
