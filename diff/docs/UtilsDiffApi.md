# Diff.UtilsDiffApi

All URIs are relative to *https://api.fastly.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**diffServiceVersions**](UtilsDiffApi.md#diffServiceVersions) | **GET** /service/{service_id}/diff/from/{from_version_id}/to/{to_version_id} | Diff two service versions



## diffServiceVersions

> InlineResponse200 diffServiceVersions(serviceId, fromVersionId, toVersionId, opts)

Diff two service versions

Get diff between two versions.

### Example

```javascript
import Diff from 'diff';
let defaultClient = Diff.ApiClient.instance;
// Configure API key authorization: session_or_token
let session_or_token = defaultClient.authentications['session_or_token'];
session_or_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//session_or_token.apiKeyPrefix = 'Token';

let apiInstance = new Diff.UtilsDiffApi();
let serviceId = SU1Z0isxPaozGVKXdv0eY; // String | 
let fromVersionId = 1; // Number | The version number of the service to which changes in the generated VCL are being compared. Can either be a positive number from 1 to your maximum version or a negative number from -1 down (-1 is latest version etc).
let toVersionId = 2; // Number | The version number of the service from which changes in the generated VCL are being compared. Uses same numbering scheme as `from`.
let opts = {
  'format': "'text'" // String | Optional method to format the diff field.
};
apiInstance.diffServiceVersions(serviceId, fromVersionId, toVersionId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serviceId** | **String**|  | 
 **fromVersionId** | **Number**| The version number of the service to which changes in the generated VCL are being compared. Can either be a positive number from 1 to your maximum version or a negative number from -1 down (-1 is latest version etc). | 
 **toVersionId** | **Number**| The version number of the service from which changes in the generated VCL are being compared. Uses same numbering scheme as &#x60;from&#x60;. | 
 **format** | **String**| Optional method to format the diff field. | [optional] [default to &#39;text&#39;]

### Return type

[**InlineResponse200**](InlineResponse200.md)

### Authorization

[session_or_token](../README.md#session_or_token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

