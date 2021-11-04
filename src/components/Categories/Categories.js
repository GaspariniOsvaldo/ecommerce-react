import images from "../../media/images";
import { ItemCategories } from "./ItemCategories";


export const Categories = () => {
    return(
        <section className="CategoriesContainer">
            <h2 className="CategoriesContainer__title">Categories</h2>
            <section className="Categories">
                <ItemCategories key="headphones" title="Headphones" pictureUrl={images.sony1} ></ItemCategories>
                <ItemCategories key="in-ear" title="In-ear" pictureUrl={images.apple1} ></ItemCategories>
            </section>
        </section>
    );
}