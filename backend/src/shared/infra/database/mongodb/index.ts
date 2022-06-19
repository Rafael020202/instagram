import { MongoClient, Collection } from 'mongodb';

class MongoDb {
  private connection: MongoClient;

  private async getConnection(): Promise<MongoClient> {
    if(!this.connection) {
      const { 
        MONGO_USERNAME: username, 
        MONGO_PASSWORD: password, 
        MONGO_HOST: host,
        MONGO_PORT: port,
        MONGO_DB: db
      } = process.env; 

      this.connection = await MongoClient.connect(`mongodb://${username}:${password}@${host}:${port}/${db}`);
    }

    return this.connection;
  }

  public async getCollection(collection: string): Promise<Collection> {
    const connection = await this.getConnection();

    return connection.db().collection(collection);
  }
}

export default MongoDb;