import { PrismaClient } from "@prisma/client";
import { NextPage } from "next";

export interface IItem {
  id?: String;
  title: String;
  description: String;
  imageUrl: String;
}

interface IHome {
  itemsData: IItem[];
}

const Home: NextPage<IHome> = ({ itemsData }: IHome) => {
  return (
    <div>
      {itemsData.map((item) => {
        return <div></div>;
      })}
    </div>
  );
};

export default Home;

export const getServerSideProps = async () => {
  const prisma = new PrismaClient();
  const items: IItem[] = await prisma.item.findMany();

  return {
    props: {
      itemsData: items,
    },
  };
};
