# Backend APP Layer

Acting as the core backend, this layer is directly accessed by the Next.js application's BFF. The BFF receives client requests and relies on this layer for processing them.

Backend APP Layer manages database interactions, aggregates necessary data, and provides this data to the user through the BFF as a reliable source of information.

The Backend layer is built using Feature-Sliced Design (FSD).

## Useful Links

1) [How to use Next.js as a backend for your frontend](https://nextjs.org/docs/app/guides/backend-for-frontend);
2) [The Problem With NextJS. A backend for frontend - not a backend | by Matt Burgess](https://mattburgess.medium.com/the-problem-with-nextjs-e44fd4c99d20).
