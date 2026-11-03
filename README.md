# Práctica: Servicios Web SOAP con Express y WSDL

Esta aplicación desarrollada en Node.js y Express expone dos servicios web SOAP independientes: uno para conversiones de unidades y otro para cálculos de geometría. Implementa modularidad con Express Router y un middleware para el registro de peticiones.

## Requisitos previos
- [Node.js](https://nodejs.org/) instalado en el sistema.
- Un cliente para probar peticiones SOAP (como Postman o SoapUI).

## Instalación
1. Clona este repositorio:
   ```bash
   git clone <URL_DE_TU_REPOSITORIO>
Instala las dependencias necesarias (express y soap):

Bash
npm install
Ejecución
Para iniciar el servidor en modo desarrollo (utilizando nodemon), ejecuta:

Bash
npm run dev
El servidor se levantará en http://localhost:8000.

Endpoints y Contratos WSDL
Puedes consultar la definición de los contratos (WSDL) abriendo los siguientes enlaces en tu navegador web:

Conversiones: http://localhost:8000/soap/conversiones?wsdl

Geometría: http://localhost:8000/soap/geometria?wsdl

Instrucciones de Prueba
Las pruebas de invocación de operaciones se realizan enviando peticiones POST con cuerpo en formato XML (raw) a los endpoints listados arriba.

En la carpeta /pruebas de este repositorio encontrarás cuatro archivos XML listos para usarse:

req-celsius.xml: Prueba para CelsiusAFahrenheit (Envía 25, espera 77).

req-kilometros.xml: Prueba para KilometrosAMillas (Envía 10, espera 6.21371).

req-area.xml: Prueba para AreaRectangulo (Envía base 8 y altura 5, espera 40).

req-perimetro.xml: Prueba para PerimetroRectangulo (Envía base 8 y altura 5, espera 26).

Copia el contenido de cada archivo y pégalo como cuerpo (Body) en Postman asegurándote de usar la URL correspondiente a su servicio. Revisa la terminal del servidor para comprobar el funcionamiento del middleware de registro (Logger).


---

### 3. Cierre y envío a GitHub
Una vez que hayas guardado ambos archivos, abre la terminal de VSCode y ejecuta los siguientes comandos para realizar tu entrega final, tal y como lo pide la práctica (commits descriptivos y rama principal con la versión final)[cite: 1]:

```bash
git add .
git commit -m "Corrección de cálculo en perímetro, redacción de README y CONCLUSIONES"
git push -u origin main