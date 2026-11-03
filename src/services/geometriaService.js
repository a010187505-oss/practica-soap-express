module.exports = {
    GeometriaService: {
        GeometriaPort: {
            AreaRectangulo: function(args) {
                const area = args.base * args.altura;
                return { resultado: area };
            },
            PerimetroRectangulo: function(args) {
                const perimetro = 2 * (args.base + args.altura);
                return { resultado: perimetro };
            }
        }
    }
};