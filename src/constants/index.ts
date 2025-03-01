
// Define track and module interface types
export interface Module {
  id: string;
  title: string;
  description: string;
  content?: string;
}

export interface Track {
  id: string;
  title: string;
  description: string;
  modules: Module[];
}

// Mock data for tracks
export const tracks: Track[] = [
  {
    id: "frontend-development",
    title: "Frontend Development",
    description: "Learn modern frontend development techniques and technologies.",
    modules: [
      {
        id: "modern-html-css",
        title: "Modern HTML & CSS",
        description: "Learn the latest HTML5 and CSS3 features to build modern, responsive websites.",
        content: `
## Modern HTML & CSS

Welcome to the Modern HTML & CSS module! This comprehensive guide will take you through cutting-edge techniques in HTML5 and CSS3, preparing you to build responsive, accessible, and visually stunning websites.

### Introduction to HTML5 Semantic Elements

HTML5 introduced several new semantic elements that provide more meaning to your markup:

<pre>
<code class="code-html">&lt;header&gt;, &lt;footer&gt;, &lt;nav&gt;, &lt;section&gt;, &lt;article&gt;, &lt;aside&gt;, &lt;main&gt;, &lt;figure&gt;</code>
</pre>

Using these elements improves accessibility, SEO, and code readability. Here's how to structure a modern webpage:

<pre>
<code class="code-html">&lt;!DOCTYPE html&gt;
&lt;html lang="en"&gt;
&lt;head&gt;
  &lt;meta charset="UTF-8"&gt;
  &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
  &lt;title&gt;Modern Website&lt;/title&gt;
  &lt;link rel="stylesheet" href="styles.css"&gt;
&lt;/head&gt;
&lt;body&gt;
  &lt;header&gt;
    &lt;nav&gt;
      &lt;!-- Navigation links --&gt;
    &lt;/nav&gt;
  &lt;/header&gt;
  
  &lt;main&gt;
    &lt;section&gt;
      &lt;h2&gt;Main Content Section&lt;/h2&gt;
      &lt;article&gt;
        &lt;h3&gt;Article Title&lt;/h3&gt;
        &lt;p&gt;Content here...&lt;/p&gt;
      &lt;/article&gt;
    &lt;/section&gt;
    
    &lt;aside&gt;
      &lt;h3&gt;Related Information&lt;/h3&gt;
      &lt;!-- Sidebar content --&gt;
    &lt;/aside&gt;
  &lt;/main&gt;
  
  &lt;footer&gt;
    &lt;!-- Footer content --&gt;
  &lt;/footer&gt;
&lt;/body&gt;
&lt;/html&gt;</code>
</pre>

### CSS Modern Layout Techniques

Flexbox and Grid are powerful layout systems in modern CSS:

#### Flexbox Layout

Ideal for one-dimensional layouts (rows or columns):

<pre>
<code class="code-css">.container {
  <span class="code-property">display</span>: <span class="code-value">flex</span>;
  <span class="code-property">justify-content</span>: <span class="code-value">space-between</span>;
  <span class="code-property">align-items</span>: <span class="code-value">center</span>;
  <span class="code-property">flex-wrap</span>: <span class="code-value">wrap</span>;
}</code>
</pre>

#### CSS Grid Layout

Perfect for two-dimensional layouts:

<pre>
<code class="code-css">.grid-container {
  <span class="code-property">display</span>: <span class="code-value">grid</span>;
  <span class="code-property">grid-template-columns</span>: <span class="code-value">repeat(auto-fill, minmax(250px, 1fr))</span>;
  <span class="code-property">grid-gap</span>: <span class="code-value">1rem</span>;
}</code>
</pre>

### CSS Custom Properties (Variables)

Modern CSS supports variables for more maintainable code:

<pre>
<code class="code-css">:root {
  <span class="code-property">--primary-color</span>: <span class="code-value">#95FF66</span>;
  <span class="code-property">--secondary-color</span>: <span class="code-value">#333</span>;
  <span class="code-property">--spacing-unit</span>: <span class="code-value">1rem</span>;
}

.button {
  <span class="code-property">background-color</span>: <span class="code-value">var(--primary-color)</span>;
  <span class="code-property">padding</span>: <span class="code-value">var(--spacing-unit)</span>;
}</code>
</pre>

### Responsive Design Best Practices

Modern websites must work on all devices. Here are key techniques:

<pre>
<code class="code-css">/* Base styles for mobile */
.container {
  <span class="code-property">padding</span>: <span class="code-value">1rem</span>;
}

/* Tablet styles */
@media (min-width: 768px) {
  .container {
    <span class="code-property">padding</span>: <span class="code-value">2rem</span>;
  }
}

/* Desktop styles */
@media (min-width: 1024px) {
  .container {
    <span class="code-property">max-width</span>: <span class="code-value">1200px</span>;
    <span class="code-property">margin</span>: <span class="code-value">0 auto</span>;
  }
}</code>
</pre>

### Modern CSS Features

Recent CSS additions include:

- **CSS Animations & Transitions**
- **CSS Shapes & Masks**
- **CSS Custom Properties**
- **CSS Logical Properties**
- **Container Queries**

### Practice Exercise

Try creating a responsive card layout that uses flexbox for small screens and grid for larger screens.

### Further Resources

- [MDN Web Docs](https://developer.mozilla.org/)
- [CSS-Tricks](https://css-tricks.com/)
- [Smashing Magazine](https://www.smashingmagazine.com/)
        `
      },
      {
        id: "javascript-fundamentals",
        title: "JavaScript Fundamentals",
        description: "Master the core concepts of JavaScript including variables, functions, and DOM manipulation.",
      },
      {
        id: "react-basics",
        title: "React Basics",
        description: "Get started with React, learning components, props, state, and hooks.",
      },
      {
        id: "advanced-react",
        title: "Advanced React",
        description: "Dive deeper into React with context, performance optimization, and advanced hooks.",
      }
    ]
  },
  {
    id: "backend-development",
    title: "Backend Development",
    description: "Master server-side programming and API development.",
    modules: [
      {
        id: "nodejs-basics",
        title: "Node.js Basics",
        description: "Get started with Node.js for server-side JavaScript development.",
      },
      {
        id: "express-framework",
        title: "Express Framework",
        description: "Build robust APIs and web applications with Express.js.",
      },
      {
        id: "database-integration",
        title: "Database Integration",
        description: "Learn to integrate SQL and NoSQL databases with your backend applications.",
      }
    ]
  },
  {
    id: "full-stack",
    title: "Full Stack Development",
    description: "Combine frontend and backend skills to build complete applications.",
    modules: [
      {
        id: "mern-stack",
        title: "MERN Stack",
        description: "Build full-stack applications with MongoDB, Express, React, and Node.js.",
      },
      {
        id: "authentication",
        title: "Authentication & Authorization",
        description: "Implement secure user authentication and role-based authorization.",
      },
      {
        id: "deployment",
        title: "Deployment & DevOps",
        description: "Learn to deploy applications and implement CI/CD pipelines.",
      }
    ]
  }
];
