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
    const dates = await datesCollection.insertMany(data);

    console.log(dates);
    client.close();

    res.status(201).json({ message: "Data inserted!" });
  }
  if (req.method === "UPDATE") {
    const data = req.body;
    console.log(data);
    const updateone = data.map((item) => item._id);
    console.log("updateone", ...updateone);
    const client = await MongoClient.connect(
      `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.kl5um6i.mongodb.net/?retryWrites=true&w=majority`
    );
    const db = client.db("Hotel");
    const datesCollection = db.collection("Dates");
    for (let i = 0; i < data.length; i++) {
      const dates = await datesCollection.updateOne(
        { _id: data[i]._id },
        { $set: { rooms: data[i].rooms } }
      );

      console.log(dates);
    }

    client.close();

    res.status(201).json({ message: "Data inserted!" });
  }
}
export default handler;
