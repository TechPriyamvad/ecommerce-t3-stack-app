export function createAccount(input){
    const { name, email, password } = input;
    return {
      message: `User ${name} created successfully with email ${email} and password ${password}`,
    };
}