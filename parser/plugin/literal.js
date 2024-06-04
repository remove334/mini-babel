

module.exports = function (Parser) {
    return class extends Parser {
        parseLiteral(...arg) {
            const node = super.parseLiteral(...arg)
            switch (typeof node.value) {
                case "number":
                    node.type = "NumberLiteral2"
                    break
                case "string":
                    node.type = "StringLiteral";
                    break

            }
            return node
        }

    }
}