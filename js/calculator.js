/**
 * ActiveCampaign Partner Program - Commission Calculator
 * Calculates potential earnings based on customer referrals
 */

// Commission tier structure
const TIERS = {
  bronze: { min: 0, max: 10, rate: 0.20, name: 'Bronze Partner', color: '#CD7F32' },
  silver: { min: 11, max: 25, rate: 0.25, name: 'Silver Partner', color: '#C0C0C0' },
  gold: { min: 26, max: Infinity, rate: 0.30, name: 'Gold Partner', color: '#FFD700' }
};

/**
 * Get tier information based on customer count
 * @param {number} customers - Number of referred customers
 * @returns {object} Tier information
 */
function getTier(customers) {
  if (customers >= TIERS.gold.min) {
    return TIERS.gold;
  } else if (customers >= TIERS.silver.min) {
    return TIERS.silver;
  } else {
    return TIERS.bronze;
  }
}

/**
 * Calculate commission earnings
 * @param {number} customers - Number of referred customers
 * @param {number} avgPlanValue - Average monthly plan value
 * @returns {object} Calculation results
 */
function calculateCommission(customers, avgPlanValue) {
  const tier = getTier(customers);
  const monthlyRevenue = customers * avgPlanValue;
  const monthlyCommission = monthlyRevenue * tier.rate;
  const annualCommission = monthlyCommission * 12;

  return {
    tier: tier,
    customerCount: customers,
    avgPlanValue: avgPlanValue,
    monthlyRevenue: monthlyRevenue,
    monthlyCommission: monthlyCommission,
    annualCommission: annualCommission,
    commissionRate: tier.rate
  };
}

/**
 * Format number as currency
 * @param {number} amount - Amount to format
 * @returns {string} Formatted currency string
 */
function formatCurrency(amount) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(amount);
}

/**
 * Format percentage
 * @param {number} rate - Rate as decimal (e.g., 0.25)
 * @returns {string} Formatted percentage string
 */
function formatPercentage(rate) {
  return (rate * 100).toFixed(0) + '%';
}

/**
 * Initialize calculator on page load
 */
document.addEventListener('DOMContentLoaded', function() {
  const calculator = document.getElementById('commission-calculator');

  if (!calculator) return; // Exit if calculator not on page

  // Get all input and output elements
  const customerInput = document.getElementById('customer-count');
  const customerValue = document.getElementById('customer-count-value');
  const planValueInput = document.getElementById('avg-plan-value');

  const tierName = document.getElementById('tier-name');
  const tierBadge = document.getElementById('tier-badge');
  const commissionRate = document.getElementById('commission-rate');
  const monthlyCommission = document.getElementById('monthly-commission');
  const annualCommission = document.getElementById('annual-commission');
  const monthlyRevenue = document.getElementById('monthly-revenue');

  // Update display function
  function updateCalculator() {
    const customers = parseInt(customerInput.value) || 0;
    const avgPlan = parseFloat(planValueInput.value) || 0;

    // Update customer count display
    customerValue.textContent = customers;

    // Calculate results
    const results = calculateCommission(customers, avgPlan);

    // Update tier information
    tierName.textContent = results.tier.name;
    tierBadge.style.backgroundColor = results.tier.color;
    tierBadge.textContent = results.tier.name;

    // Update commission rate
    commissionRate.textContent = formatPercentage(results.commissionRate);

    // Update financial displays
    monthlyCommission.textContent = formatCurrency(results.monthlyCommission);
    annualCommission.textContent = formatCurrency(results.annualCommission);
    monthlyRevenue.textContent = formatCurrency(results.monthlyRevenue);

    // Add visual feedback for tier progression
    updateTierProgress(customers);
  }

  /**
   * Update tier progress indicator
   * @param {number} customers - Current customer count
   */
  function updateTierProgress(customers) {
    const tierIndicators = document.querySelectorAll('.tier-indicator');

    tierIndicators.forEach(indicator => {
      const tierMin = parseInt(indicator.dataset.tierMin);
      const tierMax = parseInt(indicator.dataset.tierMax);

      if (customers >= tierMin && (tierMax === -1 || customers <= tierMax)) {
        indicator.classList.add('active');
      } else {
        indicator.classList.remove('active');
      }
    });
  }

  // Add event listeners
  customerInput.addEventListener('input', updateCalculator);
  planValueInput.addEventListener('input', updateCalculator);

  // Initialize with default values
  updateCalculator();

  // Add range input visual feedback
  customerInput.addEventListener('input', function() {
    const value = (this.value - this.min) / (this.max - this.min) * 100;
    this.style.background = `linear-gradient(to right, #0066CC 0%, #0066CC ${value}%, #E5E5E5 ${value}%, #E5E5E5 100%)`;
  });

  // Trigger initial range styling
  const initialValue = (customerInput.value - customerInput.min) / (customerInput.max - customerInput.min) * 100;
  customerInput.style.background = `linear-gradient(to right, #0066CC 0%, #0066CC ${initialValue}%, #E5E5E5 ${initialValue}%, #E5E5E5 100%)`;
});

/**
 * Example usage for testing
 */
function testCalculator() {
  console.log('=== Commission Calculator Test ===');

  const testCases = [
    { customers: 5, avgPlan: 150 },
    { customers: 15, avgPlan: 200 },
    { customers: 30, avgPlan: 180 }
  ];

  testCases.forEach(test => {
    const result = calculateCommission(test.customers, test.avgPlan);
    console.log(`\nCustomers: ${test.customers}, Avg Plan: $${test.avgPlan}`);
    console.log(`Tier: ${result.tier.name} (${formatPercentage(result.commissionRate)})`);
    console.log(`Monthly Commission: ${formatCurrency(result.monthlyCommission)}`);
    console.log(`Annual Commission: ${formatCurrency(result.annualCommission)}`);
  });
}

// Export for testing (if needed)
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    calculateCommission,
    getTier,
    formatCurrency,
    formatPercentage,
    TIERS
  };
}
