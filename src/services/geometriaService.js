module.exports = {
    GeometriaService: {
        GeometriaPort: {
            AreaRectangulo: function(args) {
                // Aquí no hubo problema porque la multiplicación (*) convierte automáticamente a número
                const area = args.base * args.altura;
                return { resultado: area };
            },
            PerimetroRectangulo: function(args) {
                // Forzamos a que base y altura se traten como números antes de sumarlos
                const baseNum = parseFloat(args.base);
                const alturaNum = parseFloat(args.altura);
                const perimetro = 2 * (baseNum + alturaNum);
                return { resultado: perimetro };
            }
        }
    }
};