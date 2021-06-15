# FastlyApi.ContentApi

All URIs are relative to *https://api.fastly.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**contentCheck**](ContentApi.md#contentCheck) | **GET** /content/edge_check | Check status of content in each data center cache



## contentCheck

> contentCheck(opts)

Check status of content in each data center cache

Retrieve headers and MD5 hash of the content for a particular URL from each Fastly edge server. This API is limited to 200 requests per hour.

### Example

```javascript
import FastlyApi from 'fastly_api';
let defaultClient = FastlyApi.ApiClient.instance;
// Configure API key authorization: token
let token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

let apiInstance = new FastlyApi.ContentApi();
let opts = {
  'url': https://www.example.com/foo/bar // String | Full URL (host and path) to check on all nodes. if protocol is omitted, http will be assumed.
};
apiInstance.contentCheck(opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **url** | **String**| Full URL (host and path) to check on all nodes. if protocol is omitted, http will be assumed. | [optional] 

### Return type

null (empty response body)

### Authorization

[token](../README.md#token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

