// app/about/page.js
export default function About() {
    return (
      <div style={{ textAlign: 'center', padding: '50px' }}>
        <h1>About Us</h1>
        <p>We are building an awesome Next.js app to learn the framework.</p>
        <p>
          <a href="/" style={{ fontSize: '20px' }}>Back to Home</a>
        </p>
        <p>
          <a href="/contact" style={{ fontSize: '20px' }}>Go to Contact Page</a>
        </p>
      </div>
    );
  }
  