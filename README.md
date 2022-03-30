## Backend con microservicio y RabbitQueue

    En este mini proyecto lo que se hizo fue crear 3 cosas


1.  Un servidor Base, hecho en mysql (admin)
2.  Un servidor espejo, hecho con mongodb(principal)
3.  Un microservicio, escuchando lo que pasa en el servidor base y replicándolo

Además se utilizo [Rabbit Queue](https://www.cloudamqp.com/)


- Para esto en el servidor base se levantó el servidor, como siempre, creando sus rutas y todo lo que tenga que ver.

- La gran diferencia es que en el servidor espejo, se definió todo como siempre, pero se crearon 2 "main.ts" para iniciarlo.

- El primero se llama main.ts y es el que ejecutara el servidor al levantarlo, con el puerto 8001
- Y el 2do "listener.ts" haciendo referencia a levantar el microservicio

Para que los 2 pudieran funcionar bien se debió replicar el archivo "nest-cli.json" el original corresponde al servidor como tal y el listener.json tiene la configuración para que tome el archivo listener.ts al levantar el servicio

Finalmente en el package.json se indico un nuevo script para indicarle cuando queremos levantar un microservicio


Ej:
npm run start:dev --> Para levantar el servidor

npm run start:listen --> Para levantar el microservicio