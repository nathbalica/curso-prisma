import prisma from "../src/database";

async function main() {
    // Cria uma nova pessoa e pega o ID da nova entrada
    const personInsertion = await prisma.$queryRaw`
        INSERT INTO people (name, document)
        VALUES ('Jonas', '418.223.001-06')
        RETURNING id;
    `;

    const personId = personInsertion[0].id;

    // Cria pets associados à pessoa usando o ID retornado
    await prisma.$queryRaw`
        INSERT INTO pet (name, type, personId)
        VALUES 
        ('Mel', 'Cat', ${personId}),
        ('Baleia', 'Dog', ${personId}),
        ('Bolacha', 'Dog', ${personId}),
        ('Chocolate', 'Cat', ${personId});
    `;

    return personId;  // Retorna o ID da nova pessoa para eventual uso posterior
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });
