import axios from 'axios'

export default function getBlockData(pageNumber) {
        var data =[];
        axios.get('http://cil-blockchain1.uksouth.cloudapp.azure.com:4200/blockchain/' + pageNumber)
            .then(response => {
                var block = response.data;
                for (var t = 0; t < block.length; t++) {
                    var time = block[t].timestamp;
                    var time1 = new Date(time * 1000);
                    var timeStamOctp = time1.toLocaleString();
                    data.push({ blockNumber: block[t].number, transactionHash: block[t].hash, timestamp: timeStamOctp })
                }
            })
            return data;
    }    