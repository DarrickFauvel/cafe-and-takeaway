import { message } from './messages.js'

$(function () {
  $('#order__button').on('click', function () {
    $('#order__modal').modal('show')
  })
})

const hideMessage = (e) => {
  e.preventDefault()
  const targetId = e.target.dataset.targetId
  document.getElementById(targetId).classList.add('d-none')
}

const populateMessage = (messageId, messageTitle, messageText) => {
  document.getElementById(`message-${messageId}__title`).textContent = messageTitle
  document.getElementById(`message-${messageId}__text`).textContent = messageText
}

document.getElementById('message-important').addEventListener('click', hideMessage)
document.getElementById('message-promotion').addEventListener('click', hideMessage)
document.getElementById('message-cookies').addEventListener('click', hideMessage)

populateMessage('important', message.important.title, message.important.text)
populateMessage('promotion', message.promotion.title, message.promotion.text)
populateMessage('cookies', message.cookies.title, message.cookies.text)

// Hide messages for now
document.getElementById('message-important').classList.add('d-none')
document.getElementById('message-promotion').classList.add('d-none')
document.getElementById('message-cookies').classList.add('d-none')
