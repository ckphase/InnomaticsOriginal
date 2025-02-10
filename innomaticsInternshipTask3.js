// 1. ATM Withdrawal System
function atmWithdrawal(balance, amount, pin, enteredPin) {
  if (pin !== enteredPin) return "Incorrect PIN";
  if (amount > balance) return "Insufficient Funds";
  if (amount % 100 !== 0) return "Enter amount in multiples of 100";
  return "Withdrawal successful";
}

// 2. Online Shopping Discount & Free Shipping
function calculateFinalAmount(orderAmount) {
  let discount = orderAmount > 1000 ? 0.2 : 
                 orderAmount > 500 ? 0.1 : 0;
  let shipping = orderAmount > 50 ? 0 : 10;
  return orderAmount * (1 - discount) + shipping;
}

// 3. Student Grading System
function calculateGrade(marks, attendance) {
  let finalMarks = attendance > 90 ? marks + 5 : marks;
  if (finalMarks >= 90) return "A";
  if (finalMarks >= 80) return "B";
  if (finalMarks >= 70) return "C";
  if (finalMarks >= 60) return "D";
  return "F";
}

// 4. Smart Traffic Light System
function trafficLightControl(density) {
  const times = {
    "Heavy Traffic": 60,
    "Moderate Traffic": 40,
    "Light Traffic": 20
  };
  return times[density] || 20;
}

// 5. Movie Ticket Pricing
function calculateTicketPrice(age, showTime) {
  const basePrice = 12;
  let discount = 0;
  if (showTime < 17) discount = Math.max(discount, 0.2);
  if (age > 60) discount = Math.max(discount, 0.3);
  if (age < 12) discount = Math.max(discount, 0.4);
  return basePrice * (1 - discount);
}

// 6. Job Application Filter
function isEligibleForJob(age, experience, qualification) {
  return age >= 21 && age <= 55 && 
         experience >= 2 && 
         qualification === "Bachelor's Degree";
}

// 7. E-commerce Coupon Redemption
function applyCoupon(orderAmount, couponCode) {
  if (couponCode === "DISCOUNT10" && orderAmount > 500) {
    return orderAmount * 0.9;
  }
  if (couponCode === "FREESHIP" && orderAmount > 200) {
    return orderAmount;
  }
  return orderAmount + (orderAmount > 200 ? 0 : 10);
}

// 8. Fitness Membership Plan
function choosePlan(planType, wantsTrainer, wantsDietPlan) {
  if (wantsDietPlan) return "VIP";
  if (wantsTrainer) return "Premium";
  return "Basic";
}

// 9. Electricity Bill Calculation
function calculateElectricityBill(units, timeOfDay) {
  let rate = units > 300 ? 3 : 
             units > 100 ? 4 : 5;
  let bill = units * rate;
  return timeOfDay === "peak" ? bill * 1.1 : bill;
}

// 10. Flight Ticket Booking System
function calculateFlightFare(classType, luggageWeight, isStudent, isSenior) {
  let baseFare = 300;
  let classFare = classType === "business" ? 200 : 
                  classType === "first" ? 500 : 0;
  let extraLuggage = luggageWeight > 20 ? 
                     Math.ceil((luggageWeight - 20) / 10) * 50 : 0;
  let totalFare = baseFare + classFare + extraLuggage;
  
  if (isStudent) return totalFare * 0.85;
  if (isSenior) return totalFare * 0.9;
  return totalFare;
}

// Example usage:
console.log(atmWithdrawal(1000, 500, 1234, 1234)); // "Withdrawal successful"
console.log(calculateFinalAmount(1200)); // 960 (20% off, free shipping)
console.log(calculateGrade(87, 95)); // "A" (after attendance bonus)
console.log(trafficLightControl("Heavy Traffic")); // 60
console.log(calculateTicketPrice(65, 14)); // 8.4 (30% senior discount)
console.log(isEligibleForJob(25, 3, "Bachelor's Degree")); // true
console.log(applyCoupon(600, "DISCOUNT10")); // 540
console.log(choosePlan("basic", true, false)); // "Premium"
console.log(calculateElectricityBill(150, "normal")); // 600
console.log(calculateFlightFare("business", 25, true, false)); // 467.5
