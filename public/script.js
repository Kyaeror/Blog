// const loginFormHandler = async (event) => {
//     event.preventDefault()
//     const email = document.getElementById(`inputEmail`).value.trim()
//     const password = document.getElementById(`inputPassword`).value.trim()

//     if (email && password) {
//         const response = await fetch('/api/users/login', {
//           method: 'POST',
//           body: JSON.stringify({ email, password }),
//           headers: { 'Content-Type': 'application/json' },
//         })
    
//         if (response.ok) {
//           document.location.replace('/')
//         } else {
//           alert('Failed to log in')
//         }
//       }
//     }

//     document.getElementById(`login-button`).addEventListener(`submit`, loginFormHandler)