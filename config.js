const config = {
    dbUrl : process.env.DB_URL || "mongodb+srv://mtorres:1234@cluster0.xcf0u.gcp.mongodb.net/ups?retryWrites=true&w=majority",
    port: process.env.PORT || 4000,
    host: process.env.HOST || 'http://localhost',
    publicRoute: process.env.PUBLIC_ROUTE || '/',
    filesRoute: process.env.FILES_ROUTE || 'files'

}

module.exports = config