# CheckContentStatus.UtilsContentApi

All URIs are relative to *https://api.fastly.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**contentCheck**](UtilsContentApi.md#contentCheck) | **GET** /content/edge_check | Check status of content in each data center cache



## contentCheck

> contentCheck(opts)

Check status of content in each data center cache

Retrieve headers and MD5 hash of the content for a particular URL from each Fastly edge server. This API is limited to 200 requests per hour.

### Example

```javascript
import CheckContentStatus from 'check_content_status';
let defaultClient = CheckContentStatus.ApiClient.instance;
// Configure API key authorization: edge_check
let edge_check = defaultClient.authentications['edge_check'];
edge_check.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//edge_check.apiKeyPrefix = 'Token';

let apiInstance = new CheckContentStatus.UtilsContentApi();
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

[edge_check](../README.md#edge_check)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

