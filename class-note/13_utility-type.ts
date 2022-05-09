interface Product {
    id: number;
    name: string;
    price: number;
    brand: string;
    stock: number;
}

// 1. 상품 목록을 받아오기 위한 API함수
function fetchProducts(): Promise<Product[]> {
    // ..
}

// Product의 일부만 가져옴
// interface ProductDetail {
//     id: number;
//     name: string;
//     price: number;
// }

// 2. 특정 상품의 상세 정보를 나타내기 위한 함수
type shoppingItem = Pick<Product, 'id' | 'name' | 'price'>
function displayProductDetail( shoppingItem: Pick<Product, 'id' | 'name' | 'price'> ) {

}

// interface updateProduct {
//     id?: number;
//     name?: string;
//     price?: number;
//     brand?: string;
//     stock?: number;
// }

// 모든 속성을 옵셔널 (선택 가능하게)
type updateProduct = Partial<Product>
// 3. 특정 상품 정보를 업데이트 (갱신)하는 함수
function updateProductItem(ProductItem: Partial<Product>) {

}

// 4. 유틸리티 타입 구현하기 - Partial
interface UserProfile {
    username: string;
    email: string;
    profilePhotoUrl: string;
}

// interface UserProfileUpdate {
//     username?: string;
//     email?: string;
//     profilePhotoUrl?: string;
// }

// #1
// type UserProfileUpdate = {
//     username?: UserProfile['username'];
//     email?: UserProfile ['email'];
//     profilePhotoUrl?: UserProfile ['profilePhotoUrl'];
// }

// #2 (맵드 타입)
// type UserProfileUpdate = {
//     [p in 'username' | 'email' | 'profilePhotoUrl']?: UserProfile[p]
// }
// type UserProfileKeys = keyof UserProfile

// #3
type UserProfileUpdate = {
    [p in keyof UserProfile]?: UserProfile[p]
}

// #4
type Subset<T> = {
    [p in keyof T]?: T[p]
}