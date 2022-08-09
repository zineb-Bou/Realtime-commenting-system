# Realtime commenting system

### Design preview

![Design preview](/public/Preview.png)

## What I learned

The features I wanted to implement in this project are

- Easy for the end user to comment.
- Upvote.
- Real-Time: new comments, Upvote or comment edit shown without reloading the page.

When searching for projects to add to my portfolio, I needed something I'd enjoy creating. Plus, it needed to be challenging enough to handle user authentication and database storage. After brainstorming, the idea for real-time commenting system came to me.

In this project I hooked Firebase on the server-side and then using API route to fetch the comments and display them. For fetching data I am using here the SWR library, it returns the data from cache (stale), then send the fetch request (revalidate), and finally come with the up-to-date data. this strategy helped me to keep comment interaction at real-time. I didn't use any state management tool here, react hooks were enough to implement the logic.

## Continued development

[.........]

## Built Using

- [Next.js](https://nextjs.org/)
- [Vercel](https://vercel.com)
- [TailwindCSS](https://tailwindui.com/)
- [Firebase](https://firebase.com)
