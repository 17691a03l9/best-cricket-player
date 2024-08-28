#!/usr/bin/env node
let lib = require('../lib')
  , args = process.argv.splice(process.execArgv.length + 2)
  , cricketPlayerName = args[0];
lib.printBestCricketPlayer(cricketPlayerName);