import DetailsPage from "./detals"


interface Props {
  params: { details: number };
}

const page = ({ params: { details } }: Props) => {
  return (
    <div>
      <DetailsPage id={details} />
    </div>
  );
};

export default page;