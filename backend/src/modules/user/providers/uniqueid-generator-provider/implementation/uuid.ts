import { v4 as uuid } from 'uuid';
import IUniqueGenerator from '../protocol';

class Uuid implements IUniqueGenerator {
    public generate(): string {
        return uuid();
    }
}

export default Uuid;