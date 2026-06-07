'use client';

import React, { useState } from 'react';
import { X, CheckCircle, CreditCard, Landmark, Wallet, Percent, Sparkles, Receipt, Download } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  itemName: string;
  itemPrice: number; // Base price in INR
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({
  isOpen,
  onClose,
  itemName,
  itemPrice,
}) => {
  const [coupon, setCoupon] = useState('');
  const [discountInfo, setDiscountInfo] = useState<{ code: string; percent: number; amount: number } | null>(null);
  const [couponError, setCouponError] = useState('');
  const [couponSuccess, setCouponSuccess] = useState('');
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'upi' | 'netbanking' | 'wallet' | 'emi'>('card');
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [invoice, setInvoice] = useState<any>(null);

  // Form details
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [gstin, setGstin] = useState('');
  const [billingName, setBillingName] = useState('');

  // Apply Coupon Code
  const handleApplyCoupon = () => {
    setCouponError('');
    setCouponSuccess('');
    const code = coupon.trim().toUpperCase();

    if (!code) return;

    if (code === 'FUTUREAI') {
      const discount = itemPrice * 0.2;
      setDiscountInfo({ code, percent: 20, amount: discount });
      setCouponSuccess('Success! 20% future-skills discount applied!');
    } else if (code === 'WELCOME10') {
      const discount = itemPrice * 0.1;
      setDiscountInfo({ code, percent: 10, amount: discount });
      setCouponSuccess('Success! 10% welcome discount applied!');
    } else {
      setCouponError('Invalid coupon code. Try WELCOME10 or FUTUREAI');
      setDiscountInfo(null);
    }
  };

  // Pricing calculations
  const basePriceAfterDiscount = itemPrice - (discountInfo?.amount || 0);
  const gstRate = 0.18; // 18% GST
  const cgstAmount = Number((basePriceAfterDiscount * (gstRate / 2)).toFixed(2));
  const sgstAmount = Number((basePriceAfterDiscount * (gstRate / 2)).toFixed(2));
  const totalGst = cgstAmount + sgstAmount;
  const grandTotal = Number((basePriceAfterDiscount + totalGst).toFixed(2));

  // Handle Payment Submit
  const handlePayment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !phone || !billingName) {
      alert('Please fill out all billing details.');
      return;
    }

    setIsProcessing(true);

    // Simulate RazorPay API Network Delay
    setTimeout(() => {
      setIsProcessing(false);
      setPaymentSuccess(true);

      // Generate invoice
      const newInvoice = {
        invoiceNo: `INV-2026-${Math.floor(10000 + Math.random() * 90000)}`,
        date: new Date().toLocaleDateString('en-IN', {
          day: 'numeric',
          month: 'long',
          year: 'numeric',
        }),
        itemName,
        billingName,
        email,
        phone,
        gstin: gstin || 'Not Provided',
        subtotal: itemPrice,
        discount: discountInfo?.amount || 0,
        taxableValue: basePriceAfterDiscount,
        cgst: cgstAmount,
        sgst: sgstAmount,
        totalGst,
        grandTotal,
        paymentMethod: paymentMethod.toUpperCase(),
        transactionId: `pay_RZP_${Math.random().toString(36).substring(2, 12).toUpperCase()}`,
      };
      setInvoice(newInvoice);
    }, 2000);
  };

  // Custom function to print invoice
  const handlePrintInvoice = () => {
    window.print();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="relative w-full max-w-2xl overflow-hidden bg-white shadow-2xl rounded-2xl border border-slate-100"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-slate-50">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 bg-[#0066FF] rounded-full animate-ping" />
              <h3 className="font-sans font-bold text-lg text-slate-800">
                {!paymentSuccess ? 'Secure Pay with Razorpay' : 'Payment Success'}
              </h3>
            </div>
            <button
              onClick={onClose}
              className="p-1 px-2.5 py-1 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-full transition-colors text-sm font-semibold"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {!paymentSuccess ? (
            <div className="grid grid-cols-1 md:grid-cols-12">
              {/* Left Column: Form and Payment Type */}
              <div className="p-6 md:col-span-7 border-r border-slate-100">
                <form onSubmit={handlePayment} className="space-y-4">
                  <h4 className="font-heading font-semibold text-sm uppercase tracking-wider text-slate-500 mb-2">
                    Billing Details
                  </h4>

                  <div>
                    <label className="block text-xs font-medium text-slate-600 mb-1">Full Name</label>
                    <input
                      required
                      type="text"
                      className="w-full px-3 py-2 text-sm border border-slate-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500"
                      placeholder="Anusha Kumar"
                      value={billingName}
                      onChange={(e) => setBillingName(e.target.value)}
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-medium text-slate-600 mb-1">Email ID</label>
                      <input
                        required
                        type="email"
                        className="w-full px-3 py-2 text-sm border border-slate-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500"
                        placeholder="your@email.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-slate-600 mb-1">Phone Number</label>
                      <input
                        required
                        type="tel"
                        className="w-full px-3 py-2 text-sm border border-slate-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500"
                        placeholder="9876543210"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <label className="block text-xs font-medium text-slate-600">GSTIN (Optional)</label>
                      <span className="text-[10px] text-blue-600">18% GST Invoice available</span>
                    </div>
                    <input
                      type="text"
                      className="w-full px-3 py-2 text-sm border border-slate-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 uppercase"
                      placeholder="e.g. 29GGGGG1314R9Z9"
                      value={gstin}
                      onChange={(e) => setGstin(e.target.value)}
                    />
                  </div>

                  <h4 className="font-heading font-semibold text-sm uppercase tracking-wider text-slate-500 pt-2 mb-2">
                    Payment Method
                  </h4>

                  <div className="grid grid-cols-5 gap-2">
                    {[
                      { id: 'card', name: 'Card', icon: CreditCard },
                      { id: 'upi', name: 'UPI', icon: Sparkles },
                      { id: 'netbanking', name: 'NetBank', icon: Landmark },
                      { id: 'wallet', name: 'Wallet', icon: Wallet },
                      { id: 'emi', name: 'EMI', icon: Percent },
                    ].map((method) => {
                      const Icon = method.icon;
                      const selected = paymentMethod === method.id;
                      return (
                        <button
                          key={method.id}
                          type="button"
                          onClick={() => setPaymentMethod(method.id as any)}
                          className={`flex flex-col items-center justify-center p-2 rounded-lg border text-center transition-all cursor-pointer ${
                            selected
                              ? 'border-blue-600 bg-blue-50/50 text-blue-600 font-medium'
                              : 'border-slate-100 hover:bg-slate-50 text-slate-500'
                          }`}
                        >
                          <Icon className="w-5 h-5 mb-1" />
                          <span className="text-[10px] leading-tight break-all">{method.name}</span>
                        </button>
                      );
                    })}
                  </div>

                  {paymentMethod === 'card' && (
                    <div className="p-3 bg-slate-50 rounded-lg border border-slate-100 space-y-2 mt-2">
                      <input
                        type="text"
                        placeholder="Card Number"
                        className="w-full px-2.5 py-1.5 text-xs border border-slate-200 rounded bg-white"
                        defaultValue="4111 2222 3333 4444"
                      />
                      <div className="grid grid-cols-2 gap-2">
                        <input
                          type="text"
                          placeholder="MM/YY"
                          className="px-2.5 py-1.5 text-xs border border-slate-200 rounded bg-white text-center"
                          defaultValue="12/28"
                        />
                        <input
                          type="password"
                          placeholder="CVV"
                          className="px-2.5 py-1.5 text-xs border border-slate-200 rounded bg-white text-center"
                          defaultValue="123"
                        />
                      </div>
                    </div>
                  )}

                  {paymentMethod === 'upi' && (
                    <div className="p-3 bg-slate-50 rounded-lg border border-slate-100 space-y-2 mt-2">
                      <div className="flex gap-2">
                        <input
                          type="text"
                          placeholder="yourname@upi"
                          className="flex-1 px-2.5 py-1.5 text-xs border border-slate-200 rounded bg-white"
                        />
                        <button type="button" className="px-3 py-1 bg-slate-200 text-slate-700 text-xs font-semibold rounded">
                          Verify
                        </button>
                      </div>
                      <p className="text-[10px] text-slate-400 text-center">
                        Supports GPay, PhonePe, Paytm, or BHIM UPI
                      </p>
                    </div>
                  )}

                  {paymentMethod === 'emi' && (
                    <div className="p-3 bg-slate-50 rounded-lg border border-slate-100 text-xs space-y-1.5 mt-2 text-slate-600">
                      <p className="font-semibold">Credit Card EMI Plans:</p>
                      <div className="flex justify-between border-b border-dashed border-slate-200 pb-1 font-mono text-[11px]">
                        <span>HDFC Bank EMI (3 months)</span>
                        <span className="font-semibold">₹{(grandTotal / 3).toFixed(2)}/mo</span>
                      </div>
                      <div className="flex justify-between border-b border-dashed border-slate-200 pb-1 font-mono text-[11px]">
                        <span>ICICI Bank EMI (6 months)</span>
                        <span className="font-semibold">₹{(grandTotal / 6).toFixed(2)}/mo</span>
                      </div>
                      <p className="text-[10px] text-slate-400">0% Interest Credit/Debit EMI plans available</p>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isProcessing}
                    className="w-full py-3 mt-4 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-md hover:shadow-lg transition-all focus:outline-none flex items-center justify-center gap-2 cursor-pointer disabled:bg-blue-400"
                  >
                    {isProcessing ? (
                      <>
                        <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        <span>Authenticating Razorpay Gateway...</span>
                      </>
                    ) : (
                      <span>Pay Securely ₹{grandTotal}</span>
                    )}
                  </button>
                </form>
              </div>

              {/* Right Column: Pricing details */}
              <div className="p-6 md:col-span-5 bg-slate-50 flex flex-col justify-between">
                <div>
                  <h4 className="font-heading font-semibold text-xs uppercase tracking-wider text-slate-400 mb-3">
                    Order Summary
                  </h4>
                  <div className="mb-4">
                    <p className="text-sm font-bold text-slate-800 line-clamp-2">{itemName}</p>
                    <p className="text-xs text-slate-400 mt-0.5">Secure Lifetime Enrollment</p>
                  </div>

                  {/* Coupon section */}
                  <div className="border-t border-b border-slate-200/60 py-3 mb-4 space-y-2">
                    <label className="block text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
                      Promo / Coupon Code
                    </label>
                    <div className="flex gap-2">
                      <input
                        type="text"
                        placeholder="WELCOME10 / FUTUREAI"
                        value={coupon}
                        onChange={(e) => setCoupon(e.target.value)}
                        className="flex-1 min-w-0 px-2.5 py-1.5 text-xs uppercase border border-slate-200 rounded bg-white text-slate-800 font-mono focus:outline-none focus:ring-1 focus:ring-blue-500"
                      />
                      <button
                        type="button"
                        onClick={handleApplyCoupon}
                        className="px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs rounded transition-colors cursor-pointer"
                      >
                        Apply
                      </button>
                    </div>
                    {couponError && <p className="text-[10px] text-red-500 font-medium">{couponError}</p>}
                    {couponSuccess && <p className="text-[10px] text-emerald-600 font-medium">{couponSuccess}</p>}
                  </div>

                  {/* Price breakdown */}
                  <div className="space-y-2 text-xs text-slate-600">
                    <div className="flex justify-between">
                      <span>Base Tuition Fee</span>
                      <span className="font-mono font-medium">₹{itemPrice.toFixed(2)}</span>
                    </div>
                    {discountInfo && (
                      <div className="flex justify-between text-emerald-600 font-medium">
                        <span>Discount ({discountInfo.percent}%)</span>
                        <span className="font-mono">-₹{discountInfo.amount.toFixed(2)}</span>
                      </div>
                    )}
                    <div className="flex justify-between border-t border-slate-200/50 pt-2 text-slate-400">
                      <span>Taxable Value</span>
                      <span className="font-mono text-slate-700">₹{basePriceAfterDiscount.toFixed(2)}</span>
                    </div>

                    <div className="flex justify-between">
                      <div className="flex items-center gap-1">
                        <span>CGST (9%)</span>
                      </div>
                      <span className="font-mono">₹{cgstAmount}</span>
                    </div>
                    <div className="flex justify-between">
                      <div className="flex items-center gap-1">
                        <span>SGST (9%)</span>
                      </div>
                      <span className="font-mono">₹{sgstAmount}</span>
                    </div>
                  </div>
                </div>

                <div className="border-t border-slate-200 pt-4 mt-6">
                  <div className="flex justify-between items-baseline mb-2">
                    <span className="text-xs font-bold text-slate-800">Total Payable</span>
                    <span className="text-xl font-mono font-extrabold text-blue-600">
                      ₹{grandTotal}
                    </span>
                  </div>
                  <div className="bg-blue-50/50 border border-blue-100 rounded-lg p-2.5 text-[9px] text-blue-800 text-center">
                    🔒 Razorpay Trusted Security • GST Invoicing ready (INR)
                  </div>
                </div>
              </div>
            </div>
          ) : (
            /* Success & Invoice Screen */
            <div className="p-6 md:p-8 text-center bg-white space-y-6 max-h-[80vh] overflow-y-auto">
              <div className="flex flex-col items-center justify-center">
                <CheckCircle className="w-16 h-16 text-emerald-500 mb-2 animate-bounce" />
                <h3 className="font-sans font-extrabold text-2xl text-slate-800">
                  Congratulations! Enrollment Confirmed
                </h3>
                <p className="text-sm text-slate-500 max-w-sm mt-1">
                  Your seat in <strong>{itemName}</strong> has been successfully booked with Natton SkillX.
                </p>
              </div>

              {/* Dynamic GST Tax Invoice Block */}
              <div id="tax-invoice-sheet" className="text-left bg-slate-50 border border-slate-200 rounded-xl p-5 font-mono text-xs text-slate-800 max-w-lg mx-auto shadow-inner space-y-3">
                <div className="flex justify-between items-start border-b border-slate-200 pb-3">
                  <div>
                    <h5 className="font-sans font-bold text-xs uppercase text-[#0A2540]">NATTON SKILLX PVT. LTD.</h5>
                    <p className="text-[10px] text-slate-400 mt-0.5">GSTIN: 29AAFCN5489D1ZF</p>
                    <p className="text-[10px] text-slate-400">Bengaluru, Karnataka - 560001</p>
                  </div>
                  <div className="text-right">
                    <h4 className="font-sans font-extrabold tracking-widest text-[#0066FF] text-sm">TAX INVOICE</h4>
                    <p className="text-[9px] font-bold text-slate-500 mt-1">{invoice?.invoiceNo}</p>
                    <p className="text-[9px] text-slate-400">{invoice?.date}</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 text-[10px] text-slate-600 border-b border-slate-200 pb-3">
                  <div>
                    <p className="font-bold text-slate-500 uppercase">Billed To:</p>
                    <p className="font-bold font-sans text-slate-800">{invoice?.billingName}</p>
                    <p>{invoice?.email}</p>
                    <p>{invoice?.phone}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-slate-500 uppercase">Payment Summary:</p>
                    <p>Method: {invoice?.paymentMethod}</p>
                    <p className="text-[9px] break-all leading-tight">Txn ID: {invoice?.transactionId}</p>
                    {gstin && <p>Buyer GSTIN: <span className="uppercase font-bold">{invoice?.gstin}</span></p>}
                  </div>
                </div>

                <div className="space-y-1.5 border-b border-slate-200 pb-3 text-[11px]">
                  <div className="flex justify-between font-bold text-slate-700">
                    <span>Particulars / Course</span>
                    <span>Amt (INR)</span>
                  </div>
                  <div className="flex justify-between text-slate-600 font-sans">
                    <span className="line-clamp-1">{invoice?.itemName}</span>
                    <span className="font-mono">₹{invoice?.subtotal.toFixed(2)}</span>
                  </div>
                  {invoice?.discount > 0 && (
                    <div className="flex justify-between text-emerald-600">
                      <span>Less: Promotional Discount</span>
                      <span>-₹{invoice?.discount.toFixed(2)}</span>
                    </div>
                  )}
                </div>

                <div className="space-y-1 text-[10px] text-slate-600 text-right">
                  <div className="flex justify-between pl-20">
                    <span className="font-bold text-slate-500">Taxable Value:</span>
                    <span>₹{invoice?.taxableValue.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between pl-20">
                    <span>CGST (9%):</span>
                    <span>₹{invoice?.cgst.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between pl-20">
                    <span>SGST (9%):</span>
                    <span>₹{invoice?.sgst.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between pl-20 text-slate-800 text-[11px] font-bold border-t border-slate-200 pt-2">
                    <span>GRAND TOTAL (Net Payable):</span>
                    <span>₹{invoice?.grandTotal.toFixed(2)}</span>
                  </div>
                </div>

                <div className="text-center text-[9px] text-slate-400 pt-2 font-sans">
                  This is a computer-generated invoice and requires no signature.
                </div>
              </div>

              {/* Success CTAs */}
              <div className="flex flex-col sm:flex-row justify-center items-center gap-3">
                <button
                  onClick={handlePrintInvoice}
                  className="flex items-center gap-2 px-5 py-2 border border-slate-200 hover:border-slate-300 rounded-lg text-xs font-semibold text-slate-600 hover:bg-slate-50 transition-all cursor-pointer"
                >
                  <Download className="w-4 h-4" />
                  Print / Save Invoice
                </button>
                <button
                  onClick={onClose}
                  className="px-6 py-2 bg-slate-900 border border-slate-900 hover:bg-slate-800 text-white rounded-lg text-xs font-semibold transition-all cursor-pointer"
                >
                  Start Learning Now
                </button>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default CheckoutModal;
