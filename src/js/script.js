document.addEventListener('DOMContentLoaded', function () {
  new fullpage('#page', {
    scrollOverflow: true,
    fitToSection: false,
    responsiveWidth: 481,
    onLeave: function (origin, destination, direction, trigger) {
      if (direction === 'down' && destination.item.classList.contains('second-block')) {
        document.querySelector('.snowflake').classList.add('move');
      } else if (direction === 'up' && destination.item.classList.contains('first-block')) {
        document.querySelector('.snowflake').classList.remove('move');
      }
    }
  });

  // burger menu
  const burgerBtn = document.querySelector('.burger-button');
  const burgerMenu = document.querySelector('.burger-menu');
  const burgerMenuItems = document.querySelector('.burger-menu__items');

  if (burgerBtn) {
    function burgerPos() {
      const btnPos = burgerBtn.getBoundingClientRect();
      burgerMenu.style.transition = 'none';
      burgerMenu.style.right = document.body.clientWidth - btnPos.right + 'px';
      burgerMenu.style.transition = '';
    }

    burgerPos();
    burgerMenu.classList.remove('hide');

    window.addEventListener('resize', () => {
      closeMainMenu();
      burgerPos();
    });

    function closeMainMenu() {
      burgerMenuItems.style.opacity = '0';
      setTimeout(() => {
        burgerMenuItems.style.display = 'none';
        burgerBtn.classList.remove('active');
        burgerMenu.classList.remove('active');
        burgerPos();
      }, 200);
    }

    burgerBtn.addEventListener('click', () => {
      if (burgerBtn.classList.contains('active')) {
        closeMainMenu();
      } else {
        burgerBtn.classList.add('active');
        burgerMenu.classList.add('active');
        burgerMenu.style.right = '0';
        burgerMenuItems.style.display = 'block';
        setTimeout(() => {
          burgerMenuItems.style.opacity = '1';
        }, 400);
      }
    });
  }

  // santa cloud appear
  const santaCloud = document.querySelector('.santa__cloud');
  if (santaCloud) {
    setTimeout(() => {
      santaCloud.style.opacity = '1';
    }, 3000);
  }

  // move down button
  const moveDownBtn = document.querySelector('.first-block__arrow');
  if (moveDownBtn) {
    moveDownBtn.addEventListener('click', function () {
      fullpage_api.moveTo(2);
    })
  }

  // presents chose
  const presentItems = document.querySelectorAll('.present__item');
  if (presentItems) {
    const presentInfo = document.querySelector('.second-block__info');
    const presentTitle = document.querySelector('.info__title');
    const presentText = document.querySelector('.info__text');
    const presentImage = document.querySelector('.info__image > img');

    presentItems.forEach(item => {
      item.addEventListener('click', function () {
        if (!this.classList.contains('active')) {
          const activeItem = document.querySelectorAll('.present__item.active');
          activeItem.forEach(active => active.classList.remove('active'));
          this.classList.add('active');

          presentInfo.style.opacity = '0';
          setTimeout(() => {
            presentTitle.innerHTML = this.dataset.title;
            presentText.innerHTML = this.dataset.text;
            presentImage.src = this.querySelector('img').src;
            presentInfo.style.opacity = '1';
          }, 400)
        }
      })
    })
  }

  // custom select
  const genderSelect = document.querySelector('.gender-select');
  const selectDrop = document.querySelector('.gender-select__drop');
  const optionsList = document.querySelectorAll('.gender-select__option');

  if (genderSelect) {

    function slideUp(element, duration = 400) {
      const height = element.offsetHeight;

      element.style.transition = `all ${duration}ms ease-in-out`;
      element.style.height = `${height}px`;
      element.style.overflow = 'hidden';

      setTimeout(() => {
        element.style.height = '0';
        element.style.paddingTop = '0';
        element.style.paddingBottom = '0';
      }, 10);

      setTimeout(() => {
        element.style.display = 'none';
        element.style.removeProperty('height');
        element.style.removeProperty('padding-top');
        element.style.removeProperty('padding-bottom');
        element.style.removeProperty('overflow');
        element.style.removeProperty('transition');
      }, duration);
    }

    function slideDown(element, duration = 400) {
      element.style.removeProperty('display');

      let display = window.getComputedStyle(element).display;
      if (display === 'none') display = 'block';
      element.style.display = display;

      const height = element.offsetHeight;

      element.style.overflow = 'hidden';
      element.style.height = '0';
      element.style.paddingTop = '0';
      element.style.paddingBottom = '0';
      element.offsetHeight;

      setTimeout(() => {
        element.style.transition = `all ${duration}ms ease-in-out`;
        element.style.height = `${height}px`;
        element.style.paddingTop = '';
        element.style.paddingBottom = '';
      }, 10)

      setTimeout(() => {
        element.style.removeProperty('height');
        element.style.removeProperty('overflow');
        element.style.removeProperty('transition');
      }, duration);
    }

    function handleOptionSelection(option) {
      document.getElementById('gender').value = option.dataset.value;
      document.querySelector('.gender-select__trigger > p').innerHTML = option.dataset.value;
      const activeGender = document.querySelector('.gender-select__option.active');
      if (activeGender) activeGender.classList.remove('active');
      option.classList.add('active');
    }

    genderSelect.addEventListener('click', function (e) {
      const trigger = e.target.closest('.gender-select__trigger');
      const option = e.target.closest('.gender-select__option');
      if (trigger || option) {
        this.classList.toggle('active');
        if (this.classList.contains('active')) {
          slideDown(selectDrop);
        } else {
          slideUp(selectDrop);
        }
      }

      if (option) {
        handleOptionSelection(option);
      }
    });

    genderSelect.addEventListener('keydown', function (e) {
      const trigger = this.querySelector('.gender-select__trigger');
      const isDropActive = this.classList.contains('active');
      let index = Array.from(optionsList).indexOf(document.querySelector('.gender-select__option.active'));

      switch (e.key) {
        case 'ArrowDown':
          e.preventDefault();
          if (!isDropActive) {
            this.classList.add('active');
            slideDown(selectDrop);
          } else {
            if (index < optionsList.length - 1) {
              index++;
              optionsList[index].focus();
              handleOptionSelection(optionsList[index]);
            }
          }
          break;
        case 'ArrowUp':
          e.preventDefault();
          if (index > 0) {
            index--;
            optionsList[index].focus();
            handleOptionSelection(optionsList[index]);
          }
          break;
        case 'Enter':
        case ' ':
          e.preventDefault();
          if (isDropActive) {
            const activeOption = document.querySelector('.gender-select__option:focus');
            if (activeOption) {
              handleOptionSelection(activeOption);
              this.classList.remove('active');
              slideUp(selectDrop);
            }
          } else {
            this.classList.add('active');
            slideDown(selectDrop);
          }
          break;
        case 'Escape':
          if (isDropActive) {
            this.classList.remove('active');
            slideUp(selectDrop);
          }
          break;
      }
    });

    optionsList.forEach((option) => {
      option.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleOptionSelection(this);
          genderSelect.classList.remove('active');
          slideUp(selectDrop);
        }
      });
    });
  }

  // form phone validation
  const phone = document.getElementById('phone');
  if (phone) {
    phone.addEventListener('input', (e) => {
      e.target.value = e.target.value.replace(/[^0-9+\-()]/g, '');
    });
  }

  document.addEventListener('click', function (e) {
    if (genderSelect && !genderSelect.contains(e.target) && genderSelect.classList.contains('active')) {
      genderSelect.classList.remove('active');
      slideUp(selectDrop);
    }

    if (burgerBtn && !burgerBtn.contains(e.target) && !document.querySelector('.burger-menu').contains(e.target) && burgerBtn.classList.contains('active')) {
      closeMainMenu();
    }
  });
});