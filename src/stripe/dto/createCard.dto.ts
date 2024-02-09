import { IsObject, IsString } from "class-validator";

export class CreateCardDto{

    @IsString()
    customerId: string;

    @IsString()
    token: string;
}