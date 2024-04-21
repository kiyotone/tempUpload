# Endpoints for raings

## /api/add-rating
- **Method**: POST
- **Description**: Add a rating
- **Request Body**:
  - 'rating' (int): The rating (1-5)
  - 'productId' (string): The product id
  - 'rewiew' (string) (optional): The review
- **Response**:
  - 'data' (object): The new rating

## /api/my-ratings
- **Method**: GET
- **Description**: Get all ratings of the user
- **Request Query**:
  - 'productId' (string): If provided, only ratings for this product will be returned
- **Response**:
  - 'data' (array): The ratings

## /api/product-ratings
- **Method**: GET
- **Description**: Get all ratings of a product
- **Request Query**:
  - 'productId' (string) (optional): The product which ratings should be returned
- **Response**:
 - 'data' (object): {
    - 'ratings' (array): The ratings
    - 'average' (float): The average rating
 }

## /api/delete-rating
- **Method**: POST
- **Description**: Delete a rating
- **Request Body**:
  - 'ratingId' (string): The rating id
  