/* eslint-disable prettier/prettier */
import {
    ExceptionFilter,
    Catch,
    ArgumentsHost,
    HttpException,
    HttpStatus,
} from '@nestjs/common';
import { Request, Response } from 'express';
//import { clDates } from 'src/_shares/utilityFunctions';
import { ExceptionResponse } from './interface/exception-response.interface';
@Catch()
export class HttpExceptionFilter implements ExceptionFilter {
    catch(exception: HttpException, host: ArgumentsHost) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse<Response>();
        const request = ctx.getRequest<Request>();
        const status =
            exception instanceof HttpException
                ? exception.getStatus()
                : HttpStatus.INTERNAL_SERVER_ERROR;

        const { message, error }: null | ExceptionResponse = exception.getResponse
            ? (exception.getResponse() as ExceptionResponse)
            : null;
        console.log('>ExpFilters>', message, error);

        const jsonResponse = {
            statusCode: status,
            timestamp: new Date(),
        };

        if (status === HttpStatus.UNAUTHORIZED) {
            jsonResponse['message'] =
                'Credenciales de autenticación incorrectas o faltantes.';
        }
        if (status === HttpStatus.FORBIDDEN) {
            const newM =
                message === 'Forbidden resource'
                    ? 'Recursos prohibidos para este usuario.'
                    : message;
            jsonResponse['message'] = newM;
        }
        if (status === HttpStatus.NOT_FOUND) {
            jsonResponse['message'] = message || 'Información no encontrada.';
        }

        if (status === HttpStatus.BAD_REQUEST) {
            jsonResponse['message'] = message || 'Centro de distribución faltante.';
        }

        if (status === HttpStatus.CONFLICT) {
            jsonResponse['message'] = message || 'Conflict request.';
        }

        if (status === HttpStatus.NOT_ACCEPTABLE) {
            jsonResponse['message'] = message || 'Not Acceptable.';
        }

        if (status === HttpStatus.INTERNAL_SERVER_ERROR) {
            jsonResponse['message'] = message || 'Internal Server Error.';
        }

        response.status(status).json(jsonResponse);
    }
}
