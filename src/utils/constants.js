export const VIOLATION_TYPES = {
  SPEEDING: 'speeding',
  RED_LIGHT: 'red_light',
  ILLEGAL_PARKING: 'illegal_parking',
  SEAT_BELT: 'seat_belt',
  DUI: 'dui',
  OTHER: 'other'
};

export const TICKET_STATUS = {
  ISSUED: 'issued',
  PAID: 'paid',
  CONTESTED: 'contested',
  DISMISSED: 'dismissed'
};

export const OFFICER_STATUS = {
  ACTIVE: 'active',
  INACTIVE: 'inactive',
  SUSPENDED: 'suspended'
};

export const FINE_AMOUNTS = {
  [VIOLATION_TYPES.SPEEDING]: 150,
  [VIOLATION_TYPES.RED_LIGHT]: 100,
  [VIOLATION_TYPES.ILLEGAL_PARKING]: 75,
  [VIOLATION_TYPES.SEAT_BELT]: 50,
  [VIOLATION_TYPES.DUI]: 500,
  [VIOLATION_TYPES.OTHER]: 100
};