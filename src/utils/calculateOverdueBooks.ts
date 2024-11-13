
export const calculateOverdueBooks = (borrowRecords: any[]) => {
  const today: any = new Date();

  const overdueRecords = borrowRecords
    .map((record) => {
      const borrowDate: any = new Date(record.borrowDate);
      const daysGap = Math.floor((today - borrowDate) / (1000 * 60 * 60 * 24));

      if (daysGap > 14) {
        return {
          borrowId: record.borrowId,
          bookTitle: record.book.title,
          borrowerName: record.member.name,
          overdueDays: daysGap - 14,
        };
      }
    })
    .filter(Boolean);

  return overdueRecords;
};
