// check.connect.js
'use strict';
const mongoose = require('mongoose');
const os = require('os')
const process = require('process')
const _SECONDS = 5000
//count Connect
const countConnect = () => {
    const numConnection = mongoose.connections.length;
    console.log('Number of connections:', numConnection);
    return numConnection;
};

//check Overload
const checkOverload = () => {
    setInterval(() => {
        const numConnection = mongoose.connections.length
        const numCores = os.cpus().length
        const memoryUsage = process.memoryUsage().rss
        //exp maximum number of connection based on number of core
        const maxConnection = numCores *5;
        console.log('Activate connection:'+numConnection)
        console.log('Memory usage:: ' + memoryUsage/1024/1024,'MB')
        if(numConnection > maxConnection){
            console.log('Connection overloaded!')
            //notify.send(...)
        }
    },_SECONDS) //Monitor every 5 seconds
};
module.exports = {countConnect,checkOverload}

// Log connections immediately when this module is imported
countConnect();
checkOverload();
