export default function (plop) {
  plop.setGenerator("story", {
    description: "Generate a Storybook story for an existing component",
    prompts: [
      {
        type: "input",
        name: "path",
        message: "Path to the component (relative to src/):",
      },
      {
        type: "input",
        name: "dirName",
        message: "Component directory name (e.g., Button):",
      },
      {
        type: "input",
        name: "name",
        message: "Component name (PascalCase):",
      },
    ],
    actions: [
      {
        type: "add",
        path: "src/{{path}}/{{pascalCase dirName}}/{{pascalCase name}}.stories.tsx",
        templateFile: "plop-templates/Component.stories.tsx.hbs",
      },
    ],
  });
}
