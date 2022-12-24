import fetch from 'node-fetch'

async function callRPC(method, params) {

    const rpcURL = 'https://bsc-dataseed.binance.org/';

  const body = {
    jsonrpc: '2.0',
    method: method,
    params: params,
    id: 1,
  };

  const response = await fetch(rpcURL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });

  const json = await response.json();
  return json.result;
}



const viewMempool = async () => {
    const result = await callRPC('txpool_content');

    if(result){
        return JSON.stringify(result)
    }
}

export default viewMempool