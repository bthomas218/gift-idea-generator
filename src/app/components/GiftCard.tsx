type Props = {
  id: number;
  title: string;
  slug: string;
  price: number;
  description: string;
  category: Category;
  images: string[];
};

type Category = {
  id: number;
  name: string;
  image: string;
  slug: string;
};

export default function GiftCard({
  id,
  title,
  price,
  description,
  category,
  images,
}: Props) {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src={images[0]} className="card-img-top" alt={title}></img>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{category.name}</h6>
        <p className="card-text">{description}</p>
        <p className="card-text">
          <strong>${price}</strong>
        </p>
        <button className="btn btn-primary">Add to Wishlist</button>
      </div>
    </div>
  );
}
