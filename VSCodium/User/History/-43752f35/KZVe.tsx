import { PrismaClient } from "@prisma/client";

export interface IItem {
  id?: String;
  title: String;
  description: String;
  imageUrl: String;
}

const Home = ({ itemsData }: IItem) => {
  return (
    <div>
      <h1>Wew</h1>
    </div>
  );
};

export default Home;

export const getServerSideProps = async () => {
  const prisma = new PrismaClient();
  const items = await prisma.item.findMany();

  return {
    props: {
      itemsData: items,
    },
  };
};
