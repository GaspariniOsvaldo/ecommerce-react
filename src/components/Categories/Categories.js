import images from "../../media/images";
import { ItemCategories } from "./ItemCategories";


export const Categories = () => {
    return(
        <section className="Categories">
            <ItemCategories title="Headphones" pictureUrl={images.sony1} ></ItemCategories>
            <ItemCategories title="In-ear" pictureUrl={images.apple1} ></ItemCategories>
        </section>
    );
}