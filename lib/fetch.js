const axios = require('axios')

axios.defaults.retry = 3;
axios.defaults.retryDelay = 1000;

module.exports = async () => {
    const HOST = 'https://nodejs.org/dist/index.json'

    console.log('获取数据中……')
    try {
        const { data } = await axios.get(HOST)
        return data.filter(node => node.lts).map(({ files, ...rest }) => rest)
    } catch (error) {
        console.log(error.toString())
        process.exit(1)
    }

}