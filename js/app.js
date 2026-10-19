document.addEventListener('DOMContentLoaded', () => {
  // 1. Contador de clics
  let count = 0;
  const counterBtn = document.getElementById('counter-btn');
  const counterVal = document.getElementById('counter-val');

  counterBtn.addEventListener('click', () => {
    count++;
    counterVal.textContent = count;
  });

  // 2. Cambio interactivo de gradiente/acento
  const colorBtn = document.getElementById('color-btn');
  const gradients = [
    'linear-gradient(135deg, #6366f1, #a855f7, #ec4899)',
    'linear-gradient(135deg, #06b6d4, #3b82f6, #9333ea)',
    'linear-gradient(135deg, #10b981, #06b6d4, #3b82f6)',
    'linear-gradient(135deg, #f59e0b, #ef4444, #ec4899)'
  ];
  let currentGradientIdx = 0;

  colorBtn.addEventListener('click', () => {
    currentGradientIdx = (currentGradientIdx + 1) % gradients.length;
    document.documentElement.style.setProperty('--primary-gradient', gradients[currentGradientIdx]);
  });

  // 3. Previsualización de texto en tiempo real
  const interactiveInput = document.getElementById('interactive-input');
  const previewText = document.getElementById('preview-text');

  interactiveInput.addEventListener('input', (e) => {
    previewText.textContent = e.target.value.trim() !== '' ? e.target.value : '¡Hola mundo!';
  });

  // 4. Año dinámico en el footer
  const yearSpan = document.getElementById('current-year');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
});
