// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  status: boolean;
  status_code: number;
  data: {
    id: number;
    nama: string;
    harga: number;
    ukuran: string;
    warna: string;
  }[];
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  const data = [
    {
      id: 1,
      nama: "Baju",
      harga: 100000,
      ukuran: "L",
      warna: "Hitam",
    },
    {
      id: 2,
      nama: "Celana",
      harga: 50000,
      ukuran: "M",
      warna: "Hitam",
    },
  ];

  res.status(200).json({
    status: true,
    status_code: 200,
    data: data,
  });
}
