export const dynamic = 'force-dynamic';

export default async function Home() {
  const time = await fetchTime();
  return (
    <main>
      <h1>Dynamic Page</h1>
      <p>
        Data last fetched: <tt>{time}</tt>
      </p>
    </main>
  );
}

async function fetchTime() {
  const response = await fetch("http://worldtimeapi.org/api/timezone/UTC");
  if (!response.ok) {
    throw new Error(`Request failed: ${response.status}`);
  }
  const { datetime } = await response.json();
  console.log("[fetchTime] returning:", datetime);
  return datetime;
}
