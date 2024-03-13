import { IsObject, IsString } from "class-validator";

export class RetrievePaymentIntent{
    @IsString()
    intentId: string;
}