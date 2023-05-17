import type { NextApiRequest, NextApiResponse } from "next";
import { MongoClient } from "mongodb";
async function handler(req: NextApiRequest, res: NextApiResponse) {
  const client = await MongoClient.connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.kl5um6i.mongodb.net/?retryWrites=true&w=majority`
  );
  const db = client.db("Hotel");
  const datesCollection = db.collection("Dates");
  if (req.method === "POST") {
    const data = req.body;
    console.log(data, "Hello");

    const dates = await datesCollection.insertMany(data);

    console.log(dates);

    res.status(201).json({ message: "Unique dates inserted!" });
  }
  if (req.method === "PUT") {
    const data = req.body;
    console.log(data, req.method);

    for (let i = 0; i < data.length; i++) {
      const dates = await datesCollection.updateOne(
        { _id: data[i]._id },
        { $set: { rooms: data[i].rooms } }
      );

      console.log(dates);
    }

    res.status(201).json({ message: "Duplicates inserted!" });
  }
  client.close();
}
export default handler;
