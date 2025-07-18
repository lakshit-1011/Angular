import { User } from "../models/Api_Model";

export const Constant = {
  API_END_POINTS: {
    GET_USER: '',
    CREATE_USER: '',
    UPDATE_USER: '',
    DELETE_USER: '',
    LOGIN: 'Login',
  },
  VALIDATION_MESSAGE: {
    REQUIRED: 'This is required',
  },
};

export const users: User[] = [
  {
    id:1,
    name: 'Aarav Mehta',
    email: 'aarav.mehta@example.com',
    role: 'student',
    gender: 'male',
  },
  {
    id:2,
    name: 'Sneha Sharma',
    email: 'sneha.sharma@example.com',
    role: 'teacher',
    gender: 'female',
  },
  {
    id:3,
    name: 'Ravi Kapoor',
    email: 'ravi.kapoor@example.com',
    role: 'student',
    gender: 'male',
  },
  {
    id:4,
    name: 'Priya Desai',
    email: 'priya.desai@example.com',
    role: 'teacher',
    gender: 'female',
  },
  {
    id:5,
    name: 'Karan Singh',
    email: 'karan.singh@example.com',
    role: 'other',
    gender: 'male',
  },
  {
    id:6,
    name: 'Meena Joshi',
    email: 'meena.joshi@example.com',
    role: 'student',
    gender: 'female',
  },
 
];
