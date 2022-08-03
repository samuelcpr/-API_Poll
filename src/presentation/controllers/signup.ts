import { MissingParamError } from "../erros/missing-param-error";
import { HttpResponse, HttpRequest } from "../protocools/http";
import { badRequest } from "../helpers/http-helpers";

export class SignUpController {
	handle(httpRequest: HttpRequest): HttpResponse {
		const requiredFields = [
			"name",
			"email",
			"password",
			"passwordConfirmation",
		];
		for (const field of requiredFields) {
			if (!httpRequest.body[field]) {
				return badRequest(new MissingParamError(field));
			}
		}
	}
}
