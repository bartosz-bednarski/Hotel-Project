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
    const datesCollection = db.collection("Dates");
    const dates = await datesCollection.find({ _id: { $in: data } }).toArray();

    console.log(dates);
    client.close();
    return res.send({ status: 200, message: "Completed", body: dates });
    // res.status(201).json({ message: "Data inserted!" });
    // return res.send(dates);
  }
}
export default handler;
