const imageContainer = document.querySelector('.image-container');
const contentsTable = document.querySelector('.contents-table');

imageContainer.addEventListener('mouseenter', function() {
  contentsTable.classList.add('show');
});

imageContainer.addEventListener('mouseleave', function() {
  contentsTable.classList.remove('show');
});
