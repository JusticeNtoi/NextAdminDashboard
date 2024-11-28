import Image from "next/image";
import styles from "../../../ui/dashboard/products/viewProduct/viewProduct.module.css";

const viewProduct = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src="/noproduct.jpg" alt="" fill />
        </div>
        Mac ProBook
      </div>
      <div className={styles.formContainer}>
        <form action="" className={styles.form}>
          <input type="hidden" name="id" value="{product.id}" />
          <label>Title</label>
          <input type="text" name="title" placeholder="{product.username}" />
          <label>Price</label>
          <input type="number" name="price" placeholder="{product.email}" />
          <label>Stock</label>
          <input type="number" name="stock" />
          <label>Color</label>
          <input type="text" name="color" placeholder="{product.phone}" />
          <label>Size</label>
          <textarea type="number" name="size" placeholder="{product.address}" />
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
            placeholder="{product.desc}"
          ></textarea>
          <button>Update</button>
        </form>
      </div>
    </div>
  );
};

export default viewProduct;
