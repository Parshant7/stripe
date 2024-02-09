import { IsNumber, IsString } from "class-validator";

export class CreatePlanDto{

    @IsNumber()
    amount: number;

    @IsString()
    currency: string;

    @IsString()
    interval: 'day' | 'month' | 'week' | 'year';

    @IsString()
    product: string;
    
}