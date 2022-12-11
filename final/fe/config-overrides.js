const path = require('path')
const paths = require('react-scripts/config/paths')
paths.appBuild = path.join(path.dirname(paths.appBuild),'../serve/static')