import jsPDF from 'jspdf';


export const printPDF = (content) => {
 const doc = new jsPDF();
  // Add content to the PDF
 doc.text(content, 10, 10);
  // Save the PDF
 doc.save('transaction.pdf');
};