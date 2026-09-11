const manejadorErrores = (error, req, res, next) => {
    // JS usa error.message nativamente
    const codigoEstado = error.statusCode || 500;
    const mensaje = error.message || "Error inesperado en el servidor"; 

    console.error(`[ERROR] - ${new Date().toISOString()} - ${codigoEstado} - ${mensaje}`);
    
    if (error.stack) {
        console.error(error.stack);
    }

    // Aseguramos que el código de estado HTTP real se envíe en las cabeceras
    res.status(codigoEstado).json({
        status: "ERROR",
        codigoEstado,
        mensaje,
        // Solo muestra el stack trace si estás desarrollando localmente
        ...(process.env.NODE_ENV === "development" && { stack: error.stack })
    });
};

// Exportación en formato CommonJS
module.exports = manejadorErrores;
