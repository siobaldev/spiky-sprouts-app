export async function GET(request, { params }) {
  const { countryCode } = params;

  if (!countryCode) {
    return Response.json(
      { error: "Country code is required" },
      { status: 400 },
    );
  }

  try {
    const response = await fetch(
      `https://api.countrystatecity.in/v1/countries/${countryCode}/states`,
      {
        headers: {
          "X-CSCAPI-KEY": process.env.NEXT_PUBLIC_COUNTRY_STATE_CITY_API,
        },
      },
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return Response.json(data);
  } catch (error) {
    console.error("Error fetching states", error);
    return Response.json({ error: "Failed to fetch states" }, { status: 500 });
  }
}
