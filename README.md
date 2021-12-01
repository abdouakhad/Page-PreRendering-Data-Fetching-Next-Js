This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

# This is where I record section that I have finished

### Lecture 87

### Lecture 88

getStaticProps() is a function that returns an object with the props key and then executes the component function.
It runs on the client side

### lecture 89

Working with fs fails when working on the client side
nextjs prerenders the data right from the start

### lecture 91

getStatic is suitable when the data does not change to often because we would have to rebuild and redeploy all
the times

To solve that we can can use Incrementatal static generation.This is how it works:
first: Pre generate the page
second:Regenerate it on every request, at most every x second.
third: we solve that using revalidate

### lecture 93

Keep in mind that the getStaticProps only works in pages not in anyy other components

# lecture 94

If we want to get the id of something in getStaticProps, we would have to use [context and params]
The reason why we use params instead of router is because params is used for getStatic props
which runs onin the server(help prerender pages)
