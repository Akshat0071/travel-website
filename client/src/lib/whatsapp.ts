export function generateWhatsAppLink(phone: string, message: string) {
  const encodedMessage = encodeURIComponent(message);
  // Remove non-digit characters from phone number
  const cleanPhone = phone.replace(/\D/g, ""); 
  return `https://wa.me/${cleanPhone}?text=${encodedMessage}`;
}

export function formatCurrency(amount: number) {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0
  }).format(amount);
}
