import { API_BASE_URL, ACCESS_TOKEN } from '../../constants/Connect';

const request = (options) => {
    const headers = new Headers({
        'Content-Type': 'application/json',
    })
    
    if(localStorage.getItem(ACCESS_TOKEN)) {
        headers.append('Authorization', 'Bearer ' + localStorage.getItem(ACCESS_TOKEN))
    }

    const defaults = {headers: headers};
    options = Object.assign({}, defaults, options);

    return fetch(options.url, options)
    .then(response => 
        response.json().then(json => {
            if(!response.ok) {
                return Promise.reject(json);
            }
            return json;
        })
    );
};

export function getCurrentUser() {
    if(!localStorage.getItem(ACCESS_TOKEN)) {
        return Promise.reject("No access token set.");
    }

    return request({
        url: API_BASE_URL + "/user/me",
        method: 'GET'
    });
}

export function getCurrentCustomer() {
    if(!localStorage.getItem(ACCESS_TOKEN)) {
        return Promise.reject("No access token set.");
    }

    return request({
        url: API_BASE_URL + "/customer/me",
        method: 'GET'
    });
}


export function getCurrentAdmin() {
    if(!localStorage.getItem(ACCESS_TOKEN)) {
        return Promise.reject("No access token set.");
    }

    return request({
        url: API_BASE_URL + "/admin/me",
        method: 'GET'
    });
}

// Login and Signup

export function forgotPassword(emailRequest) {
    return request({
        url: API_BASE_URL + "/auth/forgot-password",
        method: 'POST',
        body: JSON.stringify(emailRequest)
    });
}

export function changeConfirmedStatus(emailRequest) {
    return request({
        url: API_BASE_URL + "/auth/confirmed",
        method: 'POST',
        body: JSON.stringify(emailRequest)
    });
}

export function resetPassword(resetPassword) {
    return request({
        url: API_BASE_URL + "/auth/reset-password",
        method: 'POST',
        body: JSON.stringify(resetPassword)
    });
}

export function login(loginRequest) {
    return request({
        url: API_BASE_URL + "/auth/login",
        method: 'POST',
        body: JSON.stringify(loginRequest)
    });
}

export function signup(signupRequest) {
    return request({
        url: API_BASE_URL + "/auth/signup",
        method: 'POST',
        body: JSON.stringify(signupRequest)
    });
}

export function lockedAccount(id) {
    if(!localStorage.getItem(ACCESS_TOKEN)) {
        return Promise.reject("No access token set.");
    }

    return request({
        url: API_BASE_URL +"/auth/"+ id + "/locked",
        method: 'POST'
    });
}

export function changePassword(changePasswordRequest) {
    if(!localStorage.getItem(ACCESS_TOKEN)) {
        return Promise.reject("No access token set.");
    }

    return request({
        url: API_BASE_URL + "/auth/change-password",
        method: 'POST',
        body: JSON.stringify(changePasswordRequest)
    });
}


export function addCategory(category) {
    if(!localStorage.getItem(ACCESS_TOKEN)) {
        return Promise.reject("No access token set.");
    }

    return request({
        url: API_BASE_URL + "/category",
        method: 'POST',
        body: JSON.stringify(category)
    });
}

export function addProvince(category) {
    if(!localStorage.getItem(ACCESS_TOKEN)) {
        return Promise.reject("No access token set.");
    }

    return request({
        url: API_BASE_URL + "/province",
        method: 'POST',
        body: JSON.stringify(category)
    });
}

export function addOrderBillOfLading(order) {
    if(!localStorage.getItem(ACCESS_TOKEN)) {
        return Promise.reject("No access token set.");
    }

    return request({
        url: API_BASE_URL + "/order",
        method: 'POST',
        body: JSON.stringify(order)
    });
}

export function addServices(category) {
    if(!localStorage.getItem(ACCESS_TOKEN)) {
        return Promise.reject("No access token set.");
    }

    return request({
        url: API_BASE_URL + "/service_transportation",
        method: 'POST',
        body: JSON.stringify(category)
    });
}

