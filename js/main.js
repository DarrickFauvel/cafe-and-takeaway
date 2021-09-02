const hideMessage = (e) => {
  e.preventDefault()
  const targetId = e.target.dataset.targetId
  document.getElementById(targetId).style.display = 'none'
}

document.getElementById('message-danger').addEventListener('click', hideMessage)
document
  .getElementById('message-warning')
  .addEventListener('click', hideMessage)
