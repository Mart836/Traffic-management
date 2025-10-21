export const validateTicketForm = (data) => {
  const errors = {};

  if (!data.licensePlate?.trim()) {
    errors.licensePlate = 'License plate is required';
  }

  if (!data.violationType) {
    errors.violationType = 'Violation type is required';
  }

  if (!data.location?.trim()) {
    errors.location = 'Location is required';
  }

  if (!data.officerId) {
    errors.officerId = 'Issuing officer is required';
  }

  if (!data.fineAmount || data.fineAmount <= 0) {
    errors.fineAmount = 'Valid fine amount is required';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
};

export const validateOfficerForm = (data) => {
  const errors = {};

  if (!data.name?.trim()) {
    errors.name = 'Name is required';
  }

  if (!data.badgeNumber?.trim()) {
    errors.badgeNumber = 'Badge number is required';
  }

  if (!data.email?.trim()) {
    errors.email = 'Email is required';
  } else if (!/\S+@\S+\.\S+/.test(data.email)) {
    errors.email = 'Email is invalid';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
};