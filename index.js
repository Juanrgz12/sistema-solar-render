const express = require('express');
const path = require('path');
const app = express();

// El puerto lo asigna Render, o usa el 3000 si es local
const PORT = process.env.PORT || 3000;

// IMPORTANTE: Servimos todos tus archivos (img, planetas, style.css)
app.use(express.static(__dirname));

// Ruta principal para abrir tu página
app.get('/', (req, res) => {
    // Usamos 'Index.html' porque así se llama tu archivo en la captura
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Tu sistema solar está listo en: http://localhost:${PORT}`);
});
