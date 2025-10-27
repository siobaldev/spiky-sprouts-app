export async function GET(request, { params }) {
  const { countryCode, stateCode } = params;

  if (!countryCode && !stateCode) {
    return Response.json(
      { error: "Both country code and state code are required" },
      { status: 400 },
    );
  }

  try {
    const response = await fetch(
      `https://api.countrystatecity.in/v1/countries/${countryCode}/states/${stateCode}/cities`,
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
    console.error("Error fetching cities", error);
    return Response.json({ error: "Failed to fetch cities" }, { status: 500 });
  }
}
