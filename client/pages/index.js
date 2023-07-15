import { getServerData } from "./api";

export async function getServerSideProps() {
  const data = await getServerData();
  return {
    props: {
      data,
    },
  };
}

export default function Home({ data }) {
  const sendForm = async (event) => {
    event.preventDefault();
    const response = await fetch("/api", {
      method: "POST",
      body: JSON.stringify({ message: event.target.message.value }),
    });
    const data = await response.json();
    console.log(data);
  };

  return (
    <div>
      <h1>Server-side Rendered Data</h1>
      <p>{data?.message}</p>
    </div>
  );
}
