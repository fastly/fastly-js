# FastlyApi.WafTagsApi



## Methods

Method | Fastly API endpoint | Description
------------- | ------------- | -------------
[**listWafTags**](WafTagsApi.md#listWafTags) | **GET** /waf/tags | List tags



## `listWafTags`

> WafTagsResponse listWafTags(opts)

List tags

List all tags.

### Example

```javascript
let apiInstance = new FastlyApi.WafTagsApi();
let opts = {
  'filter_name': "filter_name_example", // String | Limit the returned tags to a specific name.
  'page_number': 56, // Number | Current page.
  'page_size': 20, // Number | Number of records per page.
  'include': waf_rules // String | Include relationships. Optional.
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
**filter_name** | **String** | Limit the returned tags to a specific name. | [optional]
**page_number** | **Number** | Current page. | [optional]
**page_size** | **Number** | Number of records per page. | [optional] [default to 20]
**include** | **String** | Include relationships. Optional. | [optional] [default to &#39;waf_rules&#39;]

### Return type

[**WafTagsResponse**](WafTagsResponse.md)


[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to README]](../../README.md)
