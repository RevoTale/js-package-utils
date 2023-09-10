import { Linter} from "eslint";

const config: Linter.Config = {
    "parserOptions": {
        "ecmaVersion": 2019,
        "sourceType": "module",
        "ecmaFeatures": {
            "modules": true,
            "jsx": true
        },
    },

    "settings": {
        "react": {
            "version": "detect"
        }
    },
    "extends": [
        "plugin:@typescript-eslint/recommended",
        "plugin:react/recommended"
    ],

    "overrides": [
        {
            "files": ["*.tsx"],
            "excludedFiles": "*.test.tsx",
        }
    ],
    "plugins": ["react-hooks"],
    "rules": {
        "@typescript-eslint/ban-types": [
            "error",
            {
                "types": {
                    "JSX.Element": "`FunctionComponent` declaration should be used instead of return type `JSX.Element`"
                },
                "extendDefaults": true
            }
        ],
        "react-hooks/rules-of-hooks": "error",
        "react-hooks/exhaustive-deps": "warn",
        "react/react-in-jsx-scope": "off",
        "react/prop-types": "off",
        "react/no-children-prop": "off",
        "react/jsx-sort-props": "error",
        "react/hook-use-state": "error",
        "react/no-string-refs": "error",
        "react/no-this-in-sfc": "error",
        "react/self-closing-comp": "error",
        "react/button-has-type": "error",
        "react/display-name": "error",
        "react/function-component-definition": [
            2,
            {
                "namedComponents": "arrow-function",
                "unnamedComponents": "arrow-function"
            }
        ],
        "react/no-unknown-property": "error",
        "react/no-unused-prop-types": "error",
        "react/jsx-no-constructed-context-values": "error",
        "react/jsx-curly-brace-presence": "error",
        "react/jsx-no-target-blank": "error",
        "react/destructuring-assignment": ["error", "always"],
        "prefer-spread": "error",
        "react/jsx-props-no-spreading": "off",
        "react/no-multi-comp": [
            "error",
            {
                "ignoreStateless": true
            }
        ]
    }

}
export default config
