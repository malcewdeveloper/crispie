import { IReturnCategoryTree } from "../../../utils/helpers/buildTree";


export interface IMenuParts {
    sider?: IReturnCategoryTree[];
    menu?: IReturnCategoryTree[];
}

export default function splitMenuParts(categories: IReturnCategoryTree[]): IMenuParts  {
    const sider = [];
    const menu = [];

    categories.forEach(element => {
        sider.push(element)

        element.children?.forEach(element => {
            menu.push(element)
        });
        
    });

    return { 
        sider,
        menu
    }
}
  
  