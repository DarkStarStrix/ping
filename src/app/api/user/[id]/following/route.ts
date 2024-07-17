import { LimitType } from "@lens-protocol/client";
import { NextRequest, NextResponse } from "next/server";
import { getServerAuth } from "~/utils/getServerAuth";

export const dynamic = "force-dynamic";

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  const id = params.id;
  const cursor = req.nextUrl.searchParams.get("cursor") ?? undefined;

  try {
    const { client } = await getServerAuth();

    const following = await client.profile.following({
      cursor,
      for: id,
      limit: LimitType.Fifty,
    });

    if (!following) {
      return NextResponse.json({ error: "Failed to fetch followers" }, { status: 500 });
    }

    return NextResponse.json({ users: following }, { status: 200 });
  } catch (error) {
    console.error("Failed to follow profile: ", error.message);
    return NextResponse.json({ error: `${error.message}` }, { status: 500 });
  }
}
