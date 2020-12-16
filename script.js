const counters = document.querySelectorAll('.counter')

counters.forEach(counter => {
  counter.innerText = '0'

  const updateCounter = () => {
    const target = +counter.getAttribute('data-target') // data target is a string attribute + changes it to a number
    const count = +counter.innerText
    const increment = target / 200 // increasing this number slows down the count

    if (count < target) {
      counter.innerText = `${Math.ceil(count + increment)}`
      setTimeout(updateCounter, 1)
    } else {
      counter.innerText = target
    }
  }

  updateCounter()

})