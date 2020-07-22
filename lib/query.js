const Table = require('cli-table')
const cv = require('compare-versions')

module.exports = (list, major) => {
    const table = new Table({
        head: Reflect.ownKeys(list[0])
    })

    console.log('处理数据中……')
    major = isNaN(parseInt(major)) ? 0 : parseInt(major)

    list.reduce((tab, node) => {
        if (cv(node.version, `v${major}.0.0`) >= 0) {
            tab.push(Object.values(node))
        }
        return tab
    }, table)
    return table
}