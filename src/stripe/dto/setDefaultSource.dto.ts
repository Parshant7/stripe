import { IsString } from "class-validator";

export class SetDefaultSourceDto{

    @IsString()
    customerId: string;

    @IsString()
    sourceToken: string;
}