export function addBanner(banner) {
    if(!localStorage.getItem(ACCESS_TOKEN)) {
        return Promise.reject("No access token set.");
    }

    return request({
        url: API_BASE_URL + "/banner",
        method: 'POST',
        body: JSON.stringify(banner)
    });
}

export function addNew(banner) {
    if(!localStorage.getItem(ACCESS_TOKEN)) {
        return Promise.reject("No access token set.");
    }

    return request({
        url: API_BASE_URL + "/news",
        method: 'POST',
        body: JSON.stringify(banner)
    });
}

export function addStock(category) {
    if(!localStorage.getItem(ACCESS_TOKEN)) {
        return Promise.reject("No access token set.");
    }

    return request({
        url: API_BASE_URL + "/stock",
        method: 'POST',
        body: JSON.stringify(category)
    });
}

export function addDistrict(category) {
    if(!localStorage.getItem(ACCESS_TOKEN)) {
        return Promise.reject("No access token set.");
    }

    return request({
        url: API_BASE_URL + "/district",
        method: 'POST',
        body: JSON.stringify(category)
    });
}

export function addInvertory(productId, storeId, quatity) {
    if(!localStorage.getItem(ACCESS_TOKEN)) {
        return Promise.reject("No access token set.");
    }

    return request({
        url: API_BASE_URL + "/product/inventory?productId="+productId+"&storeId="+storeId+"&quantity="+quatity,
        method: 'POST',
    });
}

export function editCategory(id,category) {
    if(!localStorage.getItem(ACCESS_TOKEN)) {
        return Promise.reject("No access token set.");
    }

    return request({
        url: API_BASE_URL + "/category/"+id,
        method: 'POST',
        body: JSON.stringify(category)
    });
}

export function  updateCartItemQuantity(cart) {
    if(!localStorage.getItem(ACCESS_TOKEN)) {
        return Promise.reject("No access token set.");
    }

    return request({
        url: API_BASE_URL + "/cart",
        method: 'PUT',
        body: JSON.stringify(cart)
    });
}

export function  updateStatusPrinter() {
    if(!localStorage.getItem(ACCESS_TOKEN)) {
        return Promise.reject("No access token set.");
    }

    return request({
        url: API_BASE_URL + "/order/update-status-printer",
        method: 'PUT'
    });
}

export function addStore(store) {
    if(!localStorage.getItem(ACCESS_TOKEN)) {
        return Promise.reject("No access token set.");
    }

    return request({
        url: API_BASE_URL + "/store/create-store",
        method: 'POST',
        body: JSON.stringify(store)
    });
}

export function addCustomer(customer) {
    if(!localStorage.getItem(ACCESS_TOKEN)) {
        return Promise.reject("No access token set.");
    }

    return request({
        url: API_BASE_URL + "/customer",
        method: 'POST',
        body: JSON.stringify(customer)
    });
}

export function addOrderItem(store) {
    if(!localStorage.getItem(ACCESS_TOKEN)) {
        return Promise.reject("No access token set.");
    }

    return request({
        url: API_BASE_URL + "/orderitem",
        method: 'POST',
        body: JSON.stringify(store)
    });
}

export function addToCart(cartRequest) {
    if(!localStorage.getItem(ACCESS_TOKEN)) {
        return Promise.reject("No access token set.");
    }

    return request({
        url: API_BASE_URL + "/cart",
        method: 'POST',
        body: JSON.stringify(cartRequest)
    });
}

export function payment(store) {
    if(!localStorage.getItem(ACCESS_TOKEN)) {
        return Promise.reject("No access token set.");
    }

    return request({
        url: API_BASE_URL + "/create_payment",
        method: 'POST',
        body: JSON.stringify(store)
    });
}

export function changeOrderItem(id) {
    if(!localStorage.getItem(ACCESS_TOKEN)) {
        return Promise.reject("No access token set.");
    }

    return request({
        url: API_BASE_URL + "/orderitem/"+id,
        method: 'PUT',
    });
}

export function addOrder(store) {
    if(!localStorage.getItem(ACCESS_TOKEN)) {
        return Promise.reject("No access token set.");
    }

    return request({
        url: API_BASE_URL + "/order",
        method: 'POST',
        body: JSON.stringify(store)
    });
}

