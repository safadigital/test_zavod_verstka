function myFunction(e) {
    if (document.querySelector('#navList li.active') !== null) {
      document.querySelector('#navList li.active').classList.remove('active');
    }
    let el = e.target;
    let parentLi = el.parentNode;
    parentLi.classList.add("active");
  }


