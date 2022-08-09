import { EmailValidatorAdapter } from "./email-validator-Adapter";
import validator from "validator";

jest.mock("validator", () => ({
	isEmail(): boolean {
		return true;
	},
}));

const makeSut = (): EmailValidatorAdapter => {
	return new EmailValidatorAdapter();
};

describe("EmailValiadtor Adapter", () => {
	test("shold return false if validator retuns false", () => {
		const sut = makeSut();
		jest.spyOn(validator, "isEmail").mockReturnValueOnce(false);
		const isValid = sut.isValid("invalid_email@mail.com");
		expect(isValid).toBe(false);
	});
	test("shold return true if validator retuns true", () => {
		const sut = makeSut();
		const isValid = sut.isValid("valid_email@mail.com");
		expect(isValid).toBe(true);
	});
	test("shold return true if validator retuns true", () => {
		const sut = makeSut();
		const isEmailSpy = jest.spyOn(validator, "isEmail");
		sut.isValid("any_email@mail.com");
		expect(isEmailSpy).toHaveBeenCalledWith("any_email@mail.com");
	});
});
