var config = {}

// Update to have your correct username and password
config.mongoURI = {
    production: 'mongodb+srv://aurora:aurora123@devopscluster.qicqr.mongodb.net/darkroom?retryWrites=true&w=majority',
    development: 'mongodb+srv://aurora:aurora123@devopscluster.qicqr.mongodb.net/darkroom-dev?retryWrites=true&w=majority',
    test: 'mongodb+srv://aurora:aurora123@devopscluster.qicqr.mongodb.net/darkroom-test?retryWrites=true&w=majority',
}
module.exports = config;



// 'mongodb+srv://<USERNAME>:<PASSWORD>@gallery.wc344.mongodb.net/darkroom-test?retryWrites=true&w=majority'
