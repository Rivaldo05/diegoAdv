(() => {
    if (!localStorage.DiegoAdvocacia) {
      document.querySelector(".box-cookies").classList.remove('hide')
    }
    const acceptCookies = () => {
      document.querySelector(".box-cookies").classList.add('hide')
      localStorage.setItem("DiegoAdvocacia", "accept")
    }
    const btnCookies = document.querySelector(".btn-cookies")
    btnCookies.addEventListener('click', acceptCookies)
  })()