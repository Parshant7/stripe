import { Type } from "class-transformer";
import { IsArray, IsObject, IsString, ValidateNested } from "class-validator";

export class CreateSubscriptionDto{
    @IsString()
    customerId: string;

    @IsArray()
    @ValidateNested({each: true})
    @Type(()=> items)
    items: items[]
}

class items{
    @IsString()
    price:string
}