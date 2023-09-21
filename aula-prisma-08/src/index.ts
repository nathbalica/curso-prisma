import prisma from "./database";

(async () => {
  const students = await prisma.student.groupBy({
    by: ["class"],
    _count: {
      id: true
    },
    orderBy: {
      _count: {
        id: 'desc'
      }
    }

  }); // TODO: Faça a implementação aqui
  console.log(students);
})()

// (async () => {
//   const studentGroupedByClassWithoutJob = await prisma.student.groupBy({
//     by: ["class"],
//     where: {
//         jobId: null
//     },
//     _count: {
//         _all: true
//     },
//     orderBy: {
//         _count: {
//             _all: 'desc'
//         }
//     }
// });
//   console.log(students);
// })()







