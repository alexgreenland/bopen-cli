#!/usr/bin/env node
'use strict'

const pkg = require('./package.json')
const bopen = require('bopen')
const yargs = require('yargs')
const extract = require('./argv')
  

    
    
  // cli
  //   .version(pkg.version)
  //   .option('-i, --incognito', 'open the URL in incognito/private mode', false)
  //   .option('-b, --browser [name]', 'browser to launch, such as "chrome", "ie", etc.')
  //   .option('-a, --app [name]', 'app to launch (platform-dependent name)')
  //   .option('-t, --targs ["args..."]', 'arguments to the target application', list, [])
  //   .option('-o, --oargs ["args..."]', 'arguments to the opener', list, [])
  //   .usage(`<url|path> [options]
  //
  //     A better native open utility.
  //
  //     $ bopen http://example.com
  //     $ bopen http://example.com chrome
  //     $ bopen http://example.com firefox
  //     $ bopen http://example.com chrome --incognito
  //     $ bopen http://example.com ie --incognito
  //     $ bopen http://example.com --targs "-n"`)
  //   .parse(process.argv)
    
const result = extract(yargs.argv)
  
if (result instanceof Error) {
  console.error(result.message)
  process.exit(1)
}
    
bopen(result.location, result.options)
