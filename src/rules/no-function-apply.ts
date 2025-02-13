import { Rule } from "eslint";
import { Node } from "estree";

export const rule: Rule.RuleModule = {
  create: context => {
    return {
      "CallExpression > MemberExpression > Identifier.property[name='apply']": (node: Node) => {
        context.report({
          message: "Don't use 'apply'",
          node,
        });
      },
    };
  },
};
