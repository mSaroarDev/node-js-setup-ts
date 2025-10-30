/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { ErrorRequestHandler } from 'express';
import { TErrorSources } from '../interfaces/error';
import configs from '../configs/configs';
import AppError from '../errors/AppError';

const globalErrorHandler: ErrorRequestHandler = (err, req, res, next) => {
	// setting default values
	let statusCode = 500;
	let message = 'Something went wrong';
	let errorSources: TErrorSources = [
		{
			path: '',
			message: 'Something went wrong'
		}
	];

  if (err instanceof AppError) {
		statusCode = err?.statusCode;
		message = err?.message;
		errorSources = [
			{
				path: '',
				message: err?.message
			}
		];
	} else if (err instanceof Error) {
		message = err?.message;
		errorSources = [
			{
				path: '',
				message: err?.message
			}
		];
	}

	// actual return
	return res.status(statusCode).json({
		success: false,
		message,
		errorSources,
		err,
		stack: configs.NODE_ENV === 'development' ? err?.stack : null
	});
};

export default globalErrorHandler;