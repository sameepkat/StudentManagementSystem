import { useQuery } from "@tanstack/react-query";

interface DataType {
  server: number;
  database: string;
}

function fetchStatus(): Promise<DataType> {
  return fetch("http://localhost:8000/test").then((res) => {
    if (!res.ok) {
      throw new Error("Error connecting to server");
    }
    return res.json();
  });
}

function TestComponent(): JSX.Element {
  const { data, isLoading, isError, error } = useQuery<DataType>({
    queryKey: ["server_status"],
    queryFn: fetchStatus,
  });
  if (isLoading) return <h1>Loading...</h1>;
  if (isError) {
    return (
      <div>
        <h1>Error connecting to the server</h1>
        <p>Error: {error.message}</p>
      </div>
    );
  }
  if (!data) return <h1>No data found</h1>;
  return (
    <>
      <div className="flex justify-center align-middle flex-col">
        <h3
          className={`bold text-3xl ${
            data.server === 200 ? "bg-green-500" : "bg-red-500"
          }`}
        >
          Server: {data.server}
        </h3>
        <h3
          className={`bold text-3xl ${
            data.database === "true" ? "bg-green-500" : "bg-red-500"
          }`}
        >
          Database: {data.database}
        </h3>
      </div>
    </>
  );
}
export default TestComponent;
