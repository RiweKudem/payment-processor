// types.ts
import { z } from 'zod';

export const PaymentMethod = z.enum(['CREDIT_CARD', 'PAYPAL', 'BANK_TRANSFER']);
export const Currency = z.enum(['USD', 'EUR', 'GBP', 'JPY']);

export interface CreatePaymentRequest {
  amount: number;
  currency: Currency;
  paymentMethod: PaymentMethod;
  userId: string;
}

export interface CreatePaymentResponse {
  id: string;
  amount: number;
  currency: Currency;
  paymentMethod: PaymentMethod;
  userId: string;
  status: 'PENDING' | 'SUCCESS' | 'FAILED';
  message: string;
}

export interface GetPaymentRequest {
  id: string;
}

export interface GetPaymentResponse {
  id: string;
  amount: number;
  currency: Currency;
  paymentMethod: PaymentMethod;
  userId: string;
  status: 'PENDING' | 'SUCCESS' | 'FAILED';
  message: string;
}

export interface UpdatePaymentRequest {
  id: string;
  amount?: number;
  currency?: Currency;
  paymentMethod?: PaymentMethod;
  userId?: string;
  status?: 'PENDING' | 'SUCCESS' | 'FAILED';
  message?: string;
}

export interface UpdatePaymentResponse {
  id: string;
  amount: number;
  currency: Currency;
  paymentMethod: PaymentMethod;
  userId: string;
  status: 'PENDING' | 'SUCCESS' | 'FAILED';
  message: string;
}