import type { NextApiRequest, NextApiResponse } from "next";
import { MongoClient } from "mongodb";
async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const data = req.body;
    console.log(data);
    const client = await MongoClient.connect(
      `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.kl5um6i.mongodb.net/?retryWrites=true&w=majority`
    );
    const db = client.db("Hotel");
    const dates = db.collection("Dates");
    const result1 = await dates.insertMany(data);

    console.log(result1);
    client.close();

    res.status(201).json({ message: "Data inserted!" });
  }
}
export default handler;
