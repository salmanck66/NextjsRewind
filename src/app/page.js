// app/page.js
export default function Home() {
  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h1>Welcome to Our Next.js App!</h1>
      <p>We are using Next.js 13 and the App Directory.</p>
      <p>
        <a href="/about" style={{ fontSize: '20px' }}>Go to About Page</a>
      </p>
      <p>
        <a href="/contact" style={{ fontSize: '20px' }}>Go to Contact Page</a>
      </p>
    </div>
  );
}
