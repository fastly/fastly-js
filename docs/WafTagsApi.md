# Fastly.WafTagsApi

```javascript
const apiInstance = new Fastly.WafTagsApi();
```
## Methods

> [!NOTE]
> All URIs are relative to `https://api.fastly.com`

Method | HTTP request | Description
------ | ------------ | -----------
[**listWafTags**](WafTagsApi.md#listWafTags) | **GET** /waf/tags | List tags


## `listWafTags`

```javascript
listWafTags({ , [filter_name, ][page_number, ][page_size, ][include] })
```

List all tags.

### Example

```javascript
const options = {
  filter_name: "filter_name_example",
  page_number: 1,
  page_size: 20,
  include: "waf_rules",
};

apiInstance.listWafTags(options)
  .then((data) => {
    console.log(data, "API called successfully.");
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
**page_size** | **Number** | Number of records per page. | [optional] [defaults to 20]
**include** | **String** | Include relationships. Optional. | [optional] [one of: "waf_rules"]

### Return type

[**WafTagsResponse**](WafTagsResponse.md)


[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to README]](../../README.md)
