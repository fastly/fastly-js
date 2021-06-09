# VclDiff.VclServicesDiffApi

All URIs are relative to *https://api.fastly.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**vclDiffServiceVersions**](VclServicesDiffApi.md#vclDiffServiceVersions) | **GET** /service/{service_id}/vcl/diff/from/{from_version_id}/to/{to_version_id} | Get a comparison of the VCL changes between two service versions



## vclDiffServiceVersions

> vclDiffServiceVersions(serviceId, fromVersionId, toVersionId, opts)

Get a comparison of the VCL changes between two service versions

Get a comparison of the VCL changes between two service versions.

### Example

```javascript
import VclDiff from 'vcl_diff';
let defaultClient = VclDiff.ApiClient.instance;
// Configure API key authorization: session_or_token
let session_or_token = defaultClient.authentications['session_or_token'];
session_or_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//session_or_token.apiKeyPrefix = 'Token';

let apiInstance = new VclDiff.VclServicesDiffApi();
let serviceId = SU1Z0isxPaozGVKXdv0eY; // String | 
let fromVersionId = 1; // Number | The version number of the service to which changes in the generated VCL are being compared. Can either be a positive number from 1 to your maximum version or a negative number from -1 down (-1 is latest version etc).
let toVersionId = 2; // Number | The version number of the service from which changes in the generated VCL are being compared. Uses same numbering scheme as `from`.
let opts = {
  'format': "'text'" // String | Optional method to format the diff field.
};
apiInstance.vclDiffServiceVersions(serviceId, fromVersionId, toVersionId, opts).then(() => {
  console.log('API called successfully.');
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

null (empty response body)

### Authorization

[session_or_token](../README.md#session_or_token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

