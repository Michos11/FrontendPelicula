import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
//import { PruebaservicioService } from './pruebaservicio.service';
import { SeguridadService } from './seguridad/seguridad.service';
 
export const esAdminGuard: CanActivateFn = (route, state) => {
 
  //const authService = inject(PruebaservicioService);
  const router = inject(Router);
  const seguridadService = inject(SeguridadService);
 
  if (seguridadService.obtenerRol() === 'admin'){
    return true;
  }

  router.navigate(['/login']);
  return false;
 
  // if (authService.estaLogueado()){
  //   return true;
  // }
  // return router.parseUrl("/");
};