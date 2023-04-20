import CategoryItem from "../category-item/category-item.components";
import './categories-menu.styles.scss'


const CategoriesMenu = ({categories}) =>{
    return (
        <div className="categories-container">
          {
            categories.map(category=>{
              return(
                <CategoryItem category={category}/>
              )})
          }
        </div>
      );
}

export default CategoriesMenu