function recommendGuitar(event) {
    event.preventDefault(); 

    // selecciones formulario
    const musicType = document.querySelector('input[name="music-type"]:checked');
    const guitarStyle = document.querySelector('input[name="guitar-style"]:checked');
    const sound = document.querySelector('input[name="sound"]:checked');
    const budget = document.querySelector('input[name="budget"]:checked');
    const artist = document.querySelector('input[name="artist"]:checked');

    // campos completos
    if (!musicType || !guitarStyle || !sound || !budget || !artist) {
        const resultDiv = document.getElementById('result');
        resultDiv.innerHTML = '<h3 style="color: red;">Por favor completa todos los campos.</h3>';
        return; 
    }

    let guitarRecommendation = '';

    //  guitarra recomendada
    if (artist.value === 'george_harrison') {
        guitarRecommendation = 'Fender Stratocaster';
    } else if (artist.value === 'paul_mccartney') {
        guitarRecommendation = 'Rickenbecker 4001S';
    } else if (artist.value === 'eric_clapton' || artist.value === 'slash') {
        guitarRecommendation = 'Gibson Les Paul';
    } else if (artist.value === 'brian_may') {
        guitarRecommendation = 'Red Special';
    }

    // Muestra el resultado 
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `<h3>¡Tu guitarra perfecta es: ${guitarRecommendation}!</h3>`;
}


document.getElementById('guitarForm').addEventListener('submit', recommendGuitar);
