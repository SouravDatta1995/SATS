import dbConnect from "@/lib/dbConnect";
import candidate from "@/models/candidatemodel";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await dbConnect();
    const candidates = await candidate.find({});
    return NextResponse.json(candidates);
  } catch (error) {
    console.log(error);
    return NextResponse.error(error);
  }
}
