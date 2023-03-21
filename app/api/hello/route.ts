import { NextResponse } from "next/server";

export async function GET(request: Request) {
  console.log("ejecute el cron");

  return NextResponse.json(
    { body: "Todo Naice señor" },
    {
      status: 200,
    }
  );
}
