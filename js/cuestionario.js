function recommendGuitar(event) {
    event.preventDefault(); // Evita que el formulario se envíe automáticamente

    // Obtiene los valores seleccionados en el formulario
    const musicType = document.querySelector('input[name="music-type"]:checked')?.value;
    const guitarStyle = document.querySelector('input[name="guitar-style"]:checked')?.value;
    const sound = document.querySelector('input[name="sound"]:checked')?.value;
    const budget = document.querySelector('input[name="budget"]:checked')?.value;
    const artist = document.querySelector('input[name="artist"]:checked')?.value;

    let guitarRecommendation = '';

    // Lógica para determinar la guitarra recomendada
    if (artist === 'george_harrison') {
        guitarRecommendation = 'Fender Stratocaster';
    } else if (artist === 'paul_mccartney') {
        guitarRecommendation = 'Rickenbecker 4001S';
    } else if (artist === 'eric_clapton' || artist === 'slash') {
        guitarRecommendation = 'Gibson Les Paul';
    } else if (artist === 'brian_may') {
        guitarRecommendation = 'Red Special';
    } else {
        // Si no se elige un artista o no está en la lista
        guitarRecommendation = 'No hay una recomendación específica para tu selección de artista.';
    }

    // Muestra el resultado en el div "result"
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `<h3>¡Tu guitarra perfecta es: ${guitarRecommendation}!</h3>`;
}

// Añade un evento al formulario para que use la función recommendGuitar
document.getElementById('guitarForm').addEventListener('submit', recommendGuitar);
