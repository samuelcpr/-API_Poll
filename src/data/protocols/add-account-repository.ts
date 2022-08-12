import {
	AccountModel,
	AddAccountModel,
} from "../usecase/add-account/db-add-account-protocols";

export interface AddAccountRepository {
	add(accountData: AddAccountModel): Promise<AccountModel>;
}
