

Prueba1 - Registro de Gastos con Reporte (Ionic Angular)

Aplicación desarrollada en Ionic Angular (Standalone) como parte de la evaluación en la Escuela Politécnica Nacional (ESFOT).
Permite registrar gastos personales o compartidos, tomar una foto del recibo y generar un reporte con el total y promedio de gastos por persona.


1 Características principales
Registro de nuevos gastos con descripción, monto, persona que paga y foto del recibo.
Visualización de los gastos recientes.
Galería con los recibos registrados (vista con imagen y datos).
Cálculo automático del total de gastos y promedio por persona.
Generación automática de un archivo de texto (recibos_gastos.txt) con el historial.
Interfaz desarrollada con componentes standalone de Ionic 7 y Angular 17.




2 Instalación y ejecución

Requisitos previos

Node.js 
Ionic CLI

Instalación del CLI:
npm install -g @ionic/cli


Instalar dependencias:
npm install

Ejecución local

ionic serve

La aplicación se abrirá automáticamente en el navegador en
[http://localhost:8100/](http://localhost:8100/)



3 Generación del APK

Para compilar la aplicación como APK de Android:
ionic capacitor build android

Luego abrir el proyecto en Android Studio desde la carpeta:
android/

Y generar el archivo .apk desde el menú
Build > Build Bundle(s) / APK(s).

5. Estructura funcional del sistema

Componentes

home.page.html: interfaz principal para registrar y visualizar gastos.
home.page.ts: lógica del manejo de datos, captura de fotos y generación del reporte.
home.page.scss: estilos personalizados.

Datos almacenados

Cada gasto incluye:

Descripción
Monto
Pagador
Imagen del recibo
Fecha y hora

Se genera también un archivo de texto con cada registro nuevo.


6. Reporte de gastos

La aplicación calcula automáticamente:

Total de gastos acumulados.
Promedio de gasto.

Estos datos se muestran en la parte superior del sistema, actualizándose en tiempo real al registrar nuevos gastos.




Desarrollado por:
Joel Parra
Escuela Politécnica Nacional - ESFOT
Prueba 1 2025B

<img width="1919" height="865" alt="image" src="https://github.com/user-attachments/assets/e821eed1-60de-4d5b-a85f-2d3a16ed3cf4" />

<img width="720" height="1600" alt="image" src="https://github.com/user-attachments/assets/fd906605-a238-4469-8f85-f69bef7c383e" />
<img width="720" height="1600" alt="image" src="https://github.com/user-attachments/assets/a8ee2349-c3dd-4c7d-8c0a-7d546d00a9b2" />
<img width="720" height="1600" alt="image" src="https://github.com/user-attachments/assets/9c6dcc04-383a-4415-b253-5e06d79ca1cb" />
<img width="720" height="1600" alt="image" src="https://github.com/user-attachments/assets/d9be7548-a55b-4d7e-b25e-66d4127260ce" />




