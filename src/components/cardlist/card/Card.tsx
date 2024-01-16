import Image, { StaticImageData } from "next/image";

type Props = {
  pictures: StaticImageData[];
};

function Card({ pictures }: Props) {
  return (
    <>
      {pictures.map((el, i) => (
        <div className="w-96 h-height overflow-hidden" key={i}>
          <Image src={el} alt="photo" width={500} />
        </div>
      ))}
    </>
  );
}

export default Card;
