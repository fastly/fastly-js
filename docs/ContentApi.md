# FastlyApi.ContentApi



## Methods

Method | Fastly API endpoint | Description
------------- | ------------- | -------------
[**contentCheck**](ContentApi.md#contentCheck) | **GET** /content/edge_check | Check status of content in each data center cache



## `contentCheck`

> [Content] contentCheck(opts)

Check status of content in each data center cache

Retrieve headers and MD5 hash of the content for a particular URL from each Fastly edge server. This API is limited to 200 requests per hour.

### Example

```javascript
let apiInstance = new FastlyApi.ContentApi();
let opts = {
  'url': https://www.example.com/foo/bar // String | Full URL (host and path) to check on all nodes. if protocol is omitted, http will be assumed.
};
apiInstance.contentCheck(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**url** | **String** | Full URL (host and path) to check on all nodes. if protocol is omitted, http will be assumed. | [optional]

### Return type

[**[Content]**](Content.md)


[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to README]](../../README.md)
