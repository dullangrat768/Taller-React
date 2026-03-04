// Jhan Rivera - Ejercicio 2

function TarjetaPelicula({ titulo, director, año, genero, calificacion, poster }) {
    let etiqueta = 'Regular';
    let colorEtiqueta = '#e63434';

    if (calificacion === 5.0) {
        etiqueta = 'Obra Maestra';
        colorEtiqueta = '#0fdef1';
    } else if (calificacion >= 4.5) {
        etiqueta = 'Excelente';
        colorEtiqueta = '#f1c40f';
    } else if (calificacion >= 3.5) {
        etiqueta = 'Buena';
        colorEtiqueta = '#2ecc71';
    }

    const cardStyle = {
        backgroundColor: '#262626',
        color: 'white',
        padding: '20px',
        borderRadius: '12px',
        margin: '10px',
        width: '250px',
        borderLeft: `5px solid ${colorEtiqueta}`,
        boxShadow: '0 4px 8px rgba(170, 170, 170, 0.3)'
    };

    return (
        <div style={cardStyle}>
            <img
                src={poster}
                alt={titulo}
                style={{ width: '100%', borderRadius: '8px', marginBottom: '10px' }}
            />
            <h3 style={{ margin: '0 0 10px 0', color: colorEtiqueta }}>{titulo}</h3>
            <p><strong>Director:</strong> {director}</p>
            <p><strong>Año:</strong> {año}</p>
            <p><strong>Género:</strong> {genero}</p>
            <p style={{
                fontWeight: 'bold',
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                padding: '5px',
                textAlign: 'center',
                borderRadius: '5px'
            }}>
                {etiqueta} ({calificacion})
            </p>
        </div>
    );
}

export default TarjetaPelicula;