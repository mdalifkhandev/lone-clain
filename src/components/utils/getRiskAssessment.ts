// utils/getRiskAssessment.ts

/**
 * Assesses the risk level based on the Debt-to-Income Ratio.
 *
 * @param {number} debitToIncomeRatio The calculated Debt-to-Income Ratio as a percentage.
 * @returns {"Low" | "Medium" | "High"} The risk level.
 */
export const getRiskAssessment = (debitToIncomeRatio: number): "Low" | "Medium" | "High" => {
    if (debitToIncomeRatio >= 0 && debitToIncomeRatio <= 36) {
        return "Low";
    } else if (debitToIncomeRatio >= 37 && debitToIncomeRatio <= 49) {
        return "Medium";
    } else {
        return "High";
    }
};