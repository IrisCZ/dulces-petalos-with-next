import { ListItem } from "../domain/ListItem";
import { ListItemsRepository } from "../repositories/ListItemsRepository";

export class GetListItemsByNameUseCase {
  constructor(private listItemsRepository = new ListItemsRepository()) {}

  async execute(name: string): Promise<ListItem[]> {
      return (await this.listItemsRepository.get()).filter(i => this.matchName(i, name));
  }

  private matchName(item: ListItem, name: string) {
    const matchName = item.name.toLocaleLowerCase().includes(name.toLocaleLowerCase());
    
    if (matchName) return true;
    const matchBinomialName = item.binomialName.toLocaleLowerCase().includes(name.toLocaleLowerCase());
    return matchBinomialName;
  }
}
