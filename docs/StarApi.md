# FastlyApi.StarApi



## Methods

Method | Fastly API endpoint | Description
------------- | ------------- | -------------
[**createServiceStar**](StarApi.md#createServiceStar) | **POST** /stars | Create a star
[**deleteServiceStar**](StarApi.md#deleteServiceStar) | **DELETE** /stars/{star_id} | Delete a star
[**getServiceStar**](StarApi.md#getServiceStar) | **GET** /stars/{star_id} | Get a star
[**listServiceStars**](StarApi.md#listServiceStars) | **GET** /stars | List stars



## `createServiceStar`

> StarResponse createServiceStar(opts)

Create a star

Create star.

### Example

```javascript
let apiInstance = new FastlyApi.StarApi();
let opts = {
  'star': {"data":{"type":"star","relationships":{"user":{"data":{"type":"user","id":"6c7kAlo4vACNchGOdQxP37"}},"service":{"data":{"type":"service","id":"SU1Z0isxPaozGVKXdv0eY"}}}}} // Star | 
};
apiInstance.createServiceStar(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**star** | [**Star**](../Model/Star.md) |  | [optional]

### Return type

[**StarResponse**](StarResponse.md)


## `deleteServiceStar`

> deleteServiceStar(star_id)

Delete a star

Delete star.

### Example

```javascript
let apiInstance = new FastlyApi.StarApi();
let star_id = "star_id_example"; // String | 
apiInstance.deleteServiceStar(star_id).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**star_id** | **String** |  |

### Return type

null (empty response body)


## `getServiceStar`

> StarResponse getServiceStar(star_id)

Get a star

Show star.

### Example

```javascript
let apiInstance = new FastlyApi.StarApi();
let star_id = "star_id_example"; // String | 
apiInstance.getServiceStar(star_id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**star_id** | **String** |  |

### Return type

[**StarResponse**](StarResponse.md)


## `listServiceStars`

> Pagination listServiceStars()

List stars

List stars.

### Example

```javascript
let apiInstance = new FastlyApi.StarApi();
apiInstance.listServiceStars().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameters.

### Return type

[**Pagination**](Pagination.md)


[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to README]](../../README.md)
