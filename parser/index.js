const acorn = require("acorn")


const syntaxPlugins = {
    "literal": require("./plugin/literal"),
    "changKeyWord": require("./plugin/changKeyWord")
}


const defaultOption = {
    plugins: []
}


function parse(code,option){
    const resolveOption = {...defaultOption,...option}

    const newParser  =resolveOption.plugins.reduce((parser,pluginName)=>{
        const plugin = syntaxPlugins[pluginName]
        return plugin ?parser.extend(plugin):parser

    },acorn.Parser)

    return newParser.parse(code,{
        location:true
    })

}

module.exports = {
    parse
}