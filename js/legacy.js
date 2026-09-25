document.getElementById('schedDays').addEventListener('change', function () {
  // Hide all day-content sections
  document.querySelectorAll('.day-content').forEach(el => {
    el.style.display = 'none';
  });

  // Get selected value (e.g., "d1") and convert to matching ID (e.g., "day1")
  const selected = this.value;
  const targetId = selected.replace('d', 'day');
  const target = document.getElementById(targetId);

  // Show the selected section
  if (target) {
    target.style.display = 'block';
  }
});
document.getElementById('startc1').addEventListener('click', function () {
  // Hide #day1
  document.getElementById('day1').style.display = 'none';

  // Show #cday1
  document.getElementById('cday1').style.display = 'block';
});

document.getElementById('startc2').addEventListener('click', function () {
  // Hide #day2
  document.getElementById('day2').style.display = 'none';

  // Show #cday2
  document.getElementById('cday2').style.display = 'block';
});

document.getElementById('startc3').addEventListener('click', function () {
  // Hide #day3
  document.getElementById('day3').style.display = 'none';

  // Show #cday3
  document.getElementById('cday3').style.display = 'block';
});

document.getElementById('startc4').addEventListener('click', function () {
  // Hide #day1
  document.getElementById('day4').style.display = 'none';

  // Show #cday1
  document.getElementById('cday4').style.display = 'block';
});
