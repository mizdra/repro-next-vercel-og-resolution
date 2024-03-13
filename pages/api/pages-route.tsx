import type { NextApiRequest, NextApiResponse } from "next";
import { ImageResponse } from "next/og";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
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
  const buffer = Buffer.from(arrayBuffer);
  res.setHeader("Content-Type", "image/png");
  res.write(buffer);
  res.end();
}
