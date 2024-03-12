import { Body, Controller, Delete, Get, Patch, Post } from '@nestjs/common';
import { CreateCustomerDto } from './dto/createCustomer.dto';
import { StripeService } from './stripe.service';
import { GetTokenDto } from './dto/getToken.dto';
import { CreateBankAccountDto } from './dto/createBankAccount.dto';
import { UpdateBankAccountDto } from './dto/updateBankAccount.dto';
import { ListBankAccountDto } from './dto/listBankAccount.dto';
import { CheckAccountStatusDto } from './dto/checkBankAccount.dto';
import { CreateCardDto } from './dto/createCard.dto';
import { SetDefaultSourceDto } from './dto/setDefaultSource.dto';
import { CreatePaymentIntent } from './dto/createPaymentIntent.dto';
import { CreateRefundDto } from './dto/createRefund.dto';
import { CreateProductDto } from './dto/createProduct.dto';
import { CreatePlanDto } from './dto/createPlan.dto';
import { UpdatePlanDto } from './dto/updatePlan.dto';
import { DeletePlanDto } from './dto/deletePlan.dto';
import { CreateSubscriptionDto } from './dto/createSubscription.dto';
import { UpdateSubscriptionDto } from './dto/updateSubscription.dto';
import { CancelSubscriptionDto } from './dto/cancelSubscription.dto';
import { ResumeSubscriptionDto } from './dto/resumeSubscription.dto';
import { CreatePayoutDto } from './dto/createPayout.dto';
import { CreateTransferDto } from './dto/createTransfer.dto';

@Controller('stripe')
export class StripeController {
    constructor(private readonly stripeService: StripeService){}

    @Post("/create-customer")
    async createCustomer(@Body() body: CreateCustomerDto){
        return this.stripeService.createCustomer(body);
    }

    @Get("/list-customer")
    async listCustomer(){
        return this.stripeService.listCustomer();
    }

    @Post("/create-token")
    async getToken(@Body() body: GetTokenDto){
        return this.stripeService.createToken(body);
    }

    @Post("/create-bank-account")
    async createBankAccount(@Body() body: CreateBankAccountDto){
        return this.stripeService.createBankAccount(body);
    }

    @Patch("/update-bank-account")
    async updateBankAccount(@Body() body: UpdateBankAccountDto){
        return this.stripeService.updateBankAccount(body);
    }

    @Get("/list-bank-accounts")
    async listBankAccounts(@Body() body: ListBankAccountDto){
        return this.stripeService.listBankAccounts(body);
    }

    @Get("/check-account-status")
    async accountStatus(@Body() body: CheckAccountStatusDto){
        return this.stripeService.accountStatus(body);
    }

    @Post("/setup-intent")
    async setupIntent(){
        return this.stripeService.setupIntent();
    }

    @Post("/create-card")
    async createCard(@Body() body: CreateCardDto){
        return this.stripeService.createCard(body);
    }

    @Get("/list-cards")
    async listCards(@Body() body: ListBankAccountDto){
        return this.stripeService.listCard(body);
    }

    @Patch("/set-default-card")
    async setDefaultCard(@Body() body: SetDefaultSourceDto){
        return this.stripeService.setDefaultCard(body);
    }

    @Delete("/delete-card")
    async deleteCard(@Body() body: SetDefaultSourceDto){
        return this.stripeService.deleteCard(body);
    }

    @Post("/create-payment-intent")
    async createPaymentIntent(@Body() body: CreatePaymentIntent){
        return this.stripeService.createPaymentIntent(body);
    }

    @Post("/create-refund")
    async createRefund(@Body() body: CreateRefundDto){
        return this.stripeService.createRefund(body);
    }

    @Post("/create-product")
    async createProduct(@Body() body: CreateProductDto){
        return this.stripeService.createProduct(body);
    }

    @Post("/create-plan")
    async createPlan(@Body() body: CreatePlanDto){
        return this.stripeService.createPlan(body);
    }

    @Patch("/update-plan")
    async updatePlan(@Body() body: UpdatePlanDto){
        return this.stripeService.updatePlan(body);
    }

    @Delete("/delete-plan")
    async deletePlan(@Body() body: DeletePlanDto){
        return this.stripeService.deletePlan(body);
    }

    @Get("/list-plans")
    async listPlans(){
        return this.stripeService.listPlans();
    }

    @Post("/create-subscription")
    async createSubsctiption(@Body() body: CreateSubscriptionDto){
        return this.stripeService.createSubscription(body);
    }

    @Post("/update-subscription")
    async updateSubsctiption(@Body() body: UpdateSubscriptionDto){
        return this.stripeService.updateSubscription(body);
    }

    @Get("/list-subscriptions")
    async listSubsctiption(@Body() body: any){
        return this.stripeService.listSubscriptions(body);
    }

    @Patch("/cancel-subscription")
    async cancelSubscription(@Body() body: CancelSubscriptionDto){
        return this.stripeService.cancelSubscriptions(body);
    }

    @Patch("/resume-subscription")
    async resumeSubsctiption(@Body() body: ResumeSubscriptionDto){
        return this.stripeService.resumeSubscription(body);
    }

    @Post("/create-payout")
    async createPayout(@Body() body: CreatePayoutDto){
        return this.stripeService.createPayout(body);
    }

    @Post("/create-transfer")
    async createTransfer(@Body() body: CreateTransferDto){
        return this.stripeService.createTransfer(body);
    }
    
}
