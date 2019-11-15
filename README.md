# Scaffolding frontend
Guia basica para desarrollo de aplicaciones en angular.
  
# Estructura del proyecto
~~~
│ app-routing.module.ts (agregar el ruteo inicial y ruteo perezoso al administrador de modulos)
│ app.component.html (agregar el  router outled inicial)
│ app.module.ts (importacion de modulos generales  para el proyecto como httpclient o interceptores.)
│
├───config  (implementacion de archivo de configuracion  app.config y demas configuraciones.)
│
├───core (conjunto de elementos basicos accesibles en todo el proyecto.)
│ ├───auth (mecanismos de seguridad implementados en la aplicacion.)
│ ├───enum (constantes utilizadas a lo largo del proyecto y enumeraciones de identificacion de elementos)
│ ├───interceptors (intermediarios en las peticiones http) 
│ ├───interfaces  (contractos de  validacion de elementos.)
│ ├───models (modelados de objetos)
│ └───services (peticiones y consumo de elementos externos.)
│
└───modules (carpeta donde se ubica el gestor de modulo, los modulos y componentes generales)
    │ modules-routing.module.ts (Ruteo encargado de gestionar la carga perezosa de los modulos)
    │ modules.module.ts (Modulo primo encargado de gestionar la primer vista layout)
    │
    ├───common ( componentes basicos en la aplicacion )
    │ ├───home (componente inicial con layout  y carga de modulos secundarios)
    │ │ home.component.html(declaracion de layout y outled para modulos secundarios.)
    │ │
    │ ├───login (componente de autentificacion utilizado en el modulo principal.)
    │ └───not-found (componente de  ruta no encontrada.)
    │
    ├───layout (esquema de contenido estatico a lo largo de la aplicacion una vez inciada sesion.)
    │ ├───footer (componente de pie de pagina.)
    │ ├───header  (componente de inicio de pagina)
    │ └───sidebar (sidebar de la aplicacion.)
    │
    ├───sample(modulo de ejemplo)
    │ │ sample-routing.module.ts (ruteo inicial del modulo con carga perezosa)
    │ │ sample.module.ts (gestor de componentes a utilizar en el modulo)
    │ │
    │ └───list-sample ( componente inicial  del modulo)
    │ list-sample.component.html (vista del componente de ejemplo)
    │ list-sample.component.ts (logica del componente de ejemplo)
    │
    └───shared (declaracion de componentes utiles para diferentes modulos)
    shared.module.ts (declaracion de componentes, importacion de modulos generales y la exportacion de los mismos.)
~~~



