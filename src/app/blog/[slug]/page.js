// app/blog/[slug]/page.js

const blogPosts = [
    { slug: 'nextjs', title: 'Learning Next.js', content: 'Next.js is a React framework.' },
    { slug: 'react', title: 'Learning React', content: 'React is a popular JavaScript library.' },
  ];
  
  // Fetch data based on the slug parameter
  async function fetchPostData(slug) {
    // Simulating fetching blog data. Replace with actual API call or database query.
    const post = blogPosts.find(post => post.slug === slug);
    return post;
  }
  
  export default async function BlogPost({ params }) {
    const { slug } = params; // Get the dynamic slug from URL params
  
    // Fetch post data for the current slug
    const post = await fetchPostData(slug);
  
    if (!post) {
      return <h1>Post Not Found</h1>;
    }
  
    return (
      <div style={{ textAlign: 'center', padding: '50px' }}>
        <h1>{post.title}</h1>
        <p>{post.content}</p>
        <p>
          <a href="/" style={{ fontSize: '20px' }}>Back to Home</a>
        </p>
        <p>
          <a href="/about" style={{ fontSize: '20px' }}>Go to About Page</a>
        </p>
      </div>
    );
  }
  