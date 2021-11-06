import { MongoClient } from 'mongodb';

export async function connectToDatabase() {
  const client = await MongoClient.connect(
    'mongodb+srv://movieAddmin:onmyway222@cluster0.acwls.mongodb.net/movieAuth?retryWrites=true&w=majority'
  );
  return client;
}
