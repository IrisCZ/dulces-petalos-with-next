import { ListItem } from "../domain/ListItem";

const baseUrl = 'https://dulces-petalos.herokuapp.com/';

interface ListItemsRepositoryInterface {
    get(): Promise<ListItem[]>;
}

export class ListItemsRepository implements ListItemsRepositoryInterface{
    async get(): Promise<ListItem[]> {
        const response = await fetch(`${baseUrl}api/product`);
        return response.json();
    }
}
