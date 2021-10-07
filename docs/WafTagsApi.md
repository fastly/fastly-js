# Fastly.WafTagsApi


```javascript
const apiInstance = new Fastly.WafTagsApi();
```
## Methods

Method | Fastly API endpoint | Description
------------- | ------------- | -------------
[**listWafTags**](WafTagsApi.md#listWafTags) | **GET** /waf/tags | List tags



## `listWafTags`

```javascript
listWafTags({ [filter_name, ][page_number, ][page_size, ][include] })
```

List all tags.

### Example

```javascript
const options = {
  filter_name: &quot;filter_name_example&quot;,
  page_number: 56,
  page_size: 20,
  include: &#39;waf_rules&#39;,
};

apiInstance.listWafTags(options)
  .then((data) => {
    console.log(data, 'API called successfully.');
  })
  .catch((error) => {
    console.error(error);
  });
```

### Options

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
