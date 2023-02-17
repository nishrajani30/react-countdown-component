
## Create ReactJS Shareable Components using ViteJs & Typescript

![](https://cdn-images-1.medium.com/max/2000/1*JC7Q3Q96QQ7r1-RuYVdg5A.gif)

In this tutorial, we are going to create a simple ReactJs shareable component **Countdown** using ViteJs.

[**ReactJS](https://reactjs.org/) shareable components** are reusable UI building blocks that can be shared and used across multiple projects. These components are typically designed and developed to be generic, meaning they can be used in a variety of contexts and scenarios.

Shareable components are usually packaged as modules that can be imported into a project and used as if they were a native part of the project. There are several benefits to creating and using shareable components:

1. **Consistent design**: When shareable components are used across different projects, it ensures that the design and user experience are consistent, which can be particularly useful for companies that have multiple products or services.

2. **Faster development**: By using pre-built components, developers can save time on building and testing components from scratch. This can speed up the development process, particularly for smaller projects with a limited budget.

3. **Better maintenance**: Shareable components can be maintained and updated separately from the main project, which means that any bug fixes or improvements to the components can be implemented without having to modify the main project.

4. **Reusability**: Shareable components can be reused across multiple projects, which can be particularly useful for companies that have multiple products or services.

There are several ways to create and share ReactJS components, including using existing component libraries such as Material UI, Ant Design, or Bootstrap, creating your own components and packaging them as a library using tools like Rollup or webpack, or using platforms like Bit, Storybook, or Styleguidist to manage and share components.

When creating shareable components, it’s important to keep in mind that they should be designed and developed to be as generic and flexible as possible. This will ensure that they can be used in a variety of contexts and scenarios, and make them more valuable and widely adopted within the developer community.

[ViteJS](https://vitejs.dev/) (pronounced “veet”) is a build tool and web development server for modern web applications. It is designed to be fast, flexible, and modular, allowing developers to build high-performance web applications with ease.

ViteJS is based on the latest web standards, including ES modules, dynamic imports, and native ESM loading, making it ideal for building applications with modern JavaScript frameworks like Vue.js, React, and Svelte. It supports hot module replacement (HMR), which means that changes to the code are instantly updated in the browser without the need for a full page reload.

One of the key features of ViteJS is its fast development server, which leverages native ES modules to enable fast startup times and instant reloading. This helps developers to focus on building their application without the delay of waiting for the server to restart every time they make changes.

ViteJS also includes a powerful build tool that can generate optimized production builds for deployment. It can be configured to support a wide range of use cases, including server-side rendering, multi-page applications, and static site generation.

## Getting Started:

Creating shareable TypeScript libraries using Vite is a great way to share your code with other developers and create reusable components that can be integrated into a variety of projects. Here are the steps you can follow:

1. Initialize a new project

First, create a new directory for your project and navigate into it:

```bash
  mkdir react-countdown-component && cd react-countdown-component
```

Then, initialize a new npm project using the following command:

```bash
 npm init -y
```

2. Install dependencies

Next, you’ll need to install the necessary dependencies for your project. Run the following command:

```bash
    npm install react react-dom vite typescript @types/react @types/react-dom -D
```

This installs React, React DOM, ViteJS, TypeScript, and the TypeScript typings for React and React DOM.

3. Create your component

Now you can create your shareable component in a new file, such as Countdown.tsx. Here's an example of a simple countdown component:

```typescript

    import { useState, useEffect } from 'react';
    
    interface Props {
      duration: number;
    }
    
    export const Countdown = ({ duration }: Props) => {
      const [countdown, setCountdown] = useState(duration);
    
      useEffect(() => {
        const interval = setInterval(() => {
          setCountdown((countdown) => countdown - 1);
        }, 1000);
    
        return () => clearInterval(interval);
      }, []);
    
      return <div>{countdown}</div>;
    };

```

This component takes a duration prop and displays a countdown from that value.

4. Configure Vite

Next, you’ll need to configure Vite to build your component. Create a vite.config.ts file with the following contents:

```typescript

    import { defineConfig } from 'vite';
    import react from '@vitejs/plugin-react';
    
    export default defineConfig({
      plugins: [react()],
      build: {
        lib: {
          entry: 'Countdown.tsx',
          name: 'Countdown',
          fileName: (format) => `Countdown.${format}.js`,
        },
        rollupOptions: {
          external: ['react'],
          output: {
            globals: {
              react: 'React',
            },
          },
        },
      },
    });
```

This configuration tells Vite to build your Countdown.tsx file into a library with the name Countdown and the format umd.

5. Build the component

To build the component, run the following command in your terminal:

```bash
    npm run build
```

This will create a dist folder with your built component.

6. Update package:
   This package.json file specifies the name, version, description, main file, module file, and types file for the package. It also includes keywords, author, and license information.

```json
{
  "name": "react-countdown-component-guide",
  "version": "1.0.0",
  "description": "A simple ReactJS countdown component",
  "main": "dist/Countdown.umd.js",
  "module": "dist/Countdown.es.js",
  "types": "dist/Countdown.d.ts",
  "keywords": [
    "react",
    "component",
    "countdown"
  ],
  "author": "Your Name <your email address>",
  "license": "MIT",
  "peerDependencies": {
    "@types/react": "^18.0.28",
    "@types/react-dom": "^18.0.11"
  },
  "devDependencies": {
    "@types/react": "^18.0.28",
    "@types/react-dom": "^18.0.11",
    "@vitejs/plugin-react": "^3.1.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "typescript": "^4.9.5",
    "vite": "^4.1.1"
  },
  "scripts": {
    "build": "vite build"
  }
}
```


This package.json file specifies the name, version, description, main file, module file, and types file for the package. It also includes keywords, author, and license information.

The peerDependencies field specifies that this package requires React and React DOM as peer dependencies, meaning that they must be installed separately by the user of the package.

The devDependencies field includes the necessary development dependencies for building the package, including React, React DOM, ViteJS, and TypeScript.

Finally, the scripts field includes a build script that runs the Vite build command to build the package.

6. Publish the package

To publish your package to npm, you’ll need to create an account and log in using the npm CLI by running npm login.

Once you’re logged in, you can publish your package by running the following command in your terminal:

```bash
    npm publish
```

This will upload your package to the registry, where it can be installed by others using npm install.

7. Use the component

To use the published component in another project, you can install it using the following command:

```bash
    npm install react-countdown-component
```

Then, you can import and use the component in your code like this:

```javascript
    import { Countdown } from 'react-countdown-component';
    
    export default function App() {
      return <Countdown duration={10} />;
    }
```

## Conclusion:

In conclusion, we went through the process of creating a shareable ReactJS countdown component using TypeScript and ViteJS. We learned how to set up the project, create the component, and publish it to NPM so that other developers can use it in their projects. With this knowledge, you can create your own shareable ReactJS components and publish them to NPM for others to use. This can be a great way to contribute to the open-source community and help other developers by providing them with useful and reusable code.
