import { ICategory } from "../../interfaces/interfaces";

export interface IReturnCategoryTree {
	id: number;
	name: string;
	children?: IReturnCategoryTree[];
	parentCategory: number;
	url: string;
}

interface ICategoryBuild extends ICategory {
    children?: IReturnCategoryTree[];
}

export default function buildTree(categories: ICategoryBuild[], parentCategory: number = null): IReturnCategoryTree[] {
    const tree = [];

    for (const category of categories) {
        if (category.parentCategory === parentCategory) {
			const children = buildTree(categories, category.id);

			if (children.length) {
				category.children = children;
			}

			tree.push(category)
        }
    }
    
    return tree;

}
