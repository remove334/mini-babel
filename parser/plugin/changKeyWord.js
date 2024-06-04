const acorn = require("acorn")

const Parser = acorn.Parser
const tt = acorn.tokTypes
const TokenType = acorn.TokenType

Parser.acorn.keywordTypes["chang"] = new TokenType("chang", { keyword: "chang" })

module.exports = function (Parser) {
    return class extends Parser {
        parse(program) {
            let newKeywords = "break case catch continue debugger default do else finally for function if return switch throw try var while with null true false instanceof typeof void delete new in this const class extends export import super";
            newKeywords += " chang";
            this.keywords = new RegExp("^(?:" + newKeywords.replace(/ /g, "|") + ")$")

            return super.parse(program)
        }

        parseStatement(context,topLevel,exports){
            
            let startType = this.type

            if(startType === Parser.acorn.keywordTypes["chang"]){
                let node = this.startNode()
               return this.parseChangStatement(node)
            }else{
                return super.parseStatement(context,topLevel,exports)
            }
        }

        parseChangStatement(){
            this.next()
            return this.finishNode({value:"chang"},"ChangStatement")
        }
    }
}