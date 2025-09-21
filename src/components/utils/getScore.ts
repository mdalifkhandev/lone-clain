// utils/getScore.ts

/**
 * Calculates a score based on an amount and a maximum possible score.
 *
 * @param {number} amount The input financial amount.
 * @param {number} maxScore The maximum possible score.
 * @returns {number} The calculated score, capped at the maxScore.
 */
export const getScore = (amount: number, maxScore: number): number => {
    // Math.round((amount / 100000) * maxScore) গণনায় amount এর মান শূন্য বা ঋণাত্মক হলে সমস্যা হতে পারে।
    // এক্ষেত্রে, Math.max(0, amount) ব্যবহার করা ভালো চর্চা।
    const score = Math.round((Math.max(0, amount) / 100000) * maxScore);
    
    // নিশ্চিত করা হয়েছে যে score, maxScore এর বেশি হবে না।
    return score > maxScore ? maxScore : score;
};