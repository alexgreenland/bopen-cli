# bopen-cli

[![npm version](https://badge.fury.io/js/bopen-cli.svg)](https://www.npmjs.com/package/bopen-cli) [![Travis](https://img.shields.io/travis/alexgreenland/bopen-cli.svg)]()

A better native open utility for macOS and Windows, with emphasis on browsers and sugar for common configuration. Open URLs, file paths and other locators as supported by your system. 

Provide the location and optionally the target browser or application, and whether to open in incognito/private mode, alongside initial arguments and app arguments. Rather than `exec`, `bopen` spawns the target process for improved safety.

See [bopen](https://github.com/alexgreenland/bopen) ([NPM](https://www.npmjs.com/package/bopen)) for the library.

## Install

```
$ npm install --global bopen-cli
```

## Usage

```
$ bopen --help

  Usage: bopen <url|path> [options]

  Options:
    -i, --incognito  Open in incognito/private mode                      [boolean]
    -b, --browser    Browser to launch URL with
                            [choices: "chrome", "firefox", "ie", "edge", "safari"]
    -a, --app        App to launch location with
    -t, --targs      Target app arguments, use --targs="ARGS" format
    -o, --oargs      Opener arguments, use --oargs="ARGS" format
    -v, --version    Show version number                                 [boolean]
    -h, --help       Show help                                           [boolean]

  Examples:
    bopen http://example.com               Open webpage in default browser
    bopen image.png                        Open file in default viewer
    bopen http://example.com -b chrome     Open in Chrome
    bopen http://example.com -b firefox    Open in Firefox
    bopen http://example.com -b chrome -i  Open with Chrome in incognito
    bopen http://example.com -b ie -i      Open in IE with InPrivate
    bopen http://example.com --targs="-n"  Open with target app args
```

## License

Apache 2.0. © Alex Greenland, [ajrg.co](http://ajrg.co/)
