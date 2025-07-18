// export interface API_RESPONSE {
//   message: string;
//   result: boolean;
//   data: any;
// }

// export class Departments {
//   deptId: number;
//   deptName: string;
//   deptHeadEmpId: number;
//   createdDate: Date;
//   constructor() {
//     this.createdDate = new Date();
//     this.deptId = 0;
//     this.deptName = '';
//     this.deptHeadEmpId = 0;
//   }
// }

export class LoginDetails {
  emailId: string;
  password: string;
  constructor() {
    this.emailId = '';
    this.password = '';
  }
}

export interface User {
  id:number
  name: string;
  email: string;
  role: string;
  gender: string
}
