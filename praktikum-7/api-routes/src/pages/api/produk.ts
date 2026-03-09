// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  status: boolean;
  status_code: number;
  data: {
    id: number;
    name: string;
    price: number;
    size: string;
    color: string;
  }[];
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  const data = [
    {
      id: 1,
      name: "Baju",
      price: 100000,
      size: "L",
      color: "Hitam",
    },
    {
      id: 2,
      name: "Celana",
      price: 50000,
      size: "M",
      color: "Hitam",
    },
  ];

  res.status(200).json({
    status: true,
    status_code: 200,
    data: data,
  });
}
