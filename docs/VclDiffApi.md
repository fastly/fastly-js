# FastlyApi.VclDiffApi

All URIs are relative to *https://api.fastly.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**vclDiffServiceVersions**](VclDiffApi.md#vclDiffServiceVersions) | **GET** /service/{service_id}/vcl/diff/from/{from_version_id}/to/{to_version_id} | Get a comparison of the VCL changes between two service versions



## vclDiffServiceVersions

> vclDiffServiceVersions(service_id, from_version_id, to_version_id, opts)

Get a comparison of the VCL changes between two service versions

Get a comparison of the VCL changes between two service versions.

### Example

```javascript
import FastlyApi from 'fastly_api';
let defaultClient = FastlyApi.ApiClient.instance;
// Configure API key authorization: token
let token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

let apiInstance = new FastlyApi.VclDiffApi();
let service_id = "service_id_example"; // String | 
let from_version_id = 1; // Number | The version number of the service to which changes in the generated VCL are being compared. Can either be a positive number from 1 to your maximum version or a negative number from -1 down (-1 is latest version etc).
let to_version_id = 2; // Number | The version number of the service from which changes in the generated VCL are being compared. Uses same numbering scheme as `from`.
let opts = {
  'format': "'text'" // String | Optional method to format the diff field.
};
apiInstance.vclDiffServiceVersions(service_id, from_version_id, to_version_id, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **service_id** | **String**|  | 
 **from_version_id** | **Number**| The version number of the service to which changes in the generated VCL are being compared. Can either be a positive number from 1 to your maximum version or a negative number from -1 down (-1 is latest version etc). | 
 **to_version_id** | **Number**| The version number of the service from which changes in the generated VCL are being compared. Uses same numbering scheme as &#x60;from&#x60;. | 
 **format** | **String**| Optional method to format the diff field. | [optional] [default to &#39;text&#39;]

### Return type

null (empty response body)

### Authorization

[token](../README.md#token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

