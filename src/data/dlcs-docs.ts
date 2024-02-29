export interface DLCsDocumentsListType {
    id: number;
    title: string;
    description: string;
    url: string;
    fileName: string;
}

export const dlcsDocumentsList = [
  {
    id: 1,
    title: "Apuntes teóricos",
    description:
      "Todas las preguntas y respuestas que pueden llegar a aparecer en el examen.",
    url: "https://driver-school.vercel.app/src/assets/dlc/teorico-mvc.pdf",
    fileName: "teorico-mvc.pdf",
  },
  {
    id: 2,
    title: "Modelos de examen",
    description: "Varios modelos para que puedas practicar y sentirte segura.",
    url: "https://driver-school.vercel.app/src/assets/dlc/preguntas-examen-mvc.pdf",
    fileName: "preguntas-examen-mvc.pdf",
  },
  {
    id: 3,
    title: "Señales de tránsito",
    description: "Todas las señales de tránsito y su significado.",
    url: "https://driver-school.vercel.app/src/assets/dlc/señales-mvc.pdf",
    fileName: "señales-mvc.pdf",
  }
];
