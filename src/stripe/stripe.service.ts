import { Injectable } from '@nestjs/common';
import { CreateCustomerDto } from './dto/createCustomer.dto';
import Stripe from 'stripe';
import { GetTokenDto } from './dto/getToken.dto';
import { CreateBankAccountDto } from './dto/createBankAccount.dto';
import { UpdateBankAccountDto } from './dto/updateBankAccount.dto';
import { RetrieveAllBankAccountDto } from './dto/retrieveAllBankAccount.dto';
import { ListBankAccountDto } from './dto/listBankAccount.dto';
import { VerfiyAccountDto } from './dto/verfiyAccount.dto';
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
import { RetrievePaymentIntent } from './dto/retrievePaymentIntent.dto';
import { ConfirmPaymentIntentDto } from './dto/confirmPaymentIntent.dto';
import { CreateAccountDto } from './dto/createAccount.dto';
import { CreateAccountlinkDto } from './dto/createAccountLink.dto';

@Injectable()
export class StripeService {
  private stripe: Stripe;
  constructor() {
    this.stripe = new Stripe(
      'sk_test_51OhqemJRSGz7CmpbXfAJ0euqJcNceRdruPU6WaUH3QFlpAun1yaD0NFFpESBioaWyaP8ynYMvI3irJ3kXsPpLByk00FB8SMwh9',
    );
  }

  async createCustomer(payload: CreateCustomerDto) {
    return await this.stripe.customers.create(payload);
  }

  async listCustomer() {
    return await this.stripe.customers.list();
  }

  async createToken(body: GetTokenDto) {
    return await this.stripe.tokens.create({ bank_account: body });
  }

  async createBankAccount(body: CreateBankAccountDto) {
    return await this.stripe.customers.createSource(body.customerId, {
      source: body.bankToken,
    });
  }

  async updateBankAccount(body: UpdateBankAccountDto) {
    return await this.stripe.customers.updateSource(
      body.customerId,
      body.bankId,
      body.updates,
    );
  }

  async listBankAccounts(body: ListBankAccountDto) {
    return await this.stripe.customers.listSources(body.customerId);
  }

  async accountStatus(body: VerfiyAccountDto) {
    return await this.stripe.customers.verifySource(
      body.customerId,
      body.bankId,
      {
        amounts: [32, 45],
      },
    );
  }

  async setupIntent() {
    return await this.stripe.setupIntents.create({
      payment_method_types: ['card'],
    });
  }

  async createCard(body: CreateCardDto) {
    return await this.stripe.customers.createSource(body.customerId, {
      source: body.token,
    });
  }

  async listCard(body: ListBankAccountDto) {
    return await this.stripe.customers.listSources(body.customerId);
  }

  async setDefaultCard(body: SetDefaultSourceDto) {
    return await this.stripe.customers.update(body.customerId, {
      default_source: body.sourceToken,
    });
  }

  async deleteCard(body: SetDefaultSourceDto) {
    return await this.stripe.customers.deleteSource(
      body.customerId,
      body.sourceToken,
    );
  }

  async createPaymentIntent(body: CreatePaymentIntent) {
    if (body.transferGroup) {
      return await this.stripe.paymentIntents.create({
        amount: body.amount,
        currency: body.currency,
        payment_method_types: body.payment_method_types,
        transfer_group: body.transferGroup,
      });
    }
    return await this.stripe.paymentIntents.create({
      amount: body.amount,
      currency: body.currency,
      payment_method_types: body.payment_method_types,
    });
  }


  async confirmPaymentIntent(body: ConfirmPaymentIntentDto){
    return await this.stripe.paymentIntents.confirm(body.intentId,{
      payment_method: body.paymentMethod
    });
  }

  async retrievePaymentIntent(body: RetrievePaymentIntent){
    return await this.stripe.paymentIntents.retrieve(body.intentId);
  }

  async createRefund(body: CreateRefundDto) {
    return await this.stripe.refunds.create({
      charge: body.chargeId,
    });
  }

  async createProduct(body: CreateProductDto) {
    return await this.stripe.products.create({
      name: body.name,
    });
  }

  async createPlan(body: CreatePlanDto) {
    return await this.stripe.plans.create({
      amount: body.amount,
      currency: body.currency,
      interval: body.interval,
      product: body.product,
    });
  }

  async updatePlan(body: UpdatePlanDto) {
    return await this.stripe.plans.update(body.planId, { ...body.updates });
  }

  async deletePlan(body: DeletePlanDto) {
    return await this.stripe.plans.del(body.planId);
  }

  async listPlans() {
    return await this.stripe.plans.list();
  }

  async createSubscription(body: CreateSubscriptionDto) {
    return await this.stripe.subscriptions.create({
      customer: body.customerId,
      items: body.items,
    });
  }

  async updateSubscription(body: UpdateSubscriptionDto) {
    return await this.stripe.subscriptions.update(body.subId, ...body.updates);
  }

  async listSubscriptions(body: any) {
    return await this.stripe.subscriptions.list(body);
  }

  async cancelSubscriptions(body: CancelSubscriptionDto) {
    return await this.stripe.subscriptions.cancel(body.subId);
  }

  async resumeSubscription(body: ResumeSubscriptionDto) {
    return await this.stripe.subscriptions.resume(body.subId);
  }

  async createPayout(body: CreatePayoutDto) {
    return await this.stripe.payouts.create({
      amount: body.amount,
      currency: body.currency,
    });
  }

  async createAccount(body:CreateAccountDto){
    return await this.stripe.accounts.create({
      type: body.type,
      country: body.country,
      capabilities: body.capabilities,
      business_type: body.business_type,
      business_profile: body.business_profile
    });
  };

  async getAccounts(){
    return await this.stripe.accounts.list();
  }

  async createAccountLink(body: CreateAccountlinkDto){
    return await this.stripe.accountLinks.create({
      account: body.account,
      refresh_url: body.refresh_url,
      return_url: body.return_url,
      type: body.type
    });
  }

  //to split payments
  async createTransfer(body: CreateTransferDto) {
    return await this.stripe.transfers.create({
      amount: body.amount,
      currency: body.currency,
      destination: body.destination,
      transfer_group: body.transferGroup,
    });
  }
}
