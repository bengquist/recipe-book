// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type User = {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<User>
) {
  res.status(200).json(user);
}

// mock data
const user = {
  firstName: "Blake",
  lastName: "Engquist",
  username: "pbandj333",
  email: "pbandj333@yahoo.com",
};
