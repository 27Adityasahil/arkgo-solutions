/**
 * Configuration and utility for the Solar Calculator.
 * 
 * Assumptions:
 * - 1 kW of solar capacity generates approximately 120 units (kWh) per month.
 * - Estimated flat electricity tariff is ₹8 per unit.
 * 
 * These values can be updated by ARKGO admins as tariffs or generation estimates change.
 */

export const CALCULATOR_CONFIG = {
  UNITS_PER_KW_MONTHLY: 120,
  ESTIMATED_TARIFF_PER_UNIT: 8,
};

/**
 * Calculates the recommended solar system size in kW based on monthly unit consumption.
 * Rounds to 1 decimal place (e.g., 0.8, 2.5).
 * 
 * @param {number} monthlyUnits 
 * @returns {number} Estimated kW capacity
 */
export function calculateRecommendedKW(monthlyUnits) {
  if (!monthlyUnits || monthlyUnits <= 0) return 0;
  
  const rawKW = monthlyUnits / CALCULATOR_CONFIG.UNITS_PER_KW_MONTHLY;
  return Math.round(rawKW * 10) / 10;
}

/**
 * Calculates the estimated monthly electricity bill based on consumption.
 * 
 * @param {number} monthlyUnits 
 * @returns {number} Estimated bill amount in INR
 */
export function calculateEstimatedBill(monthlyUnits) {
  if (!monthlyUnits || monthlyUnits <= 0) return 0;
  
  return Math.round(monthlyUnits * CALCULATOR_CONFIG.ESTIMATED_TARIFF_PER_UNIT);
}

/**
 * Recommends a project description based on consumption.
 * 
 * @param {number} monthlyUnits 
 * @returns {string} Recommended project
 */
export function calculateRecommendedProject(monthlyUnits) {
  const kw = calculateRecommendedKW(monthlyUnits);
  if (kw === 0) return "";
  const roundedUp = Math.ceil(kw);
  return `${roundedUp} kW On-Grid Solar Project`;
}
