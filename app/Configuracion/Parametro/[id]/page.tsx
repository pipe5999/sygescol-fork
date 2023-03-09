import Par152 from "./Param1/Par152";
import Par65 from "./Param1/Par65";
import Par93 from "./Param1/Par93";

export default function ({ params: { id } }: any) {
  console.log(id);
  return (
    <>
      {/* param 1 */}
      {id == "65" && <Par65 />}
      {id == "93" && <Par93 />}
      {id == "152" && <Par152 />}
      {/* end param 1 */}
    </>
  );
}
