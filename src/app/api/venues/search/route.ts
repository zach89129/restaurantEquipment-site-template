import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/auth-options";

// Move the venues data here so it's only accessible from the server
const VENUES = [
  { name: "Test Venue 1", id: 95368 },
  { name: "Test Venue 2", id: 81395 },
  { name: "Test Venue 3", id: 81462 },
];

export async function GET(request: Request) {
  // Check authentication
  const session = await getServerSession(authOptions);
  if (!session?.user?.isSalesTeam) {
    return new NextResponse(JSON.stringify({ error: "Unauthorized" }), {
      status: 401,
    });
  }

  // Get search query from URL
  const { searchParams } = new URL(request.url);
  const query = searchParams.get("q")?.toLowerCase() || "";

  // Filter venues based on search query
  const filteredVenues = query
    ? VENUES.filter(
        (venue) =>
          venue.name.toLowerCase().includes(query) ||
          venue.id.toString().includes(query)
      )
    : VENUES;

  return new NextResponse(JSON.stringify(filteredVenues), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
