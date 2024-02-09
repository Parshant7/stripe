import { IsObject, IsString } from "class-validator";

export class RetrieveAllBankAccountDto{
    
    @IsString()
    customerId: string;

    @IsObject()
    filter: updateParam;
}

interface updateParam {
    account_holder_name?: string;
    account_holder_type?: 'company' | 'individual';

    metadata?: {
        [name: string]: string | number | null;
    }
}