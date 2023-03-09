import Par65 from "./Param1/Par65";
import Par93 from "./Param1/Par93";
import Par95 from "./Param1/Par95";
import Par96 from "./Param1/Par96";
import Par100 from "./Param1/Par100";
import Par109 from "./Param1/Par109";
import Par152 from "./Param1/Par152";
// param2
import Par68 from "./Param2/Par68";
import Par73 from "./Param2/Par73";
import Par99 from "./Param2/Par99";
import Par115 from "./Param2/Par115";
import Par123 from "./Param2/Par123";
import Par124 from "./Param2/Par124";
import Par156 from "./Param2/Par156";
import Par161 from "./Param2/Par161";
import Par167 from "./Param2/Par167";
import Par241 from "./Param2/Par241";
import Par255 from "./Param2/Par255";
import Par256 from "./Param2/Par256";
import Par281 from "./Param2/Par281";
import Par297 from "./Param2/Par297";
import Par299 from "./Param2/Par299";
// param3
import Par14 from "./Param3/Par14";
import Par67 from "./Param3/Par67";
import Par76 from "./Param3/Par76";
import Par87 from "./Param3/Par87";
import Par111 from "./Param3/Par111";
import Par127 from "./Param3/Par127";
import Par132 from "./Param3/Par132";
import Par141 from "./Param3/Par141";
import Par149 from "./Param3/Par149";
import Par163 from "./Param3/Par163";
import Par236 from "./Param3/Par236";
// param4
import Par56 from "./Param4/Par56";
import Par71 from "./Param4/Par71";
import Par88 from "./Param4/Par88";
import Par89 from "./Param4/Par89";
import Par92 from "./Param4/Par92";
import Par94 from "./Param4/Par94";
import Par97 from "./Param4/Par97";
import Par102 from "./Param4/Par102";
import Par110 from "./Param4/Par110";
import Par114 from "./Param4/Par114";
import Par117 from "./Param4/Par117";
import Par154 from "./Param4/Par154";
import Par157 from "./Param4/Par157";
import Par235 from "./Param4/Par235";
import Par257 from "./Param4/Par257";
// param5
import Par70 from "./Param5/Par70";
import Par122 from "./Param5/Par122";
import Par223 from "./Param5/Par223";
import Par245 from "./Param5/Par245";
import Par285 from "./Param5/Par285";
// param6
import Par108 from "./Param6/Par108";
import Par112 from "./Param6/Par112";
import Par113 from "./Param6/Par113";
import Par116 from "./Param6/Par116";
import Par120 from "./Param6/Par120";
import Par121 from "./Param6/Par121";
import Par129 from "./Param6/Par129";
import Par135 from "./Param6/Par135";
import Par150 from "./Param6/Par150";
import Par155 from "./Param6/Par155";

// param7
import Par75 from "./Param7/Par75";
import Par90 from "./Param7/Par90";
import Par101 from "./Param7/Par101";
import Par103 from "./Param7/Par103";
import Par107 from "./Param7/Par107";
import Par118 from "./Param7/Par118";
import Par119 from "./Param7/Par119";
import Par130 from "./Param7/Par130";
import Par131 from "./Param7/Par131";
import Par133 from "./Param7/Par133";
import Par134 from "./Param7/Par134";
import Par138 from "./Param7/Par138";
import Par139 from "./Param7/Par139";
// param8
import Par91 from "./Param8/Par91";
import Par104 from "./Param8/Par104";
// param 9
import Par105 from "./Param9/Par105";
import Par140 from "./Param9/Par140";
import Par158 from "./Param9/Par158";
// param 10
import Par128 from "./Param10/Par128";
import Par153 from "./Param10/Par153";
import Par159 from "./Param10/Par159";
// Param 11
import Par136 from "./Param11/Par136";
import Par164 from "./Param11/Par164";
import Par240 from "./Param11/Par240";
import Par298 from "./Param11/Par298";
// Param 12
import Par142 from "./Param12/Par142";
import Par143 from "./Param12/Par143";
// Param 13
import Par144 from "./Param13/Par144";
import Par145 from "./Param13/Par145";
import Par146 from "./Param13/Par146";
import Par147 from "./Param13/Par147";
import Par166 from "./Param13/Par166";
// Param 14
import Par165 from "./Param14/Par165";
import Par168 from "./Param14/Par168";
// Param 15
import Par137 from "./Param15/Par137";
// Param 16
import Par160 from "./Param16/Par160";
import Par162 from "./Param16/Par162";
// Param 17
import Par243 from "./Param17/Par243";
import Par244 from "./Param17/Par244";
// Param 18
import Par251 from "./Param18/Par251";
// Param 19
import Par254 from "./Param19/Par254";
// Param 20
import Par295 from "./Param20/Par295";
// Param 21
import Par296 from "./Param21/Par296";
// Param 22
import Par300 from "./Param22/Par300";
// Param 23
import Par301 from "./Param23/Par301";

