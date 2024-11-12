import "../Components/SASS/card.sass";

const Card = (props) => {
  // Verifica se o 'workerName' e 'workerImage' foram passados
  const borderClass = props.workerName ? "with-worker" : "without-worker";
  const imageUrl = props.workerImage || "https://picsum.photos/id/237/25/25"; // Imagem padrão

  return (
    <div id="card" className={borderClass}>
      <div className="room_name">
        <p>{props.sala}</p>
      </div>
      <div className="worker_div">
        {/* Verifica se há imagem para o trabalhador */}
        {props.workerImage && (
          <div className="worker_image">
            <img src={imageUrl} alt="Worker" />
          </div>
        )}
        {props.workerName && <p className="worker_name">{props.workerName}</p>}
      </div>
    </div>
  );
};

export default Card;
