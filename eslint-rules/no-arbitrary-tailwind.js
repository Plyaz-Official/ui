export default {
  meta: {
    type: "problem",
    docs: {
      description: "Disallow Tailwind CSS arbitrary values like w-[30px]",
    },
    messages: {
      noArbitrary: "Avoid using arbitrary Tailwind values like '{{value}}'.",
    },
    schema: [],
  },

  create(context) {
    return {
      JSXAttribute(node) {
        if (node.name.name !== "className" || !node.value) return;

        if (node.value.type === "Literal") {
          const classNames = node.value.value.split(/\s+/);
          classNames.forEach((cls) => {
            if (/\[[^\]]+\]/.test(cls)) {
              context.report({
                node,
                messageId: "noArbitrary",
                data: { value: cls },
              });
            }
          });
        }
        if (
          node.value.type === "JSXExpressionContainer" &&
          node.value.expression.type === "TemplateLiteral"
        ) {
          const quasis = node.value.expression.quasis;
          quasis.forEach((part) => {
            const text = part.value.raw;
            const classNames = text.split(/\s+/);
            classNames.forEach((cls) => {
              if (/\[[^\]]+\]/.test(cls)) {
                context.report({
                  node,
                  messageId: "noArbitrary",
                  data: { value: cls },
                });
              }
            });
          });
        }
      },
    };
  },
};
