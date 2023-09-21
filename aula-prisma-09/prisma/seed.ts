import prisma from "../src/database";

async function getDefaultUser() {
  const user = await prisma.user.findFirst({
    where: {
      document: "133.245.497-60"
    }
  });

  return user;
}

async function createDefaultUser() {
  console.log("Creating default user!");
  const user = await prisma.user.create({
    data: {
      client: "Geraldo Luiz Datena",
      document: "133.245.497-60"
    }
  });

  return user;
}

async function checkOrCreateDefaultUser() {
  const user = await getDefaultUser();
  if (!user) await createDefaultUser();
  else console.log("Default user already created.");

  return user;
}

async function main() {
  return checkOrCreateDefaultUser();
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  })