import "./CardIndexItem.css"

const CardIndexItem = ({ item }) => {

    const cardStyle = {
        backgroundImage: `url(${item.backgroundImage})`,
    };

    return (
        
      <div className="card">
        <h3>{item.title}</h3>
        <p>{item.description}</p>
      </div>
    );
  };


  export default CardIndexItem