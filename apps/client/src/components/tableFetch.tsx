import { useQuery } from "@tanstack/react-query";

function fetchStudentInfo(fetchType: string): Promise<StudentInfoInterface[]> {
  return fetch(`http://localhost:8000/student/${fetchType}`).then((res) => {
    if (!res.ok) {
      throw new Error("Network response was not ok");
    }
    return res.json();
  });
}

function fetchInternalResult(
  fetchType: string
): Promise<InternalResultInterface[]> {
  return fetch(`http://localhost:8000/result/first/${fetchType}`).then(
    (res) => {
      if (!res.ok) {
        throw new Error("Network response was not ok");
      }
      return res.json();
    }
  );
}

function fetchFinalResult(fetchType: string): Promise<StudentInfoInterface[]> {
  return fetch(`http://localhost:8000/result/first/${fetchType}`).then(
    (res) => {
      if (!res.ok) {
        throw new Error("Network response was not ok");
      }
      return res.json();
    }
  );
}

interface TableFetchProps {
  fetchType: "studentList" | "internal" | "final";
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

interface InternalResultInterface {
  RollNo: number;
  ExamRollNo: number;
  Name: string;
  PuRegNo: string;
  Basic_Eng_Drawing: number;
  Calculus_I: number;
  Digital_Logic: number;
  Discrete_Struct: number;
  PST: number;
  Prog_C: number;
}

interface FinalResultInterface {
  RollNo: number;
  ExamRollNo: number;
  Name: string;
  Basic_Eng_Drawing: number;
  Calculus_I: number;
  Digital_Logic: number;
  Discrete_Struct: number;
  PST: number;
  Prog_C: number;
  SGPA: number;
}
function TableFetch({ fetchType }: TableFetchProps) {
  let queryKey: string[];
  let queryFn: () => Promise<
    StudentInfoInterface[] | InternalResultInterface[] | FinalResultInterface[]
  >;

  switch (fetchType) {
    case "internal":
      queryKey = ["internal_result", fetchType];
      queryFn = () => fetchInternalResult(fetchType);
      break;
    case "final":
      queryKey = ["final_result", fetchType];
      queryFn = () => fetchFinalResult(fetchType);
      break;
    default:
      queryKey = ["student_info", fetchType];
      queryFn = () => fetchStudentInfo(fetchType);
  }

  const { data, isLoading, isError, error } = useQuery<
    StudentInfoInterface[] | InternalResultInterface[] | FinalResultInterface[]
  >({
    queryKey,
    queryFn,
  });

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {error.message}</div>;
  if (!data) return <div>Data not found</div>;
  return (
    <div>
      <table className="border-1 ">
        <thead className="border-1">
          <tr>
            <th className="border-1">Roll No </th>
            <th className="border-1">Name</th>
            {fetchType !== "studentList" ? (
              <>
                <th className="border-1">Basic Eng Drawing</th>
                <th className="border-1">Calculus I</th>
                <th className="border-1">Digital Logic</th>
                <th className="border-1">Discrete Struct</th>
                <th className="border-1">PST</th>
                <th className="border-1">Prog C</th>
                {fetchType === "final" && <th>SGPA</th>}
              </>
            ) : (
              <>
                <th className="border-1">Exam Roll No</th>
                <th className="border-1">PU Reg No</th>
                <th className="border-1">Email</th>
                <th className="border-1">Address</th>
                <th className="border-1">Phone No</th>
                <th className="border-1">Sex</th>
              </>
            )}
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.RollNo}>
              <td className="border-1">{item.RollNo}</td>
              <td className="border-1">{item.Name}</td>
              {fetchType !== "studentList" ? (
                <>
                  <td className="border-1">
                    {(item as InternalResultInterface).Basic_Eng_Drawing}
                  </td>
                  <td className="border-1">
                    {(item as InternalResultInterface).Calculus_I}
                  </td>
                  <td className="border-1">
                    {(item as InternalResultInterface).Digital_Logic}
                  </td>
                  <td className="border-1">
                    {(item as InternalResultInterface).Discrete_Struct}
                  </td>
                  <td className="border-1">
                    {(item as InternalResultInterface).PST}
                  </td>
                  <td className="border-1">
                    {(item as InternalResultInterface).Prog_C}
                  </td>
                  {fetchType === "final" && (
                    <td className="border-1">
                      {(item as FinalResultInterface).SGPA}
                    </td>
                  )}
                </>
              ) : (
                <>
                  <td className="border-1">
                    {(item as StudentInfoInterface).ExamRollNo}
                  </td>
                  <td className="border-1">
                    {(item as StudentInfoInterface).PuRegNo}
                  </td>
                  <td className="border-1">
                    {(item as StudentInfoInterface).Email || "N/A"}
                  </td>
                  <td className="border-1">
                    {(item as StudentInfoInterface).Address || "N/A"}
                  </td>
                  <td className="border-1">
                    {(item as StudentInfoInterface).PhNo || "N/A"}
                  </td>
                  <td className="border-1">
                    {(item as StudentInfoInterface).Sex}
                  </td>
                </>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TableFetch;
