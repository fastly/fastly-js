# FastlyApi.WafTagsApi

All URIs are relative to *https://api.fastly.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**listWafTags**](WafTagsApi.md#listWafTags) | **GET** /waf/tags | List tags



## listWafTags

> Object listWafTags(opts)

List tags

List all tags.

### Example

```javascript
import FastlyApi from 'fastly_api';
let defaultClient = FastlyApi.ApiClient.instance;
// Configure API key authorization: token
let token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

let apiInstance = new FastlyApi.WafTagsApi();
let opts = {
  'filter_name': "filter_name_example", // String | Limit the returned tags to a specific name.
  'page_number': 56, // Number | Current page.
  'page_size': 20, // Number | Number of records per page.
  'include': waf_rules // String | Include relationships. Optional, comma-separated values. Permitted values: `waf_rules`. 
};
apiInstance.listWafTags(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter_name** | **String**| Limit the returned tags to a specific name. | [optional] 
 **page_number** | **Number**| Current page. | [optional] 
 **page_size** | **Number**| Number of records per page. | [optional] [default to 20]
 **include** | **String**| Include relationships. Optional, comma-separated values. Permitted values: &#x60;waf_rules&#x60;.  | [optional] 

### Return type

**Object**

### Authorization

[token](../README.md#token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/vnd.api+json

