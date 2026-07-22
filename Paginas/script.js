function verificar(event) {
    event.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const mensaje = document.getElementById('mensaje');
    
    // Validación básica
    if (!email || !password) {
        mensaje.textContent = 'Por favor completa todos los campos';
        mensaje.className = 'error';
        return;
    }
    
    // Validación de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        mensaje.textContent = 'Por favor ingresa un email válido';
        mensaje.className = 'error';
        return;
    }
    
    // Aquí puedes agregar tu lógica de autenticación
    // Por ahora solo mostramos un mensaje de éxito
    mensaje.textContent = '¡Login exitoso!';
    mensaje.className = 'success';
    
    console.log('Email:', email);
    console.log('Password:', password);
    
    // Limpiar formulario después de 2 segundos
    setTimeout(() => {
        document.querySelector('form').reset();
        mensaje.textContent = '';
    }, 2000);
}
