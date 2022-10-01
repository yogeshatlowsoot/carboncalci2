import { useGetQuestion } from "../context/Questioncontext";

export function Summaryofinputs() {
  const { questionstate } = useGetQuestion();
  // console.log(questionstate);
  return (
    <div>
      <p>{JSON.stringify(questionstate)}</p>
    </div>
  );
}
