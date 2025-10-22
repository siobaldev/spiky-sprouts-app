import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const tag = searchParams.get("tag");

    const products = await prisma.product.findMany({
      where:
        tag && tag !== "All"
          ? {
              tag: {
                has: tag,
              },
            }
          : undefined,
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json(products);
  } catch (error) {
    console.log("Error fetching products: ", error);

    return NextResponse.json(
      { error: "Failed to fetch products" },
      { status: 500 },
    );
  }
}
