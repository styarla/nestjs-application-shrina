import { ExecutionContext, UnprocessableEntityException } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";


export class JwtAuthGuard extends AuthGuard('jwt'){

    canActivate(context: ExecutionContext){
        return super.canActivate(context)
    }

    handleRequest(err, user) {
        if (err || !user){
            throw err || new UnprocessableEntityException();
        }
        return user
    }
}