type Props = {
  price: string;
  text: string;
};

function Pricelist({ price, text }: Props) {
  return (
    <div className="flex flex-row justify-between md:w-text">
      <li>{text}</li>
      <span>{price}</span>
    </div>
  );
}

export default Pricelist;
