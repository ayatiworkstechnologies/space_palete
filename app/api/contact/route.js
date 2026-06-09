const CONTACT_API_URL =
  "https://api.ayatiworks.com/api/v1/public/space-palette/space-contact/records";

const CONTACT_API_KEY =
  process.env.SPACE_PALETTE_CONTACT_API_KEY ||
  "3a77c11915da7c75ef5208dd5a72a7061a0198234326e872becdfdc13bdfcd54";

export async function POST(request) {
  let payload;

  try {
    payload = await request.json();
  } catch {
    return Response.json(
      { message: "Invalid form data. Please try again." },
      { status: 400 }
    );
  }

  try {
    const response = await fetch(CONTACT_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-API-Key": CONTACT_API_KEY,
      },
      body: JSON.stringify(payload),
    });

    const data = await response.json().catch(() => ({}));

    if (!response.ok) {
      return Response.json(
        { message: data?.message || "Something went wrong. Please try again." },
        { status: response.status }
      );
    }

    return Response.json(data || { ok: true }, { status: response.status });
  } catch (error) {
    console.error("Contact form submission failed:", error);

    return Response.json(
      { message: "Network error. Please check your connection and try again." },
      { status: 502 }
    );
  }
}
