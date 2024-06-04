const parser = require("./index")

const sourceCode = `const c = 1;
const d = 2;
const e = 4;
break
chang

function add(a, b) {
    const tmp = 1;
    return a + b;
}

add(c, d);
`;

const keyword2 = `chang`

const ast = parser.parse(sourceCode, {
    plugins: ['literal', 'changKeyWord']
});
debugger