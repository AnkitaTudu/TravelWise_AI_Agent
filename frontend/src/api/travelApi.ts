export async function generateTrip(plan: {
  destination: string;
  days: number;
  budget: string;
  month: string;
  companions: string;
}) {
  console.log("Sending plan:", JSON.stringify(plan, null, 2));
  const response = await fetch("http://127.0.0.1:5000/generate-trip", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(plan),
  });

  if (!response.ok) {
    throw new Error("Failed to generate trip");
  }

  return response.json();
}