export function createPayment(store) {
    if(!localStorage.getItem(ACCESS_TOKEN)) {
        return Promise.reject("No access token set.");
    }

    return request({
        url: API_BASE_URL + "/create-payment",
        method: 'POST',
        body: JSON.stringify(store)
    });
}


export function editStore(id, store) {
    if(!localStorage.getItem(ACCESS_TOKEN)) {
        return Promise.reject("No access token set.");
    }

    return request({
        url: API_BASE_URL + "/store/update/"+id,
        method: 'PUT',
        body: JSON.stringify(store)
    });
}

export function editStock(id, store) {
    if(!localStorage.getItem(ACCESS_TOKEN)) {
        return Promise.reject("No access token set.");
    }

    return request({
        url: API_BASE_URL + "/store/"+id,
        method: 'PUT',
        body: JSON.stringify(store)
    });
}


export function addSupply(supply) {
    if(!localStorage.getItem(ACCESS_TOKEN)) {
        return Promise.reject("No access token set.");
    }

    return request({
        url: API_BASE_URL + "/supply/create",
        method: 'POST',
        body: JSON.stringify(supply)
    });
}

export function editSupply(id,supply) {
    if(!localStorage.getItem(ACCESS_TOKEN)) {
        return Promise.reject("No access token set.");
    }

    return request({
        url: API_BASE_URL + "/supply/change-supply?id="+id,
        method: 'PATCH',
        body: JSON.stringify(supply)
    });
}


export function getAllCategory(pageNo, pageSize, name) {
    if(!localStorage.getItem(ACCESS_TOKEN)) {
        return Promise.reject("No access token set.");
    }

    return request({
        url: API_BASE_URL + "/category?pageNo="+pageNo+"&pageSize="+pageSize+"&keyword="+name,
        method: 'GET'
    });
}

export function getAllBanner(pageNo, pageSize, name) {
    if(!localStorage.getItem(ACCESS_TOKEN)) {
        return Promise.reject("No access token set.");
    }

    return request({
        url: API_BASE_URL + "/banner?pageNo="+pageNo+"&pageSize="+pageSize+"&keyword="+name,
        method: 'GET'
    });
}

export function getAllNews(pageNo, pageSize, name) {
    if(!localStorage.getItem(ACCESS_TOKEN)) {
        return Promise.reject("No access token set.");
    }

    return request({
        url: API_BASE_URL + "/news?pageNo="+pageNo+"&pageSize="+pageSize+"&keyword="+name,
        method: 'GET'
    });
}

export function getAllEmployees(pageNo, pageSize) {
    if(!localStorage.getItem(ACCESS_TOKEN)) {
        return Promise.reject("No access token set.");
    }

    return request({
        url: API_BASE_URL + "/account/employees?pageNo="+pageNo+"&pageSize="+pageSize,
        method: 'GET'
    });
}

export function getAllProvince(pageNo, pageSize,keyword) {
    if(!localStorage.getItem(ACCESS_TOKEN)) {
        return Promise.reject("No access token set.");
    }

    return request({
        url: API_BASE_URL + "/province?pageNo="+pageNo+"&pageSize="+pageSize+"&keyword="+keyword,
        method: 'GET'
    });
}


export function getCountProduct() {
    if(!localStorage.getItem(ACCESS_TOKEN)) {
        return Promise.reject("No access token set.");
    }

    return request({
        url: API_BASE_URL + "/product/count-product",
        method: 'GET'
    });
}

export function getPriceMonth() {
    if(!localStorage.getItem(ACCESS_TOKEN)) {
        return Promise.reject("No access token set.");
    }

    return request({
        url: API_BASE_URL + "/order/pricemonth?year=2023&month=9",
        method: 'GET'
    });
}

export function getStockById(id) {
    if(!localStorage.getItem(ACCESS_TOKEN)) {
        return Promise.reject("No access token set.");
    }

    return request({
        url: API_BASE_URL + "/stock/"+id,
        method: 'GET'
    });
}

