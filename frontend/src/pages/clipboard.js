document.addEventListener('DOMContentLoaded', () => {
  const copyableElements = document.querySelectorAll('[data-copyable]');

  copyableElements.forEach((element) => {
    element.addEventListener('click', async () => {
      const textToCopy = element.innerText;

      try {
        await navigator.clipboard.writeText(textToCopy);
        console.log('Text copied to clipboard');
      } catch (err) {
        console.error('Failed to copy text: ', err);
      }
    });
  });
});