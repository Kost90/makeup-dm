type Props = {
  price: string;
  text: string;
  key:number;
};

function Pricelist({ price, text, key }: Props) {
  return (
    <div className="flex flex-row justify-between md:w-text" key={key}>
      <li>{text}</li>
      <span>{price}</span>
    </div>
  );
}

export default Pricelist;
