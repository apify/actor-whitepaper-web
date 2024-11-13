# Actor Framework Documentation Site

This repository contains the documentation website for the Actor Programming Model, a new concept for building serverless microapps called _Actors_. The site is built using Astro and provides comprehensive documentation about developing, sharing, and integrating Actors.

## Features

-   Built with Astro for optimal static site generation
-   Responsive design with Tailwind CSS
-   Interactive Table of Contents with progress tracking
-   Code syntax highlighting with copy functionality
-   Dark mode support
-   MDX content support with custom components

## Tech Stack

-   [Astro](https://astro.build) - Static Site Generator
-   [Tailwind CSS](https://tailwindcss.com) - Styling
-   [MDX](https://mdxjs.com) - Content
-   [TypeScript](https://www.typescriptlang.org) - Type Safety
-   [Vercel](https://vercel.com) - Deployment

## Installation

1. Clone the repository:

```bash
git clone https://github.com/vancura/developer-actor.git
cd developer-actor
```

2. Install dependencies:

```bash
yarn install
```

3. Start the development server:

```bash
yarn dev
```

## Available Scripts

-   `yarn dev` - Start development server with host access
-   `yarn build` - Build for production
-   `yarn preview` - Preview production build
-   `yarn clean` - Clean dist and node_modules directories
-   `yarn format` - Format code with Prettier

## Project Structure

```
src/
   ├── components/ # Reusable UI components
   ├── config/ # Configuration files
   ├── content/ # MDX content files
   ├── layouts/ # Page layouts
   ├── pages/ # Astro pages
   ├── styles/ # Global styles
   ├── types/ # TypeScript types
   └── utils/ # Utility functions
```

## Styling

The project uses Tailwind CSS for styling with custom configurations for:

-   Typography
-   Colors
-   Responsive design
-   Dark mode

Custom styles for MDX content can be found in [src/styles/mdx-content.css](src/styles/mdx-content.css).

## SEO

The site implements comprehensive SEO practices including:

-   Meta tags
-   Canonical URLs
-   OpenGraph data
-   Structured data

SEO configuration can be found in the BaseHead component: [src/components/BaseHead.astro](src/components/BaseHead.astro).

## Performance

The site implements various performance optimizations:

-   Image optimization with Sharp
-   Asset caching through Vercel
-   CSS and JavaScript minification
-   Responsive images with multiple formats

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Authors

-   [Václav Vančura](https://github.com/vancura) - Designer, Developer
-   [Adam Kliment](https://github.com/netmilk) - Owner

## Acknowledgments

-   [Apify Team](https://apify.com) for creating the Actor Programming Model
-   [Astro](https://astro.build) for the amazing static site generator
-   [Tailwind CSS](https://tailwindcss.com) for the utility-first CSS framework
