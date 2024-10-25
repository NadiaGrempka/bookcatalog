const path = require('path');

module.exports = {
    entry: './src/index.js',  // Główny plik JS
    output: {
        path: path.resolve(__dirname, 'dist'),  // Katalog wyjściowy
        filename: 'bundle.js'  // Nazwa pliku wynikowego
    },
    module: {
        rules: [
            {
                test: /\.js$/,  // Wskazuje, że reguła ma działać na plikach .js
                exclude: /node_modules/,  // Wyklucza folder node_modules
                use: {
                    loader: 'babel-loader',  // Używa Babel do transpilacji JS
                    options: {
                        presets: ['@babel/preset-env', "@babel/preset-react"]  // Preset do ES6+ na ES5
                    }
                }
            },
            {
                test: /\.css$/,  // Obsługuje pliki CSS
                use: ['style-loader', 'css-loader']  // Ładuje style CSS
            }
        ]
    },
    devtool: 'source-map',  // Generuje mapy źródłowe dla debugowania
    mode: 'development'  // Tryb pracy (development lub production)
};
