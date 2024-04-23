const backendDomin = "http://localhost:8000";

const SummaryApi = {
  signUP: {
    url: `${backendDomin}/api/signup`,
    method: "post",
  },
  signIn: {
    url: `${backendDomin}/api/signin`,
    method: "post",
  },
  current_user: {
    url: `${backendDomin}/api/user-details`,
    method: "get",
  },
  logout_user: {
    url: `${backendDomin}/api/userLogout`,
    method: "get",
  },
  allUser: {
    url: `${backendDomin}/api/all-user`,
    method: "get",
  },
  updateUser: {
    url: `${backendDomin}/api/update-user`,
    method: "post",
  },
  uploadProduct: {
    url: `${backendDomin}/api/upload-product`,
    method: "post",
  },
  allProduct: {
    url: `${backendDomin}/api/get-product`,
    method: "get",
  },
  updateProduct: {
    url: `${backendDomin}/api/update-product`,
    method: "post",
  },
  categoryProduct: {
    url: `${backendDomin}/api/get-categoryProduct`,
    method: "get",
  },
  categoryWiseProduct: {
    url: `${backendDomin}/api/category-product`,
    method: "post",
  },
  productDetails: {
    url: `${backendDomin}/api/product-details`,
    method: "post",
  },
  addToCartProduct: {
    url: `${backendDomin}/api/addtocart`,
    method: "post",
  },
  addToCartProductCount: {
    url: `${backendDomin}/api/countAddToCartProduct`,
    method: "get",
  },
  addToCartProductView: {
    url: `${backendDomin}/api/view-card-product`,
    method: "get",
  },
  updateCartProduct: {
    url: `${backendDomin}/api/update-cart-product`,
    method: "post",
  },
  deleteCartProduct: {
    url: `${backendDomin}/api/delete-cart-product`,
    method: "post",
  },
  searchProduct: {
    url: `${backendDomin}/api/search`,
    method: "get",
  },
  filterProduct: {
    url: `${backendDomin}/api/category-product`,
    method: "post",
  },
  createAppointment: {
    url: `${backendDomin}/api/create-appointment`,
    method: "post",
  },
  viewAppointment: {
    url: `${backendDomin}/api/view-appointment/`,
    method: "post",
  },
  deleteAppointment: {
    url: `${backendDomin}/api/delete-appointment`,
    method: "post",
  },
  forgotPassword: {
    url: `${backendDomin}/api/forgot-password`,
    method: "post",
  },
  recoverPassword: {
    url: `${backendDomin}/api/recover-password`,
    method: "post",
  },
  createOrder: {
    url: `${backendDomin}/api/add-order`,
    method: "post",
  },
  viewOrder: {
    url: `${backendDomin}/api/view-order`,
    method: "get",
  },
  allOrders: {
    url: `${backendDomin}/api/all-orders`,
    method: "get",
  },
  finalizeAppointment: {
    url: `${backendDomin}/api/finalize-appointment`,
    method: "post",
  },
  productRating: {
    url: `${backendDomin}/api/product-ratings`,
    method: "post",
  },
  sendRating: {
    url: `${backendDomin}/api/add-rating`,
    method: "post",
  },
  myRating: {
    url: `${backendDomin}/api/my-ratings`,
    method: "get",
  },
};

export default SummaryApi;
