"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateOverdueBooks = void 0;
const calculateOverdueBooks = (borrowRecords) => {
    const today = new Date();
    const overdueRecords = borrowRecords
        .map((record) => {
        const borrowDate = new Date(record.borrowDate);
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
exports.calculateOverdueBooks = calculateOverdueBooks;
