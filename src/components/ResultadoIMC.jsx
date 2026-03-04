// Autor: Jhan Rivera - Ejercicio 3

function ResultadoIMC({ nombre, peso, altura }) {
    const imc = peso / (altura * altura);
    let diagnostico = "";
  let colorStatus = "";

  if (imc < 18.5) {
    diagnostico = "Bajo peso";
    colorStatus = "#db3434";
  } else if (imc < 25.0) {
    diagnostico = "Peso normal";
    colorStatus = "#2ecc71";
  } else if (imc < 30.0) {
    diagnostico = "Sobrepeso";
    colorStatus = "#f1c40f";
  } else {
    diagnostico = "Obesidad";
    colorStatus = "#ff1900";
  }

  const estiloTarjeta = {
    backgroundImage: 'linear-gradient(0deg, #651096 0%, #000000 100%)',
    color: 'white',
    padding: '20px',
    borderRadius: '15px',
    margin: '15px',
    width: '280px',
    textAlign: 'center',
    borderBottom: `8px solid ${colorStatus}`,
    boxShadow: '0 6px 12px rgba(0,0,0,0.5)'
  };

  return (
    <div style={estiloTarjeta}>
      <h2 style={{ color: colorStatus, margin: '0 0 10px 0' }}>{nombre}</h2>
      <p><strong>Peso:</strong> {peso} kg</p>
      <p><strong>Altura:</strong> {altura} m</p>
      <hr style={{ opacity: 0.2 }} />

      <h3 style={{ fontSize: '1.5rem', margin: '15px 0 5px 0' }}>
        IMC: {imc.toFixed(1)}
      </h3>
      <p style={{ 
        fontWeight: 'bold', 
        fontSize: '1.1rem',
        textTransform: 'uppercase' 
      }}>
        {diagnostico}
      </p>
    </div>
  );
}

export default ResultadoIMC;