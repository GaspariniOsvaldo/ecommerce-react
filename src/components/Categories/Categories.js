import { ItemCategories } from "./ItemCategories";

export const Categories = () => {

    return(
        <section className="CategoriesContainer">
            <h2 className="CategoriesContainer__title">Categories</h2>
            <section className="Categories">
                <ItemCategories key="headphones" title="Headphones" pictureUrl="https://i.imgur.com/w0U0YPh.png" ></ItemCategories>
                <ItemCategories key="in-ear" title="In-ear" pictureUrl="https://i.imgur.com/8Sxu3B7.png" ></ItemCategories>
            </section>
        </section>
    );
}