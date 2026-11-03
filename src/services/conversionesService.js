module.exports = {
    ConversionesService: {
        ConversionesPort: {
            CelsiusAFahrenheit: function(args) {
                const fahrenheit = (args.celsius * 9/5) + 32;
                return { resultado: fahrenheit };
            },
            KilometrosAMillas: function(args) {
                const millas = args.kilometros * 0.621371;
                return { resultado: millas };
            }
        }
    }
};