const {createMacro} = require("babel-plugin-macros");

const cx = createMacro(({references: {default: paths}, babel: {types: t}}) => {
  paths.forEach(fnIdPath => {
    const path = fnIdPath.parentPath;
    const arr = t.arrayExpression(path.node.arguments);
    const filtered = t.callExpression(t.memberExpression(arr, t.identifier("filter")), [
      t.identifier("Boolean"),
    ]);
    const joined = t.callExpression(t.memberExpression(filtered, t.identifier("join")), [
      t.stringLiteral(" "),
    ]);
    path.replaceWith(joined);
  });
});

module.exports = cx;
