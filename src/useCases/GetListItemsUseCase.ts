import { ListItem } from "../domain/ListItem";
import { ListItemsRepository } from "../repositories/ListItemsRepository";

export class GetListItemsUseCase {
  constructor(private listItemsRepository = new ListItemsRepository()) {}

  execute(): Promise<ListItem[]> {
      return this.listItemsRepository.get();
  }
}
