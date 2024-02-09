import { IsObject, IsString } from "class-validator";

export class UpdateBankAccountDto{

    @IsString()
    bankId: string;
    
    @IsString()
    customerId: string;

    @IsObject()
    updates: updateParam;
}

interface updateParam {
    account_holder_name?: string;
    account_holder_type?: 'company' | 'individual';

    metadata?: {
        [name: string]: string | number | null;
    }
}