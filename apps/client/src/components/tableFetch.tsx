import { useQuery } from "@tanstack/react-query";

function fetchStudentInfo(): Promise<StudentInfoInterface[]> {
  return fetch("http://localhost:8000/student/studentList").then((res) => {
    if (!res.ok) {
      throw new Error("Network response was not ok");
    }
    return res.json();
  });
}

interface StudentInfoInterface {
  RollNo: number;
  Name: string;
  ExamRollNo: number;
  PuRegNo: string;
  Email?: string;
  Address?: string;
  PhNo?: string;
  Sex: "M" | "F";
}

function TableFetch() {
  const { data, isLoading, isError, error } = useQuery<StudentInfoInterface[]>({
    queryKey: ["student_info"],
    queryFn: fetchStudentInfo,
  });

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {error.message}</div>;
  if (!data) return <div>Data not found</div>;
  return (
    <ul>
      {data.map((user) => (
        <li key={user.RollNo}>{user.Name}</li>
      ))}
    </ul>
  );
}

export default TableFetch;
