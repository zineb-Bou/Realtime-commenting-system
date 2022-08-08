# Realtime commenting system

Adding commentend it is really difficult for static sites, this is an easy way to add commenting section to a static
people being able.
this probably would an eay saas solution that your cann static comments to your site.

main concept that's being used here, is taking the advantage from the ISR(Incremental satatic regenaration ) provided by nextjs
which periodically regenarates the static page in the packground. This

one of the things that we take into a consideration before building any commenting system in the spam comment, to enforce no spam people here will login with there github or gmail. so there is a name put there plus, in the back side you will have moderation
so we can remove comments that are not necessar.

### Design preview

![Design preview](/public/Preview.png)

## What I learned

The features I wanted to implement in this project are

- Easy for the end user to comment.
- Upvote.
- Real-Time: new comments, upvote or comment edit shown without reloading the page.

When searching for projects to add to my portfolio, I needed something I'd enjoy creating. Plus, it needed to be challenging enough to handle user authentication and database storage. After brainstorming on a few thoughts, the idea for real-time commenting system came to me.

In this project I hooked Firebase on the server-side and then using API route to fetch the comments and display them. For fetching data I am using here the SWR library, it returns the data from cache (stale), then send the fetch request (revalidate), and finally come with the up-to-date data. this strategy helped me to keep comment interaction at real time.
In this project I am not using any management sys, react hook were enough to implement the logic.

## Built Using

- [Next.js](https://nextjs.org/)
- [Vercel](https://vercel.com)
- [TailwindCSS](https://tailwindui.com/)
- [Firebase](https://firebase.com)
