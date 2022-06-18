import { MongoClient, Collection } from 'mongodb';

class MongoDb {
  private connection: MongoClient;

  private async getConnection(): Promise<MongoClient> {
    if(!this.connection) {
      this.connection = await MongoClient.connect('mongodb://root:root@localhost:27107/admin');
    }

    return this.connection;
  }

  public async getCollection(collection: string): Promise<Collection> {
    const connection = await this.getConnection();

    return connection.db().collection(collection);
  }
}

export default MongoDb;