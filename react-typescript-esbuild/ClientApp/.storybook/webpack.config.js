const path = require("path")

// https://stackoverflow.com/questions/60634295/resolve-absolute-alias-imports-in-components-with-storybook
module.exports = ({ config }) => {
    config.resolve.modules = [
        path.resolve(__dirname, "..", "src"),
        "node_modules",
    ]

    return config
}