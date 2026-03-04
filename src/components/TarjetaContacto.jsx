// Jhan Rivera - Ejercicio 1

function TarjetaContacto({ nombre, telefono, correo, ciudad, ocupacion, colorFondo }) {
    const cardStyle = {
        backgroundImage: colorFondo || 'linear-gradient(0deg, #358faf 0%, #ffffff 100%)',
        color: 'white',
        borderRadius: '30px',
        padding: '20px',
        margin: '15px',
        boxShadow: '0 4px 15px rgba(116, 116, 116, 0.52)',
        maxWidth: '300px',
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    };

    return (
        <div style={cardStyle}>
            <h2 style={{ color: '#000000', marginBottom: '8px' }}>{nombre}</h2>
            <p style={{color: '#000000', marginBottom: '8px' }}><strong>Teléfono:</strong> {telefono}</p>
            <p style={{color: '#000000', marginBottom: '8px' }}><strong>Correo:</strong> {correo}</p>
            <p style={{color: '#000000', marginBottom: '8px' }}><strong>Ciudad:</strong> {ciudad}</p>
            <p style={{color: '#000000', marginBottom: '8px' }}><strong>Ocupación:</strong> {ocupacion}</p>
        </div>
    );
}

export default TarjetaContacto;