export function deleteCategory(id) {
    if(!localStorage.getItem(ACCESS_TOKEN)) {
        return Promise.reject("No access token set.");
    }

    return request({
        url: API_BASE_URL + "/category?id="+id,
        method: 'DELETE'
    });
}

export function deleteStore(id) {
    if(!localStorage.getItem(ACCESS_TOKEN)) {
        return Promise.reject("No access token set.");
    }

    return request({
        url: API_BASE_URL + "/store/delete-store?id="+id,
        method: 'DELETE'
    });
}

export function deleteStock(id) {
    if(!localStorage.getItem(ACCESS_TOKEN)) {
        return Promise.reject("No access token set.");
    }

    return request({
        url: API_BASE_URL + "/stock/"+id,
        method: 'DELETE'
    });
}

export function deleteCustomer(id) {
    if(!localStorage.getItem(ACCESS_TOKEN)) {
        return Promise.reject("No access token set.");
    }

    return request({
        url: API_BASE_URL + "/customer/"+id,
        method: 'DELETE'
    });
}

export function deleteSupply(id) {
    if(!localStorage.getItem(ACCESS_TOKEN)) {
        return Promise.reject("No access token set.");
    }

    return request({
        url: API_BASE_URL + "/supply/delete?id="+id,
        method: 'DELETE'
    });
}

export function deleteCartItem(id) {
    if(!localStorage.getItem(ACCESS_TOKEN)) {
        return Promise.reject("No access token set.");
    }

    return request({
        url: API_BASE_URL + "/orderitem?id="+id,
        method: 'DELETE'
    });
}

export function getAllProduct(pageNo, pageSize, name) {
    if(!localStorage.getItem(ACCESS_TOKEN)) {
        return Promise.reject("No access token set.");
    }

    return request({
        url: API_BASE_URL + "/product/all?page="+pageNo+"&pageSize="+pageSize+"&name="+name,
        method: 'GET'
    });
}

export function getAllOrderNew(pageNo, pageSize, name) {
    if(!localStorage.getItem(ACCESS_TOKEN)) {
        return Promise.reject("No access token set.");
    }

    return request({
        url: API_BASE_URL + "/order?pageNo="+pageNo+"&pageSize="+pageSize,
        method: 'GET'
    });
}

export function getAllOrderHistory(pageNo, pageSize, userId) {
    if(!localStorage.getItem(ACCESS_TOKEN)) {
        return Promise.reject("No access token set.");
    }

    return request({
        url: API_BASE_URL + "/order?pageNo="+pageNo+"&pageSize="+pageSize+"&userId="+userId,
        method: 'GET'
    });
}

export function getAllService(pageNo, pageSize) {
    if(!localStorage.getItem(ACCESS_TOKEN)) {
        return Promise.reject("No access token set.");
    }

    return request({
        url: API_BASE_URL + "/service_transportation?pageNo="+pageNo+"&pageSize="+pageSize,
        method: 'GET'
    });
}

export function getAllOrder(pageNo, pageSize, userId, storeId, supplyId) {
    if(!localStorage.getItem(ACCESS_TOKEN)) {
        return Promise.reject("No access token set.");
    }

    return request({
        url: API_BASE_URL + "/order?pageNo="+pageNo+"&pageSize="+pageSize+"&userId="+userId+"&storeId="+storeId+"&supplyId="+supplyId,
        method: 'GET'
    });
}

export function getAllOrderIsPrinter(pageNo, pageSize, userId, isPrinter) {
    if(!localStorage.getItem(ACCESS_TOKEN)) {
        return Promise.reject("No access token set.");
    }

    return request({
        url: API_BASE_URL + "/order/invoice?pageNo="+pageNo+"&pageSize="+pageSize+"&userId="+userId+"&isPrinter="+isPrinter,
        method: 'GET'
    });
}

export function getAllStockByStoreName(pageNo, pageSize, storeId) {
    if(!localStorage.getItem(ACCESS_TOKEN)) {
        return Promise.reject("No access token set.");
    }

    return request({
        url: API_BASE_URL + "/stock/search-product-by-store?pageNo="+pageNo+"&pageSize="+pageSize+"&storeId="+storeId,
        method: 'GET'
    });
}