export default function ({ params: { id } }: any) {
  console.log(id);
  return (
    <>
      {/* param 1 */}
      {id == "65" && <Par65 />}
      {id == "93" && <Par93 />}
      {id == "95" && <Par95 />}
      {id == "96" && <Par96 />}
      {id == "100" && <Par100 />}
      {id == "109" && <Par109 />}
      {id == "152" && <Par152 />}
      {/* end param 1 */}
      {/* param 2 */}
      {id == "68" && <Par68 />}
      {id == "73" && <Par73 />}
      {id == "99" && <Par99 />}
      {id == "115" && <Par115 />}
      {id == "123" && <Par123 />}
      {id == "124" && <Par124 />}
      {id == "156" && <Par156 />}
      {id == "161" && <Par161 />}
      {id == "167" && <Par167 />}
      {id == "241" && <Par241 />}
      {id == "255" && <Par255 />}
      {id == "256" && <Par256 />}
      {id == "281" && <Par281 />}
      {id == "297" && <Par297 />}
      {id == "299" && <Par299 />}
      {/* end param 2 */}
      {/* param 3 */}
      {id == "14" && <Par14 />}
      {id == "67" && <Par67 />}
      {id == "76" && <Par76 />}
      {id == "87" && <Par87 />}
      {id == "111" && <Par111 />}
      {id == "127" && <Par127 />}
      {id == "132" && <Par132 />}
      {id == "141" && <Par141 />}
      {id == "149" && <Par149 />}
      {id == "163" && <Par163 />}
      {id == "236" && <Par236 />}
      {/* end param 3 */}
      {/* param 4 */}
      {id == "56" && <Par56 />}
      {id == "71" && <Par71 />}
      {id == "88" && <Par88 />}
      {id == "89" && <Par89 />}
      {id == "92" && <Par92 />}
      {id == "94" && <Par94 />}
      {id == "97" && <Par97 />}
      {id == "102" && <Par102 />}
      {id == "110" && <Par110 />}
      {id == "114" && <Par114 />}
      {id == "117" && <Par117 />}
      {id == "154" && <Par154 />}
      {id == "157" && <Par157 />}
      {id == "235" && <Par235 />}
      {id == "257" && <Par257 />}
      {/* end param 4 */}
      {/* param 5 */}
      {id == "70" && <Par70 />}
      {id == "122" && <Par122 />}
      {id == "223" && <Par223 />}
      {id == "245" && <Par245 />}
      {id == "285" && <Par285 />}
      {/* end param 5 */}
      {/* param 6 */}
      {id == "108" && <Par108 />}
      {id == "112" && <Par112 />}
      {id == "113" && <Par113 />}
      {id == "116" && <Par116 />}
      {id == "120" && <Par120 />}
      {id == "121" && <Par121 />}
      {id == "129" && <Par129 />}
      {id == "135" && <Par135 />}
      {id == "150" && <Par150 />}
      {id == "155" && <Par155 />}
      {/* end param 6 */}
      {/* param 7 */}
      {id == "75" && <Par75 />}
      {id == "90" && <Par90 />}
      {id == "101" && <Par101 />}
      {id == "103" && <Par103 />}
      {id == "107" && <Par107 />}
      {id == "118" && <Par118 />}
      {id == "119" && <Par119 />}
      {id == "130" && <Par130 />}
      {id == "131" && <Par131 />}
      {id == "133" && <Par133 />}
      {id == "134" && <Par134 />}
      {id == "138" && <Par138 />}
      {id == "139" && <Par139 />}
      {/* end param 7 */}
      {/* param 8 */}
      {id == "91" && <Par91 />}
      {id == "104" && <Par104 />}
      {/* end param 8 */}
      {/* param 9 */}
      {id == "105" && <Par105 />}
      {id == "140" && <Par140 />}
      {id == "158" && <Par158 />}
      {/* end param 9 */}
      {/* param 10  */}
      {id == "128" && <Par128 />}
      {id == "153" && <Par153 />}
      {id == "159" && <Par159 />}
      {/* end param 10 */}
      {/* param 11 */}
      {id == "136" && <Par136 />}
      {id == "164" && <Par164 />}
      {id == "240" && <Par240 />}
      {id == "298" && <Par298 />}
      {/* end param 11 */}
      {/* param 12 */}
      {id == "142" && <Par142 />}
      {id == "143" && <Par143 />}
      {/* end param 12 */}
      {/* param 13 */}
      {id == "144" && <Par144 />}
      {id == "145" && <Par145 />}
      {id == "146" && <Par146 />}
      {id == "147" && <Par147 />}
      {id == "166" && <Par166 />}
      {/* end param 13 */}
      {/* param 14 */}
      {id == "165" && <Par165 />}
      {id == "168" && <Par168 />}
      {/* end param 14 */}
      {/* param 15 */}
      {id == "137" && <Par137 />}
      {/* end param 15 */}
      {/* param 16 */}
      {id == "160" && <Par160 />}
      {id == "162" && <Par162 />}
      {/* end param 16 */}
      {/* param 17 */}
      {id == "243" && <Par243 />}
      {id == "244" && <Par244 />}
      {/* end param 17 */}
      {/* param 18 */}
      {id == "251" && <Par251 />}
      {/* end param 18 */}
      {/* param 19 */}
      {id == "254" && <Par254 />}
      {/* end param 19 */}
      {/* param 20 */}
      {id == "295" && <Par295 />}
      {/* end param 20 */}
      {/* param 21 */}
      {id == "296" && <Par296 />}
      {/* end param 21 */}
      {/* param 22 */}
      {id == "300" && <Par300 />}
      {/* end param 22 */}
      {/* param 23 */}
      {id == "301" && <Par301 />}
    </>
  );
}
