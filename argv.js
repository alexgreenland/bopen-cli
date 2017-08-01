'use strict'

module.exports = (argv) => {
  let location = argv._[0]
  
  if (!location) {
    return new Error('Location not provided')
  }
  
  let oargs = []
  if (argv.oargs) {
    oargs = argv.oargs.split(' ')
  }

  let targs = []
  if (argv.targs) {
    targs = argv.targs.split(' ')
  }
  
  return {
    location: location,
    options: {
      incognito: !!argv.incognito,
      browser: argv.browser,
      app: argv.app,
      args: oargs,
      appArgs: targs
    }
  }
}