export function getAllStock(pageNo, pageSize, name) {
    if(!localStorage.getItem(ACCESS_TOKEN)) {
        return Promise.reject("No access token set.");
    }

    return request({
        url: API_BASE_URL + "/stock?pageNo="+pageNo+"&pageSize="+pageSize,
        method: 'GET'
    });
}

export function getAllDistrict(pageNo, pageSize, name) {
    if(!localStorage.getItem(ACCESS_TOKEN)) {
        return Promise.reject("No access token set.");
    }

    return request({
        url: API_BASE_URL + "/district?pageNo="+pageNo+"&pageSize="+pageSize+"&keyword="+ name,
        method: 'GET'
    });
}

export function getAllOrderItem() {
    if(!localStorage.getItem(ACCESS_TOKEN)) {
        return Promise.reject("No access token set.");
    }

    return request({
        url: API_BASE_URL + "/orderitem",
        method: 'GET'
    });
}

export function getAllCartByUser(pageNo, pageSize) {
    if(!localStorage.getItem(ACCESS_TOKEN)) {
        return Promise.reject("No access token set.");
    }

    return request({
        url: API_BASE_URL + "/cart?pageNo="+pageNo+"&pageSize="+pageSize,
        method: 'GET'
    });
}

export function getCategoryById(id) {
    if(!localStorage.getItem(ACCESS_TOKEN)) {
        return Promise.reject("No access token set.");
    }

    return request({
        url: API_BASE_URL + "/category/"+id,
        method: 'GET'
    });
}

export function getProductById(id) {
    if(!localStorage.getItem(ACCESS_TOKEN)) {
        return Promise.reject("No access token set.");
    }

    return request({
        url: API_BASE_URL + "/product/"+id,
        method: 'GET'
    });
}

export function getSupplyById(id) {
    if(!localStorage.getItem(ACCESS_TOKEN)) {
        return Promise.reject("No access token set.");
    }

    return request({
        url: API_BASE_URL + "/supply/"+id,
        method: 'GET'
    });
}

export function getStoreById(id) {
    if(!localStorage.getItem(ACCESS_TOKEN)) {
        return Promise.reject("No access token set.");
    }

    return request({
        url: API_BASE_URL + "/store/"+id,
        method: 'GET'
    });
}

export function getCustomerById(id) {
    if(!localStorage.getItem(ACCESS_TOKEN)) {
        return Promise.reject("No access token set.");
    }

    return request({
        url: API_BASE_URL + "/customer/"+id,
        method: 'GET'
    });
}

export function getAllStore(pageNo, pageSize, name) {
    if(!localStorage.getItem(ACCESS_TOKEN)) {
        return Promise.reject("No access token set.");
    }

    return request({
        url: API_BASE_URL + "/store/get-all?page="+pageNo+"&pageSize="+pageSize+"&name="+name,
        method: 'GET'
    });
}

export function getAllCustomer(pageNo, pageSize, name) {
    if(!localStorage.getItem(ACCESS_TOKEN)) {
        return Promise.reject("No access token set.");
    }

    return request({
        url: API_BASE_URL + "/customer?pageNo="+pageNo+"&pageSize="+pageSize+"&keyword="+name,
        method: 'GET'
    });
}

export function getAllSupply(pageNo, pageSize, name) {
    if(!localStorage.getItem(ACCESS_TOKEN)) {
        return Promise.reject("No access token set.");
    }

    return request({
        url: API_BASE_URL + "/supply/getall-supply?page="+pageNo+"&pageSize="+pageSize+"&name="+name,
        method: 'GET'
    });
}


export function getAllAccountOfAdmin(pageNo, pageSize, name) {
    if(!localStorage.getItem(ACCESS_TOKEN)) {
        return Promise.reject("No access token set.");
    }

    return request({
        url: API_BASE_URL + "/auth/get-all-account?pageNo="+pageNo+"&pageSize="+pageSize+"&keyword="+name,
        method: 'GET'
    });
}


