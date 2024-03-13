import { ImageResponse } from "next/og";

export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  const element = (
    <div
      style={{
        fontSize: 40,
        color: "black",
        background: "white",
        width: "100%",
        height: "100%",
        padding: "50px 200px",
        textAlign: "center",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      👋 Hello
    </div>
  );
  const response = new ImageResponse(element, { width: 1200, height: 630 });
  const arrayBuffer = await response.arrayBuffer();
  return new Response(arrayBuffer, {
    headers: {
      "Content-Type": "image/png",
    },
  });
}
