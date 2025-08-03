This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
git clone https://github.com/risalshahed/ostad-11.2-frontend-exc-batch-5
cd ostad-11.2-frontend-exc-batch-5
npm i
npm run dev
```

## Why Next JS?

### Problems in React

- Only &lt;div id=’root’&gt; in Production.
- The full JS will be downloaded later & the components will be rendered one by one.
- Even if there are 500/1000 pages or more, all will be loaded first & then the UI will be displayed!
- Example: Movie download from torrent vs youtube video.

#### In case of CSR,

- At first, html & css will be loaded & a blank html div with root “id” will be created i.e. a blank html page will be there.
- And JS will be kept loaded, all the pages will be loaded & then the UI will be displayed! But Search Engine bot won’t wait! Rather after watching the empty html div, the SE will go away without crawling.
- Also, the performance is poor, because the **First Contentful Paint** is delayed very much. Also, the **Time to Interactive** is delayed

#### In case of SSR,

- Not only the empty placeholder is displayed, also the full components (only the html, css part) is brought! But how? Because in SSR, the server will **simulate a browser** in the machine! Such as the development server when we run “npm run dev” via Node server.
- Hence, the **First Contentful Paint** is solved. But the JS issue **is not solved** i.e. the application is not interactive yet! So, the SSR is just a trick to display something to the user as the user is not capable of interacting with anything yet! That means, SSR is Good for SEO but **Performance is still Poor**.
- SSR will only display the HTML, CSS part only in the first render of the application simulating a browser to the server. And then, again it will load the whole JavaScript of the application on the server. Also, all the other pages will be rendered on the client side, only the first render of the application is SSR.

### React Server Component

- Only the Components with user interactions will be Client Components. All the others will be Server Components. And in case of Server Components, every Server Component will be rendered only on Server. Meanwhile in case of SSR, the components are re-rendered in the Client side!
