interface Address {
    street: string;
    city: string;
    country: string;
}
interface Profile {
    bio: string;
    interests: string[];
}
export interface User {
    _id: string;
    name: string;
    email: string;
    address: Address;
    profile: Profile;
    age: number;
}
export {};
