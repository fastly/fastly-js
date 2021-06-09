# Package.ServicesPackageApi

All URIs are relative to *https://api.fastly.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getPackage**](ServicesPackageApi.md#getPackage) | **GET** /service/{service_id}/version/{version_id}/package | Get details of the service&#39;s Compute@Edge package.
[**putPackage**](ServicesPackageApi.md#putPackage) | **PUT** /service/{service_id}/version/{version_id}/package | Upload a Compute@Edge package.



## getPackage

> InlineResponse200 getPackage(serviceId, versionId)

Get details of the service&#39;s Compute@Edge package.

List detailed information about the Compute@Edge package for the specified service.

### Example

```javascript
import Package from 'package';

let apiInstance = new Package.ServicesPackageApi();
let serviceId = SU1Z0isxPaozGVKXdv0eY; // String | 
let versionId = 1; // Number | 
apiInstance.getPackage(serviceId, versionId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serviceId** | **String**|  | 
 **versionId** | **Number**|  | 

### Return type

[**InlineResponse200**](InlineResponse200.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## putPackage

> InlineResponse200 putPackage(serviceId, versionId, opts)

Upload a Compute@Edge package.

Upload a Compute@Edge package associated with the specified service version.

### Example

```javascript
import Package from 'package';

let apiInstance = new Package.ServicesPackageApi();
let serviceId = SU1Z0isxPaozGVKXdv0eY; // String | 
let versionId = 1; // Number | 
let opts = {
  'expect': 100-continue, // String | We recommend using the Expect header because it may identify issues with the request based upon the headers alone instead of requiring you to wait until the entire binary package upload has completed.
  '_package': "/path/to/file" // File | 
};
apiInstance.putPackage(serviceId, versionId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serviceId** | **String**|  | 
 **versionId** | **Number**|  | 
 **expect** | **String**| We recommend using the Expect header because it may identify issues with the request based upon the headers alone instead of requiring you to wait until the entire binary package upload has completed. | [optional] 
 **_package** | **File**|  | [optional] 

### Return type

[**InlineResponse200**](InlineResponse200.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json

