
[![Deploy with Vercel](https://vercel.com/button)][vercel-deploy]![Untitled design (4)]

(https://github.com/mgary5979/blog-nextjs-sanity/assets/111018323/97d36212-dde8-438a-a334-08db14b45b5d)


## Project Overview


### Important files and folders

| File(s)                                     | Description                                              |
| ------------------------------------------- | -------------------------------------------------------- |
| `sanity.config.ts`                          |  Config file for Sanity Studio                           |
| `sanity.cli.ts`                             |  Config file for Sanity CLI                              |
| `/pages/studio/[[...index]].tsx`            |  Where Sanity Studio is mounted                          |
| `/pages/api/revalidate.ts`                  |  Serverless route for triggering ISR                     |
| `/pages/api/preview.ts`                     |  Serverless route for triggering Preview mode            |
| `/schemas`                                  |  Where Sanity Studio gets its content types from         |
| `/plugins`                                  |  Where the advanced Sanity Studio customization is setup |
| `/lib/sanity.api.ts`,`/lib/sanity.image.ts` | Configuration for the Sanity Content Lake client         |
| `/lib/sanity.preview.ts`                    | Configuration for the live Preview Mode                  |

## Configuration

### Step 1. Set up the environment

Use the Deploy Button below. It will let you deploy the starter using [Vercel](https://vercel.com?utm_source=github&utm_medium=readme&utm_campaign=next-sanity-example) as well as connect it to your Sanity Content Lake using [the Sanity Vercel Integration][integration].

[![Deploy with Vercel](https://vercel.com/button)][vercel-deploy]

### Step 2. Set up the project locally

[Clone the repository](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository) that was created for you on your GitHub account. Once cloned, run the following command from the project's root directory:

```bash
npx vercel link
```

Download the environment variables needed to connect Next.js and the Studio to your Sanity project:

```bash
npx vercel env pull
```

### Step 3. Run Next.js locally in development mode

```bash
npm install && npm run dev
```

When you run this development server, the changes you make in your frontend and studio configuration will be applied live using hot reloading.

Your blog should be up and running on [http://localhost:3000][localhost-3000]! You can create and edit content on [http://localhost:3000/studio][localhost-3000-studio].

### Step 4. Deploy to production

To deploy your changes to production you use `git`:

```bash
git add .
git commit
git push
```

Alternatively, you can deploy without a `git` hosting provider using the Vercel CLI:

```bash
npx vercel --prod
```


[vercel-deploy]: https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fsanity-io%2Fnextjs-blog-cms-sanity-v3&repository-name=blog-nextjs-sanity&project-name=blog-nextjs-sanity&demo-title=Blog%20with%20Built-in%20Content%20Editing&demo-description=A%20Sanity-powered%20blog%20with%20built-in%20content%20editing%20%26%20instant%20previews&demo-url=https%3A%2F%2Fnextjs-blog.sanity.build%2F%3Futm_source%3Dvercel%26utm_medium%3Dreferral&demo-image=https%3A%2F%2Fuser-images.githubusercontent.com%2F81981%2F197501516-c7c8092d-0305-4abe-afb7-1e896ef7b90a.png&integration-ids=oac_hb2LITYajhRQ0i4QznmKH7gx&external-id=nextjs;template=nextjs-blog-cms-sanity-v3
[integration]: https://www.sanity.io/docs/vercel-integration?utm_source=github.com&utm_medium=referral&utm_campaign=nextjs-v3vercelstarter
[`.env.local.example`]: .env.local.example
[nextjs]: https://github.com/vercel/next.js
[sanity-create]: https://www.sanity.io/get-started/create-project?utm_source=github.com&utm_medium=referral&utm_campaign=nextjs-v3vercelstarter
[sanity-deployment]: https://www.sanity.io/docs/deployment?utm_source=github.com&utm_medium=referral&utm_campaign=nextjs-v3vercelstarter
[sanity-homepage]: https://www.sanity.io?utm_source=github.com&utm_medium=referral&utm_campaign=nextjs-v3vercelstarter
[sanity-community]: https://slack.sanity.io/
[sanity-schema-types]: https://www.sanity.io/docs/schema-types?utm_source=github.com&utm_medium=referral&utm_campaign=nextjs-v3vercelstarter
[sanity-github]: https://github.com/sanity-io/sanity/discussions
[sanity-groq]: https://www.sanity.io/docs/groq?utm_source=github.com&utm_medium=referral&utm_campaign=nextjs-v3vercelstarter
[sanity-content-modelling]: https://www.sanity.io/docs/content-modelling?utm_source=github.com&utm_medium=referral&utm_campaign=nextjs-v3vercelstarter
[sanity-webhooks]: https://www.sanity.io/docs/webhooks?utm_source=github.com&utm_medium=referral&utm_campaign=nextjs-v3vercelstarter
[localhost-3000]: http://localhost:3000
[localhost-3000-studio]: http://localhost:3000/studio
[vercel-isr]: https://nextjs.org/blog/next-12-1#on-demand-incremental-static-regeneration-beta
[vercel]: https://vercel.com
[vercel-github]: https://github.com/vercel/next.js/discussions
[app-dir]: https://beta.nextjs.org/docs/routing/fundamentals#the-app-directory
