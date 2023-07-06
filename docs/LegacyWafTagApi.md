# Fastly.LegacyWafTagApi

```javascript
const apiInstance = new Fastly.LegacyWafTagApi();
```
## Methods

Method | Fastly API endpoint | Description
------------- | ------------- | -------------
[**listLegacyWafTags**](LegacyWafTagApi.md#listLegacyWafTags) | **GET** /wafs/tags | List WAF tags


## `listLegacyWafTags`

```javascript
listLegacyWafTags({ , [filter_name, ][page_number, ][page_size, ][include] })
```

List all tags.

### Example

```javascript
const options = {
  filter_name: "filter_name_example",
  page_number: 1,
  page_size: 20,
  include: rules,
};

apiInstance.listLegacyWafTags(options)
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
**include** | **String** | Include relationships. Optional, comma separated values. Permitted values: `rules`.  | [optional]

### Return type

**Object**


[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to README]](../../README.md)
