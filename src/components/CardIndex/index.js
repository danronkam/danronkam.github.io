import CardIndexItem from "../CardIndexItem";

const CardIndex = ({ items }) => {
    return (
      <div className="card-index">
        {items.map((item, index) => (
          <CardIndexItem key={index} item={item} />
        ))}
      </div>
    );
};

export default CardIndexItem