import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function Character() {
  const { data, error } = useSWR(`/api/random-character`, fetcher);

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <>
      <h1>
        {data.firstName} {data.lastName}
      </h1>
      <p>Twitter: {data.twitterName}</p>
      <p>geohash: {data.geohash}</p>
    </>
  );
}
