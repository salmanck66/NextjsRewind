// app/api/posts/route.js

export async function GET() {
    const posts = [
      { id: 1, title: 'First Blog Post', body: 'This is the first post' },
      { id: 2, title: 'Second Blog Post', body: 'This is the second post' },
    ];
  
    return new Response(JSON.stringify(posts), {
      headers: { 'Content-Type': 'application/json' },
    });
  }
  