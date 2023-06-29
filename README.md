# Prueba de la API Master Tables

Este repositorio contiene un script básico de Cypress para probar la API de Master Tables. El script de prueba envía una solicitud GET para obtener las tablas maestras desde una URL específica y realiza varias aserciones en la respuesta.

## Prerequisitos
Antes de ejecutar el script de prueba, asegúrate de tener lo siguiente:

1. Cypress instalado globalmente o localmente en tu proyecto.
2. Node.js instalado en tu máquina.

## Empezar

Sigue los siguientes pasos para configurar y ejecutar el script de prueba:

1. Clona el repositorio o crea un nuevo archivo en tu directorio de proyecto preferido.
2. Instala las dependencias necesarias ejecutando el siguiente comando:

```
 npm install 
```

3. Ejecuta la prueba de Cypress usando uno de los siguientes comandos:

4. Ejecutar la prueba usando el Cypress Test Runner:

```
 npx cypress open
```

Esto abrirá el Cypress Test Runner, permitiéndote seleccionar y ejecutar la prueba masterTables.cy.js.

### Ejecutar la prueba en modo headless en la terminal:

```
 npx cypress run --spec "cypress/e2e/Tests/masterTables.cy.js"
```

Esto ejecutará la prueba en la terminal sin el Cypress Test Runner.

### Descripción de la prueba

El script de prueba realiza las siguientes acciones:

1. Envía una solicitud GET a la URL especificada para obtener las tablas maestras.

2. Verifica que el estado de respuesta sea 200 (OK).

3. Verifica que el cuerpo de respuesta no esté vacío.

4. Verifica que el tipo de contenido de la respuesta sea application/json.

5. Mide la duración de la respuesta y verifica que sea menor a 2500 ms.

6. Valida el cuerpo de respuesta con un esquema JSON utilizando Ajv.

