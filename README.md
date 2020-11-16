# BACKEND SOCCER_ADMIN

Backend para la app movil soccer_admin

## ENDPOINTS

### LOGIN:
1) /api/auth => POST => Endpoint para autenticarse 
2) /api/auth/new => POST => Endpoint para crear nuevo usuario

### LIGAS:

CRUD para ligas:

1) /api/liga => GET => Endpoint para obtener las ligas
2) /api/liga => POST => Endpoint para crear una liga
3) /api/liga/:id => PUT => Endpoint para actualizar una liga por ID
3) /api/liga/:id => DELETE => Endpoint para eliminar una liga por ID

### EQUIPOS:

CRUD para equipos:

1) /api/team => GET => Endpoint para obtener los equipos
2) /api/team => POST => Endpoint para crear un equipo
3) /api/team/:id => PUT => Endpoint para actualizar un equipo por ID
3) /api/team/:id => DELETE => Endpoint para eliminar un equipo por ID
