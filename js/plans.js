document.addEventListener('DOMContentLoaded', function () {

  const monthlyBtn = document.getElementById('monthly-btn');
  const yearlyBtn = document.getElementById('yearly-btn');
  const pricingCards = document.querySelectorAll('.pricing-cards .card');

  function showPlan(plan) {
    pricingCards.forEach(card => {
      card.style.display =
        card.dataset.plan === plan ? 'block' : 'none';
    });
  }

  // Initial display
  showPlan('monthly');

  monthlyBtn.addEventListener('click', () => {
    showPlan('monthly');
    monthlyBtn.classList.add('active');
    yearlyBtn.classList.remove('active');
  });

  yearlyBtn.addEventListener('click', () => {
    showPlan('yearly');
    yearlyBtn.classList.add('active');
    monthlyBtn.classList.remove('active');
  });

});
