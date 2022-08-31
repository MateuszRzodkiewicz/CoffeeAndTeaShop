import "../css/ProductDescription.css";
function ProductDescription({
  description,
  countryOrigin,
  preparing,
}: {
  description: string;
  countryOrigin: string;
  preparing: string;
}) {
  return (
    <div className="descriptionContainer">
      <p>
        <span>Opis produktu:</span>
        {description}
      </p>
      <p>
        <span>Kraj pochodzenia:</span>
        {countryOrigin}
      </p>
      <p>
        <span>Sposób przygotowania:</span>
        {preparing}
      </p>
    </div>
  );
}

export default ProductDescription;
