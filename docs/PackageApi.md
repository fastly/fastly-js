# FastlyApi.PackageApi

All URIs are relative to *https://api.fastly.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getPackage**](PackageApi.md#getPackage) | **GET** /service/{service_id}/version/{version_id}/package | Get details of the service&#39;s Compute@Edge package.
[**putPackage**](PackageApi.md#putPackage) | **PUT** /service/{service_id}/version/{version_id}/package | Upload a Compute@Edge package.



## getPackage

> ModelPackage getPackage(service_id, version_id)

Get details of the service&#39;s Compute@Edge package.

List detailed information about the Compute@Edge package for the specified service.

### Example

```javascript
import FastlyApi from 'fastly_api';
let defaultClient = FastlyApi.ApiClient.instance;
// Configure API key authorization: token
let token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

let apiInstance = new FastlyApi.PackageApi();
let service_id = "service_id_example"; // String | 
let version_id = 56; // Number | 
apiInstance.getPackage(service_id, version_id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **service_id** | **String**|  | 
 **version_id** | **Number**|  | 

### Return type

[**ModelPackage**](ModelPackage.md)

### Authorization

[token](../README.md#token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## putPackage

> ModelPackage putPackage(service_id, version_id, opts)

Upload a Compute@Edge package.

Upload a Compute@Edge package associated with the specified service version.

### Example

```javascript
import FastlyApi from 'fastly_api';
let defaultClient = FastlyApi.ApiClient.instance;
// Configure API key authorization: token
let token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

let apiInstance = new FastlyApi.PackageApi();
let service_id = "service_id_example"; // String | 
let version_id = 56; // Number | 
let opts = {
  'expect': 100-continue, // String | We recommend using the Expect header because it may identify issues with the request based upon the headers alone instead of requiring you to wait until the entire binary package upload has completed.
  '_package': "/path/to/file" // File | 
};
apiInstance.putPackage(service_id, version_id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **service_id** | **String**|  | 
 **version_id** | **Number**|  | 
 **expect** | **String**| We recommend using the Expect header because it may identify issues with the request based upon the headers alone instead of requiring you to wait until the entire binary package upload has completed. | [optional] 
 **_package** | **File**|  | [optional] 

### Return type

[**ModelPackage**](ModelPackage.md)

### Authorization

[token](../README.md#token)

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json

