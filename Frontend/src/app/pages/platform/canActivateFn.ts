import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { PermissionHelpers } from './helpers/permissionHelpers';
import { inject } from '@angular/core';
import { JWTTokenHelpers } from './helpers/jwtTokenHelpers';

// Returns a function which can act as a guard for a route
export function canActivate(permissionName: string): CanActivateFn {
    return (ars: ActivatedRouteSnapshot, rss: RouterStateSnapshot) => {
        const router = inject(Router);
        if (!JWTTokenHelpers.IsTokenSet() || JWTTokenHelpers.IsExpired()) {
            sessionStorage.setItem("redirectTo", rss.url);
            return router.createUrlTree(['/platform/auth']);
        }
        if (PermissionHelpers.HasPermission(permissionName)) return true;
        return router.createUrlTree(['/notfound']);
    };
}
