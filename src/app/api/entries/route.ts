import { EntryRepository } from "@/lib/repositories/entryRepository";
import { EntryService } from "@/lib/services/entryService";
import { NextResponse } from "next/server";

const repository = new EntryRepository();
const service = new EntryService(repository);

export async function GET() {
  try {
    const entryRepository = new EntryRepository();
    const response = await entryRepository.getAll();
    return NextResponse.json(response);
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const { date, category, description, status, type, value } =
      await request.json();
    await service.create({
      date,
      category,
      description,
      status,
      type,
      value,
    });

    return NextResponse.json({});
  } catch (err: any) {
    console.log(err);
    return NextResponse.json({ err: err.message });
  }
}
