import Image from "next/image";
import styles from "../../../ui/dashboard/products/viewProduct/viewProduct.module.css";
import { fetchProduct } from "../../../lib/data";
import { updateProduct } from "../../../lib/actions";

const viewProduct = async ({ params }) => {
  const { id } = params;
  const product = await fetchProduct(id);

  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src={product.img || "/noproduct.jpg"} alt="" fill />
        </div>
        {product.title}
      </div>
      <div className={styles.formContainer}>
        <form action={updateProduct} className={styles.form}>
          <input type="hidden" name="id" value={product.id} />
          <label>Title</label>
          <input type="text" name="title" defaultValue={product.title} />
          <label>Price</label>
          <input type="number" name="price" defaultValue={product.price} />
          <label>Stock</label>
          <input type="number" name="stock" defaultValue={product.stock} />
          <label>Color</label>
          <input type="text" name="color" defaultValue={product.color} />
          <label>Size</label>
          <textarea type="number" name="size" defaultValue={product.size} />
          <label>Category</label>
          <select name="category" id="category">
            <option value="general">Choose a Category</option>
            <option value="accessories">Accessories</option>
            <option value="phones">Phones</option>
            <option value="computers">Computers</option>
          </select>
          <textarea
            required
            name="desc"
            id="desc"
            rows="4"
            defaultValue={product.desc}
          ></textarea>
          <button type="submit">Update</button>
        </form>
      </div>
    </div>
  );
};

export default viewProduct;
