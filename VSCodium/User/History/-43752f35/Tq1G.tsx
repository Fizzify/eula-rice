import { PrismaClient } from "@prisma/client";

export default function Home() {
  return (
    <div>
      <h1>Wew</h1>
    </div>
  );
}

export const getServerSideProps = async () => {
  const prisma = new PrismaClient();
  const items = await prisma.item.findMany();

  return {
    props: {
      itemsData: items,
    },
  };
};
