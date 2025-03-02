
// Define track and module interface types
export interface Module {
  id: string;
  title: string;
  description: string;
  content?: string;
  duration?: string;
  topics?: number;
  level?: 'beginner' | 'intermediate' | 'advanced';
  tags?: string[];
  popularity?: number;
  lastUpdated?: string;
  videoUrl?: string;
  instructor?: {
    name: string;
    avatar: string;
  };
}

export interface Track {
  id: string;
  title: string;
  description: string;
  modules: Module[];
  totalDuration?: string;
  skillLevel?: string;
  prerequisites?: string[];
  learningOutcomes?: string[];
  instructor?: {
    name: string;
    title: string;
    avatar?: string;
  };
}

// Mock data for tracks
export const tracks: Track[] = [
  {
    id: "frontend-development",
    title: "Frontend Development",
    description: "Learn modern frontend development techniques and technologies.",
    totalDuration: "32 hours",
    skillLevel: "Beginner to Advanced",
    prerequisites: ["Basic HTML knowledge", "Understanding of CSS syntax", "JavaScript fundamentals"],
    learningOutcomes: [
      "Build responsive websites using modern HTML5 and CSS3",
      "Create interactive web applications with React",
      "Implement state management solutions",
      "Optimize frontend performance"
    ],
    instructor: {
      name: "Sarah Johnson",
      title: "Senior Frontend Engineer",
      avatar: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=150&h=150&q=80"
    },
    modules: [
      {
        id: "modern-html-css",
        title: "Modern HTML & CSS",
        description: "Learn the latest HTML5 and CSS3 features to build modern, responsive websites.",
        duration: "8 hours",
        topics: 12,
        level: "beginner",
        tags: ["HTML5", "CSS3", "Responsive Design", "Flexbox", "Grid"],
        popularity: 98,
        lastUpdated: "2023-06-15",
        videoUrl: "https://www.youtube.com/embed/videoseries?list=PL4cUxeGkcC9ivBf_eKCPIAYXWzLlPAm6G",
        instructor: {
          name: "Sarah Johnson",
          avatar: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=150&h=150&q=80"
        },
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

### Advanced CSS Animation Techniques

Animations can significantly enhance user experience:

<pre>
<code class="code-css">/* Fade-in animation */
@keyframes fadeIn {
  <span class="code-property">from</span> { <span class="code-property">opacity</span>: <span class="code-value">0</span>; }
  <span class="code-property">to</span> { <span class="code-property">opacity</span>: <span class="code-value">1</span>; }
}

.fade-in {
  <span class="code-property">animation</span>: <span class="code-value">fadeIn 0.5s ease-in-out</span>;
}

/* Slide-in animation */
@keyframes slideIn {
  <span class="code-property">from</span> { 
    <span class="code-property">transform</span>: <span class="code-value">translateY(20px)</span>; 
    <span class="code-property">opacity</span>: <span class="code-value">0</span>;
  }
  <span class="code-property">to</span> { 
    <span class="code-property">transform</span>: <span class="code-value">translateY(0)</span>; 
    <span class="code-property">opacity</span>: <span class="code-value">1</span>;
  }
}

.slide-in {
  <span class="code-property">animation</span>: <span class="code-value">slideIn 0.5s ease-out</span>;
}</code>
</pre>

### CSS Transform and Transition Properties

Create smooth transitions between element states:

<pre>
<code class="code-css">.card {
  <span class="code-property">transition</span>: <span class="code-value">transform 0.3s ease, box-shadow 0.3s ease</span>;
}

.card:hover {
  <span class="code-property">transform</span>: <span class="code-value">translateY(-5px)</span>;
  <span class="code-property">box-shadow</span>: <span class="code-value">0 10px 20px rgba(0,0,0,0.1)</span>;
}</code>
</pre>

### CSS Backdrop Filter

Create frosted glass effects with backdrop-filter:

<pre>
<code class="code-css">.glass-panel {
  <span class="code-property">background</span>: <span class="code-value">rgba(255, 255, 255, 0.1)</span>;
  <span class="code-property">backdrop-filter</span>: <span class="code-value">blur(10px)</span>;
  <span class="code-property">border-radius</span>: <span class="code-value">10px</span>;
  <span class="code-property">border</span>: <span class="code-value">1px solid rgba(255, 255, 255, 0.2)</span>;
}</code>
</pre>

### CSS Grid Areas

Name grid areas for more intuitive layouts:

<pre>
<code class="code-css">.dashboard {
  <span class="code-property">display</span>: <span class="code-value">grid</span>;
  <span class="code-property">grid-template-areas</span>: <span class="code-value">
    "header header header"
    "sidebar main main"
    "sidebar footer footer"</span>;
  <span class="code-property">grid-template-rows</span>: <span class="code-value">auto 1fr auto</span>;
  <span class="code-property">grid-template-columns</span>: <span class="code-value">250px 1fr 1fr</span>;
}

.header { <span class="code-property">grid-area</span>: <span class="code-value">header</span>; }
.sidebar { <span class="code-property">grid-area</span>: <span class="code-value">sidebar</span>; }
.main { <span class="code-property">grid-area</span>: <span class="code-value">main</span>; }
.footer { <span class="code-property">grid-area</span>: <span class="code-value">footer</span>; }</code>
</pre>

### Practice Exercise

Try creating a responsive card layout that uses flexbox for small screens and grid for larger screens.

### Further Resources

- [MDN Web Docs](https://developer.mozilla.org/)
- [CSS-Tricks](https://css-tricks.com/)
- [Smashing Magazine](https://www.smashingmagazine.com/)

### Web Accessibility Basics

Making your websites accessible to all users is not just good practice, it's essential:

<pre>
<code class="code-html">&lt;img src="logo.png" alt="Company Logo"&gt;
&lt;button aria-label="Close dialog" aria-describedby="desc"&gt;×&lt;/button&gt;
&lt;div id="desc" class="sr-only"&gt;Closes the current dialog window&lt;/div&gt;</code>
</pre>

### CSS Custom Properties for Theming

Create theme-switchable websites with CSS variables:

<pre>
<code class="code-css">:root {
  <span class="code-property">--bg-color</span>: <span class="code-value">#ffffff</span>;
  <span class="code-property">--text-color</span>: <span class="code-value">#333333</span>;
}

.dark-theme {
  <span class="code-property">--bg-color</span>: <span class="code-value">#121212</span>;
  <span class="code-property">--text-color</span>: <span class="code-value">#f1f1f1</span>;
}

body {
  <span class="code-property">background-color</span>: <span class="code-value">var(--bg-color)</span>;
  <span class="code-property">color</span>: <span class="code-value">var(--text-color)</span>;
}</code>
</pre>
        `
      },
      {
        id: "javascript-fundamentals",
        title: "JavaScript Fundamentals",
        description: "Master the core concepts of JavaScript including variables, functions, and DOM manipulation.",
        duration: "10 hours",
        topics: 15,
        level: "beginner",
        tags: ["JavaScript", "ES6", "DOM", "Events", "Functions"],
        popularity: 95,
        lastUpdated: "2023-07-20",
        videoUrl: "https://www.youtube.com/embed/videoseries?list=PL4cUxeGkcC9haFPT7J25Q9GRB_ZkFrQAc",
        instructor: {
          name: "Michael Chen",
          avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=150&h=150&q=80"
        }
      },
      {
        id: "react-basics",
        title: "React Basics",
        description: "Get started with React, learning components, props, state, and hooks.",
        duration: "6 hours",
        topics: 8,
        level: "intermediate",
        tags: ["React", "Components", "Props", "State", "Hooks"],
        popularity: 97,
        lastUpdated: "2023-08-12",
        videoUrl: "https://www.youtube.com/embed/videoseries?list=PL4cUxeGkcC9gZD-Tvwfod2gaISzfRiP9d",
        instructor: {
          name: "Emma Rodriguez",
          avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150&q=80"
        }
      },
      {
        id: "advanced-react",
        title: "Advanced React",
        description: "Dive deeper into React with context, performance optimization, and advanced hooks.",
        duration: "8 hours",
        topics: 10,
        level: "advanced",
        tags: ["React", "Context API", "Redux", "Performance", "Testing"],
        popularity: 92,
        lastUpdated: "2023-09-05",
        videoUrl: "https://www.youtube.com/embed/videoseries?list=PL4cUxeGkcC9gjxLvV4VEkZ6H6H4yWuS58",
        instructor: {
          name: "David Park",
          avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80"
        }
      },
      {
        id: "css-animations",
        title: "CSS Animations & Effects",
        description: "Create stunning animations and visual effects using pure CSS techniques.",
        duration: "5 hours",
        topics: 7,
        level: "intermediate",
        tags: ["CSS", "Animations", "Transitions", "3D", "Keyframes"],
        popularity: 89,
        lastUpdated: "2023-10-15",
        videoUrl: "https://www.youtube.com/embed/videoseries?list=PL4cUxeGkcC9iGYgmEd2dm3zAKzyCGDtM5",
        instructor: {
          name: "Sarah Johnson",
          avatar: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=150&h=150&q=80"
        }
      },
      {
        id: "web-accessibility",
        title: "Web Accessibility",
        description: "Learn how to make your websites accessible to all users, including those with disabilities.",
        duration: "4 hours",
        topics: 6,
        level: "intermediate",
        tags: ["Accessibility", "ARIA", "Semantic HTML", "Screen Readers", "Keyboard Navigation"],
        popularity: 85,
        lastUpdated: "2023-11-08",
        videoUrl: "https://www.youtube.com/embed/videoseries?list=PLNYkxOF6rcICWx0C9LVWWVqvHlYJyqw7g",
        instructor: {
          name: "Jessica Taylor",
          avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&h=150&q=80"
        }
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
