import { IsObject, IsString } from "class-validator";

export class ListBankAccountDto{

    // @IsString()
    // bankId: string;
    
    @IsString()
    customerId: string;

    // @IsObject()
    // updates: updateParam;
}
