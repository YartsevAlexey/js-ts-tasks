/**
 * Write a function to group two types of users into EMPLOYEE and CONTRACTOR groups
 *
 * A function should return an object consists of two arrays of grouped users:
 * {
 *   employees: [...]
 *   contractors: [...]
 * }
 * @param {Array<unknown>} users
 * @returns {Object<employees: Array<any>, contractors: Array<any>>}
 */
module.exports.groupUsers = function (users: Array<unknown>): Record<'employees' | 'contractors', Array<unknown>> {
  const sortedUser = { employees: [] as Array<unknown>, contractors: [] as Array<unknown> };

  type User = {
    type: string;
  };

  const isUser = (x: unknown): x is User => (x as User).type !== undefined;

  users.forEach((el: unknown) => {
    if (isUser(el)) {
      if (el.type === 'EMPLOYEE') {
        sortedUser.employees.push(el);
      } else {
        sortedUser.contractors.push(el);
      }
    }
  });

  return sortedUser;
};
