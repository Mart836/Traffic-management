import { FINE_AMOUNTS } from './constants';

export const formatCurrency = (amount) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format(amount);
};

export const formatDate = (dateString) => {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });
};

export const calculateFine = (violationType, isRepeatOffense = false) => {
  const baseFine = FINE_AMOUNTS[violationType] || FINE_AMOUNTS.other;
  return isRepeatOffense ? baseFine * 1.5 : baseFine;
};

export const generateTicketId = () => {
  const timestamp = Date.now().toString().slice(-6);
  const random = Math.random().toString(36).substring(2, 5).toUpperCase();
  return `TKT-${timestamp}-${random}`;
};

export const validateLicensePlate = (plate) => {
  const plateRegex = /^[A-Z0-9]{2,10}$/;
  return plateRegex.test(plate.replace(/\s/g, ''));
};