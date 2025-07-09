// Adds a JS shim to load the TS config at runtime, enabling
// support for addons expecting tailwind.config.js.
const jiti = require('jiti')(__dirname);
module.exports = jiti('@plyaz/devtools/configs/tailwind.config').default;
