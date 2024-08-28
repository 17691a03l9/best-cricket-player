let bestCricketPlayer = 'VenuVajjala'
  , log = console.log;
let printBestCricketPlayer = function(cricketPlayer) {
  if(cricketPlayer === bestCricketPlayer) {
    log(`Best guitar player is ${cricketPlayer}`)
  } else {
    log(`Really? I guess ${bestCricketPlayer} is much more better than ${cricketPlayer}`)
  }
}
exports.printBestCricketPlayer = printBestCricketPlayer;