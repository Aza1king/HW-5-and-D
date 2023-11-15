function getTextFromFirstLi() {
    return document.querySelector('li').innerText;
  }
  function getTextArrayFromLiTags() {
    const liElements = document.querySelectorAll('li');
    return Array.from(liElements, li => li.innerText);
  }
  function getTextArrayFromClassListItem() {
    const listItemElements = document.querySelectorAll('.list-item');
    return Array.from(listItemElements, li => li.innerText);
  }
  function getClassArrayFromListItem() {
    const listItemElements = document.querySelectorAll('.list-item');
    return Array.from(listItemElements, li => li.getAttribute('class'));
  }
  function getDataTestIdArrayFromListItem() {
    const listItemElements = document.querySelectorAll('.list-item');
    return Array.from(listItemElements, li => li.getAttribute('data-test-id'));
  }
  function findBrokenElements() {
    const listItemElements = document.querySelectorAll('.list-item');
    return Array.from(listItemElements, li => {
      if (li.innerText.toLowerCase() !== li.className.split(' ')[1]) {
        return li.getAttribute('data-test-id');
      }
    }).filter(Boolean);
  }


document.addEventListener('DOMContentLoaded', function () {
    const colorChangingList = document.getElementById('color-changing-list');
    const colors = ['#8BC34A', '#F44336', '#FF9800', '#2196F3', '#FFFFFF']; 

    function changeBackgroundColor() {
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        document.body.style.backgroundColor = randomColor;
    }

    setInterval(changeBackgroundColor, 2000); 
});