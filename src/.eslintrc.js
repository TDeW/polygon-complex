function isTruthy(value) {
  if (!value) return false;
  return ['1', 'true'].indexOf(value.toLowerCase()) >= 0;
}

// Warnings are errors in CI
var ERROR = 'error';
var WARNING = isTruthy(process.env.CI) ? ERROR : 'warn';



module.exports = {
  "parser": "babel-eslint",
  "parserOptions": {
    "sourceType": "module",
    "ecmaFeatures": { "experimentalObjectRestSpread": true }
  },
  "env": {
    "node": true,
    "es6": true,
    "jest": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:import/errors",
    "plugin:import/warnings"
  ],
  "rules": {
    "array-bracket-spacing": [WARNING, "never"],
    "arrow-body-style": [WARNING, "as-needed"],
    "arrow-parens": [WARNING, "as-needed"],
    "arrow-spacing": WARNING,
    "block-spacing": WARNING,
    "brace-style": [WARNING, "1tbs", { "allowSingleLine": true }],
    "comma-dangle": [WARNING, {
        "arrays": "always-multiline",
        "objects": "always-multiline",
        "imports": "never",
        "exports": "never",
        "functions": "never"
    }],
    "comma-spacing": [WARNING, { "before": false, "after": true }],
    "comma-style": [WARNING, "last"],
    "computed-property-spacing": [WARNING, "never"],
    "dot-location": [WARNING, "property"],
    "dot-notation": WARNING,
    "eol-last": [WARNING, "always"],
    "eqeqeq": [WARNING, "smart"],
    "func-call-spacing": [WARNING, "never"],
    "indent": [WARNING, 2, { "flatTernaryExpressions": true }],
    "jsx-quotes": [WARNING, "prefer-double"],
    "key-spacing": [WARNING, { "beforeColon": false, "afterColon": true }],
    "keyword-spacing": [WARNING, { "before": true }],
    "linebreak-style": [WARNING, "unix"],
    "new-parens": WARNING,
    "no-console": 0,
    "no-else-return": WARNING,
    "no-extra-bind": WARNING,
    "no-extra-label": WARNING,
    "no-extra-parens": [WARNING, "all", { "ignoreJSX": "multi-line" }],
    "no-floating-decimal": WARNING,
    "no-implicit-coercion": WARNING,
    "no-lonely-if": WARNING,
    "no-multi-spaces": WARNING,
    "no-multiple-empty-lines": [WARNING, { "max": 4, "maxBOF": 10, "maxEOF": 5 }],
    "no-trailing-spaces": WARNING,
    "no-undef-init": WARNING,
    "no-unneeded-ternary": WARNING,
    "no-unused-labels": WARNING,
    "no-useless-computed-key": WARNING,
    "no-useless-rename": WARNING,
    "no-var": WARNING,
    "no-whitespace-before-property": WARNING,
    "nonblock-statement-body-position": [WARNING, "beside"],
    "object-curly-newline": [WARNING, { "multiline": true }],
    "object-curly-spacing": [WARNING, "always"],
    "object-property-newline": [WARNING, { "allowMultiplePropertiesPerLine": true }],
    "object-shorthand": [WARNING, "always"],
    "operator-linebreak": [WARNING, "after"],
    "prefer-const": WARNING,
    "prefer-template": WARNING,
    "quote-props": [WARNING, "as-needed"],
    "quotes": [WARNING, "single"],
    "rest-spread-spacing": [WARNING, "never"],
    "semi-spacing": [WARNING, {"before": false, "after": true}],
    "semi-style": [WARNING, "last"],
    "semi": [WARNING, "always"],
    "space-before-blocks": WARNING,
    "space-before-function-paren": WARNING,
    "space-in-parens": [WARNING, "never"],
    "space-infix-ops": WARNING,
    "space-unary-ops": WARNING,
    "strict": [WARNING, "never"],
    "switch-colon-spacing": WARNING,
    "template-curly-spacing": WARNING,
    "template-tag-spacing": WARNING,
    "wrap-iife": [WARNING, "inside"],
    "yoda": WARNING
  }
}
