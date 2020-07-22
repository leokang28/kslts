#!/usr/bin/env node
const fetch = require('../lib/fetch')
const query = require('../lib/query')

const printVersion = () => {
    console.log(require('../package.json').version)
}

const printTable = major => {
    fetch()
        .then(list => {
            console.log(query(list, major).toString())
        })
}

function printHelp(code) {
    const lines = [
        '',
        '  Usage:',
        '    kslts [8]',
        '',
        '  Options:',
        '    -v, --version             print the version of kslts',
        '    -h, --help                display this message',
        '',
        '  Examples:',
        '    $ kslts 8',
        ''
    ]

    console.log(lines.join('\n'))
}
const main = async () => {
    const arg = process.argv[2]?.split('=').pop()
    switch (arg) {
        case '-V':
        case '-v':
        case '--version':
            printVersion()
            break
        case '-H':
        case '-h':
        case '--help':
            printHelp()
            break
        default:
            printTable(arg)
            break
    }
}

main()