# Commission Calculator Documentation

## Overview

The Interactive Commission Calculator helps potential partners understand their earning potential based on customer referrals. It provides real-time calculations as users adjust inputs.

## Features

### 1. Interactive Inputs
- **Customer Count Slider**: 0-50 customers (range slider)
- **Average Plan Value**: $0-$1000/month (number input)
- Real-time updates as values change

### 2. Automatic Tier Calculation
Based on customer count:
- **Bronze Partner**: 0-10 customers → 20% commission
- **Silver Partner**: 11-25 customers → 25% commission
- **Gold Partner**: 26+ customers → 30% commission

### 3. Earnings Display
- **Monthly Commission**: Customer revenue × Commission rate
- **Annual Commission**: Monthly × 12
- **Total Customer Revenue**: Customers × Avg plan value

### 4. Visual Feedback
- Tier badge with color coding (Bronze/Silver/Gold)
- Active tier indicators
- Animated updates
- Progress visualization

## Technical Implementation

### Files

```
js/calculator.js         # Calculator logic
css/calculator.css       # Calculator styling
benefits.html            # Calculator integration
```

### JavaScript Functions

**`getTier(customers)`**
- Determines partner tier based on customer count
- Returns tier object with rate, name, color

**`calculateCommission(customers, avgPlanValue)`**
- Calculates all earnings metrics
- Returns comprehensive results object

**`formatCurrency(amount)`**
- Formats numbers as USD currency
- Uses Intl.NumberFormat for localization

**`formatPercentage(rate)`**
- Converts decimal to percentage string
- Example: 0.25 → "25%"

### HTML Structure

```html
<div id="commission-calculator">
  <!-- Header -->
  <div class="calculator-header">...</div>

  <!-- Inputs -->
  <div class="calculator-inputs">
    <!-- Customer slider -->
    <!-- Plan value input -->
  </div>

  <!-- Results -->
  <div class="calculator-results">
    <!-- Tier display -->
    <!-- Earnings grid -->
    <!-- Revenue info -->
    <!-- Tier progress -->
  </div>
</div>
```

### CSS Classes

**Main Container**
- `.calculator` - Main wrapper
- `.calculator-header` - Title section
- `.calculator-inputs` - Input area
- `.calculator-results` - Results area

**Inputs**
- `.input-group` - Input wrapper
- `.input-value` - Current value display
- `.input-prefix` - $ prefix for plan value

**Results**
- `.tier-display` - Tier badge area
- `.earnings-grid` - Commission display grid
- `.earning-item` - Individual earning box
- `.revenue-display` - Revenue info box
- `.tier-progress` - Progress indicators
- `.tier-indicator` - Individual tier marker

## Usage

### Adding to a Page

1. **Add CSS**
```html
<link rel="stylesheet" href="css/calculator.css">
```

2. **Add HTML** (copy from benefits.html)

3. **Add JavaScript**
```html
<script src="js/calculator.js"></script>
```

### Customization

**Change Tier Rates:**
```javascript
const TIERS = {
  bronze: { min: 0, max: 10, rate: 0.20, ... },
  silver: { min: 11, max: 25, rate: 0.25, ... },
  gold: { min: 26, max: Infinity, rate: 0.30, ... }
};
```

**Change Slider Range:**
```html
<input type="range" min="0" max="50" value="20" />
```

**Change Default Values:**
```html
<input id="customer-count" value="20" />
<input id="avg-plan-value" value="150" />
```

## Calculations

### Formula

```
Monthly Revenue = Customers × Avg Plan Value
Commission Rate = Based on tier (20%, 25%, or 30%)
Monthly Commission = Monthly Revenue × Commission Rate
Annual Commission = Monthly Commission × 12
```

### Example

```
Customers: 20
Avg Plan Value: $150
Tier: Silver (20 customers falls in 11-25 range)
Commission Rate: 25%

Monthly Revenue = 20 × $150 = $3,000
Monthly Commission = $3,000 × 0.25 = $750
Annual Commission = $750 × 12 = $9,000
```

## Accessibility

- All inputs have aria-labels
- Keyboard navigation supported
- Screen reader friendly
- High contrast colors
- Focus states on all interactive elements

## Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers

## Testing

### Manual Testing Checklist

- [ ] Slider moves smoothly from 0-50
- [ ] Customer count updates in real-time
- [ ] Plan value accepts numbers 0-1000
- [ ] Tier changes at correct thresholds (11 and 26)
- [ ] Tier badge color matches tier
- [ ] All calculations are accurate
- [ ] Currency formatting displays correctly
- [ ] Percentage displays correctly
- [ ] Tier indicators highlight active tier
- [ ] Mobile responsive layout works
- [ ] No console errors

### Test Cases

```javascript
// Test Case 1: Bronze Tier
Customers: 5
Plan Value: $100
Expected: Bronze, 20%, $100/month, $1,200/year

// Test Case 2: Silver Tier
Customers: 20
Plan Value: $150
Expected: Silver, 25%, $750/month, $9,000/year

// Test Case 3: Gold Tier
Customers: 30
Plan Value: $200
Expected: Gold, 30%, $1,800/month, $21,600/year

// Test Case 4: Edge Case - Zero
Customers: 0
Plan Value: $0
Expected: Bronze, 20%, $0/month, $0/year

// Test Case 5: Max Values
Customers: 50
Plan Value: $1000
Expected: Gold, 30%, $15,000/month, $180,000/year
```

## Performance

- Calculations run in <1ms
- No API calls (all client-side)
- Lightweight (<10KB total)
- No dependencies
- Instant updates

## Future Enhancements

Possible improvements:
- [ ] Add "What if" scenarios
- [ ] Save/share calculations
- [ ] Compare tiers side-by-side
- [ ] Graph earnings over time
- [ ] Export results as PDF
- [ ] Currency selection (USD/EUR/GBP)
- [ ] Mobile app integration

## Troubleshooting

**Calculator not loading:**
- Check calculator.js is included
- Check calculator.css is included
- Verify #commission-calculator element exists

**Calculations seem wrong:**
- Verify TIERS constants
- Check input min/max values
- Test with simple numbers (10 customers, $100/month)

**Styling issues:**
- Check calculator.css loads after main.css
- Verify no CSS conflicts
- Check responsive breakpoints

## Support

For issues or questions:
- See implementation in `benefits.html`
- Check console for JavaScript errors
- Review this documentation
- Test with browser DevTools

---

**Version:** 1.0
**Last Updated:** 2024-11-06
**Maintained By:** Development Team
