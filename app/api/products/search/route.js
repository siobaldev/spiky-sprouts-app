import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const query = searchParams.get("query");
    const searchProducts = await prisma.product.findMany({
      where: {
        name: {
          contains: query,
          mode: "insensitive",
        },
      },

      orderBy: {
        name: "asc",
      },

      select: {
        id: true,
        name: true,
        slug: true,
      },
    });

    return NextResponse.json(searchProducts);
  } catch (error) {
    console.log("Error fetching products: ", error);

    return NextResponse.json(
      { error: "Failed to fetch products" },

      { status: 500 },
    );
  }
}
