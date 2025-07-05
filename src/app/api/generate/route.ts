export async function POST(req: Request) {
  // Instead of fetching from OpenAI, return dummy data
  const dummyResponse = {
    elevatorPitch: "PitchBolt is a tool that turns your startup ideas into pitches instantly.",
    swot: {
      strengths: ["AI-powered", "Fast", "No design needed"],
      weaknesses: ["No customization", "Limited free usage"],
      opportunities: ["Startup accelerators", "Pitch events"],
      threats: ["Competitor tools", "Changing tech trends"]
    },
    pitchDeckOutline: [
      "Problem",
      "Solution",
      "Market Size",
      "Business Model",
      "Team",
      "Financials"
    ],
    videoScript: "Imagine a world where your startup pitch writes itself..."
  };

  return new Response(JSON.stringify(dummyResponse), {
    headers: { "Content-Type": "application/json" },
    status: 200
  });
}
