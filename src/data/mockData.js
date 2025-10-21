// data/mockData.js - Sample data for the prototype
export const mockTickets = [
  {
    id: 'T001',
    licensePlate: 'ABC123',
    violationType: 'speeding',
    location: 'Main St & 1st Ave',
    officerId: 'O001',
    fineAmount: 150,
    status: 'issued',
    createdAt: '2023-05-15T10:30:00Z',
    notes: 'Vehicle was traveling 65 in a 45 zone'
  },
  {
    id: 'T002',
    licensePlate: 'XYZ789',
    violationType: 'red_light',
    location: 'Oak St & Pine Ave',
    officerId: 'O002',
    fineAmount: 100,
    status: 'paid',
    createdAt: '2023-05-14T14:22:00Z',
    notes: 'Ran red light at intersection'
  },
  {
    id: 'T003',
    licensePlate: 'DEF456',
    violationType: 'illegal_parking',
    location: 'City Center Parking',
    officerId: 'O003',
    fineAmount: 75,
    status: 'contested',
    createdAt: '2023-05-13T09:15:00Z',
    notes: 'Parked in no-parking zone during rush hour'
  },
  {
    id: 'T004',
    licensePlate: 'GHI789',
    violationType: 'seat_belt',
    location: 'Highway 101',
    officerId: 'O001',
    fineAmount: 50,
    status: 'issued',
    createdAt: '2023-05-12T16:45:00Z',
    notes: 'Driver not wearing seat belt'
  }
];

export const mockOfficers = [
  {
    id: 'O001',
    name: 'John Smith',
    badgeNumber: '1234',
    email: 'john.smith@traffic.gov',
    status: 'active',
    joinDate: '2020-03-15'
  },
  {
    id: 'O002',
    name: 'Maria Garcia',
    badgeNumber: '5678',
    email: 'maria.garcia@traffic.gov',
    status: 'active',
    joinDate: '2019-07-22'
  },
  {
    id: 'O003',
    name: 'Robert Johnson',
    badgeNumber: '9012',
    email: 'robert.johnson@traffic.gov',
    status: 'active',
    joinDate: '2021-01-10'
  },
  {
    id: 'O004',
    name: 'Sarah Williams',
    badgeNumber: '3456',
    email: 'sarah.williams@traffic.gov',
    status: 'inactive',
    joinDate: '2018-11-05'
  }
];