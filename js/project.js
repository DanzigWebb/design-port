let projectLog = function () {
  let cart = document.querySelectorAll('.project-item');
  let btns = document.querySelectorAll('.project-btn');

  cart.forEach(item => {
    item.style.animationDelay = Math.random() + 's';
  })
  let deleteItems = function () {
    cart.forEach(item => {
      item.style.display = 'none';
    })
  }
  btns.forEach(btn => {
    btn.addEventListener('click', function () {
      let filterString = btn.dataset.filter;
      deleteItems();
      cart.forEach(item => {
        setTimeout(function () {
          if (filterString == 'all') item.style.display = 'block';
          if (item.dataset.filter.includes(filterString)) {
            item.style.display = 'block'
          }
        }, 10)

      })
    })
  })
}

projectLog()