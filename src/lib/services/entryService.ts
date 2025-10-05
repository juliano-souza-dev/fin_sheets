import { Entry, EntryRepository } from "../repositories/entryRepository";
import { nanoid } from "nanoid";
export class EntryService {
  constructor(private entryRepository: EntryRepository) {}

  async create({
    date,
    description,
    category,
    status,
    value,
    type,
  }: Omit<Entry, "id">) {
    const id = nanoid();

    await this.entryRepository.create({
      id,
      description,
      category,
      status,
      date,
      type,
      value,
    });
  }
}
