let news = [
  {
    title: "Монголын мянганы сорилтын сан – Нээлттэй ажлын байрны зар",
    description:
      "НЭГДСЭН ХЯНАЛТ, УДИРДЛАГА, МЭДЭЭЛЛИЙН СИСТЕМИЙН (SCADA) ИНЖЕНЕР",
    date: "12/5/2023",
    author: "Zorigt",
    category: "business",
  },

  {
    title: "Монголын мянганы сорилтын сан – Нээлттэй ажлын байрны зар",
    description:
      "НЭГДСЭН ХЯНАЛТ, УДИРДЛАГА, МЭДЭЭЛЛИЙН СИСТЕМИЙН (SCADA) ИНЖЕНЕР",
    date: "2/5/2023",
    author: "Bayart",
    category: "social",
  },

  {
    title: "Монголын мянганы сорилтын сан – Нээлттэй ажлын байрны зар",
    description:
      "НЭГДСЭН ХЯНАЛТ, УДИРДЛАГА, МЭДЭЭЛЛИЙН СИСТЕМИЙН (SCADA) ИНЖЕНЕР",
    date: "12/1/2023",
    author: "Yalalt",
    category: "business",
  },
  {
    title: "Монголын мянганы сорилтын сан – Нээлттэй ажлын байрны зар",
    description:
      "НЭГДСЭН ХЯНАЛТ, УДИРДЛАГА, МЭДЭЭЛЛИЙН СИСТЕМИЙН (SCADA) ИНЖЕНЕР",
    date: "8/5/2023",
    author: "Zorigt",
    category: "business",
  },

  {
    title: "Монголын мянганы сорилтын сан – Нээлттэй ажлын байрны зар",
    description:
      "НЭГДСЭН ХЯНАЛТ, УДИРДЛАГА, МЭДЭЭЛЛИЙН СИСТЕМИЙН (SCADA) ИНЖЕНЕР",
    date: "1/5/2023",
    author: "Uyanga",
    category: "politic",
  },

  {
    title: "Монголын мянганы сорилтын сан – Нээлттэй ажлын байрны зар",
    description:
      "НЭГДСЭН ХЯНАЛТ, УДИРДЛАГА, МЭДЭЭЛЛИЙН СИСТЕМИЙН (SCADA) ИНЖЕНЕР",
    date: "12/6/2023",
    author: "Ayanga",
    category: "business",
  },
  {
    title: "Монголын мянганы сорилтын сан – Нээлттэй ажлын байрны зар",
    description:
      "НЭГДСЭН ХЯНАЛТ, УДИРДЛАГА, МЭДЭЭЛЛИЙН СИСТЕМИЙН (SCADA) ИНЖЕНЕР",
    date: "9/5/2023",
    author: "Ayanga",
    category: "social",
  },

  {
    title: "Монголын мянганы сорилтын сан – Нээлттэй ажлын байрны зар",
    description:
      "НЭГДСЭН ХЯНАЛТ, УДИРДЛАГА, МЭДЭЭЛЛИЙН СИСТЕМИЙН (SCADA) ИНЖЕНЕР",
    date: "10/5/2023",
    author: "Uyanga",
    category: "social",
  },

  {
    title: "Монголын мянганы сорилтын сан – Нээлттэй ажлын байрны зар",
    description:
      "НЭГДСЭН ХЯНАЛТ, УДИРДЛАГА, МЭДЭЭЛЛИЙН СИСТЕМИЙН (SCADA) ИНЖЕНЕР",
    date: "4/5/2023",
    author: "Yalalt",
    category: "politic",
  },
  {
    title: "Монголын мянганы сорилтын сан – Нээлттэй ажлын байрны зар",
    description:
      "НЭГДСЭН ХЯНАЛТ, УДИРДЛАГА, МЭДЭЭЛЛИЙН СИСТЕМИЙН (SCADA) ИНЖЕНЕР",
    date: "11/5/2023",
    author: "Yalalt",
    category: "politic",
  },
];

function findAuthor(){
  let count = 0;
  let filterAuthor = [];
    for (let i = 0; i < news.length; i = i +1){
      if(news[i].author == filterAuthor){
        filterAuthor[count] = news[i];
        count = count + 1;
      }

    }
    return filterAuthor;
    
}
let answer = findAuthor("Yalalt");
console.log(answer)
