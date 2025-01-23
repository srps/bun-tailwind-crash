import index from './index.html';
import { serve } from 'bun';

const server = serve({

  static: {
      "/": index,
  },

  async fetch(req) {
    return new Response("Hello World");
  },
});

console.log(`Listening on http://localhost:${server.port} ...`);
