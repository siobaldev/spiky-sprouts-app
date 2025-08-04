export async function GET() {
  try {
    const response = await fetch(
      "https://api.countrystatecity.in/v1/countries",
      {
        headers: {
          "X-CSCAPI-KEY": process.env.NEXT_PUBLIC_COUNTRY_STATE_CITY_API,
        },
      },
    );
    const data = await response.json();
    return Response.json(data);
  } catch (error) {
    return Response.json({ error: "Failed to fetch" }, { status: 500 });
  }
}
