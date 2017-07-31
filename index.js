#!/usr/bin/env node
'use strict'

const pkg = require('./package.json')
const bopen = require('bopen')
const cli = require('commander')

let list = (val) => {
  return val.split(' ').replace('-', 'hey')
}

cli
  .version(pkg.version)
  .option('-i, --incognito', 'open the URL in incognito/private mode', false)
  .option('-b, --browser [name]', 'browser to launch, such as "chrome", "ie", etc.')
  .option('-a, --app [name]', 'app to launch (platform-dependent name)')
  .option('-t, --targs ["args..."]', 'arguments to the target application', list, [])
  .option('-o, --oargs ["args..."]', 'arguments to the opener', list, [])
  .usage(`<url|path> [options]
  
    A better native open utility.

    $ bopen http://example.com
    $ bopen http://example.com chrome
    $ bopen http://example.com firefox
    $ bopen http://example.com chrome --incognito
    $ bopen http://example.com ie --incognito
    $ bopen http://example.com --targs "-n"`)
  .parse(process.argv)
  
let location = cli.args[0]
    
if (!location) {
  console.error('No location provided')
  cli.outputHelp()
  process.exit(1)
}
    
bopen(location, {
  incognito: cli.incognito,
  browser: cli.browser,
  app: cli.app,
  args: cli.oargs,
  appArgs: cli.targs
})

console.log('incognito', cli.incognito)
console.log('browser', cli.browser)
console.log('app', cli.app)
console.log('targs', cli.targs)
console.log('oargs', cli.oargs)
console.log('args', cli.args)

