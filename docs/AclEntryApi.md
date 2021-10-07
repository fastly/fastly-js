# Fastly.AclEntryApi


```javascript
const apiInstance = new Fastly.AclEntryApi();
```
## Methods

Method | Fastly API endpoint | Description
------------- | ------------- | -------------
[**bulkUpdateAclEntries**](AclEntryApi.md#bulkUpdateAclEntries) | **PATCH** /service/{service_id}/acl/{acl_id}/entries | Update multiple ACL entries
[**createAclEntry**](AclEntryApi.md#createAclEntry) | **POST** /service/{service_id}/acl/{acl_id}/entry | Create an ACL entry
[**deleteAclEntry**](AclEntryApi.md#deleteAclEntry) | **DELETE** /service/{service_id}/acl/{acl_id}/entry/{acl_entry_id} | Delete an ACL entry
[**getAclEntry**](AclEntryApi.md#getAclEntry) | **GET** /service/{service_id}/acl/{acl_id}/entry/{acl_entry_id} | Describe an ACL entry
[**listAclEntries**](AclEntryApi.md#listAclEntries) | **GET** /service/{service_id}/acl/{acl_id}/entries | List ACL entries
[**updateAclEntry**](AclEntryApi.md#updateAclEntry) | **PATCH** /service/{service_id}/acl/{acl_id}/entry/{acl_entry_id} | Update an ACL entry



## `bulkUpdateAclEntries`

```javascript
bulkUpdateAclEntries({ service_id, acl_id, [acl_entries] })
```

Update multiple ACL entries on the same ACL.

### Example

```javascript
const options = {
  service_id: "service_id_example", // required
  acl_id: "acl_id_example", // required
  acl_entries: {&quot;entries&quot;:[{&quot;ip&quot;:&quot;192.168.0.1&quot;,&quot;op&quot;:&quot;create&quot;,&quot;subnet&quot;:8},{&quot;id&quot;:&quot;6yxNzlOpW1V7JfSwvLGtOc&quot;,&quot;ip&quot;:&quot;192.168.0.2&quot;,&quot;op&quot;:&quot;update&quot;,&quot;subnet&quot;:16},{&quot;id&quot;:&quot;6yxNzlOpW1V7JfSwvLGtOc&quot;,&quot;op&quot;:&quot;delete&quot;}]},
};

apiInstance.bulkUpdateAclEntries(options)
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
**service_id** | **String** |  |
**acl_id** | **String** |  |
**acl_entries** | [**AclEntries**](../Model/AclEntries.md) |  | [optional]

### Return type

**Object**


## `createAclEntry`

```javascript
createAclEntry({ service_id, acl_id, [acl_entry] })
```

Add an ACL entry to an ACL.

### Example

```javascript
const options = {
  service_id: "service_id_example", // required
  acl_id: "acl_id_example", // required
  acl_entry: {&quot;ip&quot;:&quot;127.0.0.1&quot;,&quot;subnet&quot;:0},
};

apiInstance.createAclEntry(options)
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
**service_id** | **String** |  |
**acl_id** | **String** |  |
**acl_entry** | [**AclEntry**](../Model/AclEntry.md) |  | [optional]

### Return type

[**AclEntryResponse**](AclEntryResponse.md)


## `deleteAclEntry`

```javascript
deleteAclEntry({ service_id, acl_id, acl_entry_id })
```

Delete an ACL entry from a specified ACL.

### Example

```javascript
const options = {
  service_id: "service_id_example", // required
  acl_id: "acl_id_example", // required
  acl_entry_id: "acl_entry_id_example", // required
};

apiInstance.deleteAclEntry(options)
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
**service_id** | **String** |  |
**acl_id** | **String** |  |
**acl_entry_id** | **String** |  |

### Return type

**Object**


## `getAclEntry`

```javascript
getAclEntry({ service_id, acl_id, acl_entry_id })
```

Retrieve a single ACL entry.

### Example

```javascript
const options = {
  service_id: "service_id_example", // required
  acl_id: "acl_id_example", // required
  acl_entry_id: "acl_entry_id_example", // required
};

apiInstance.getAclEntry(options)
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
**service_id** | **String** |  |
**acl_id** | **String** |  |
**acl_entry_id** | **String** |  |

### Return type

[**AclEntry**](AclEntry.md)


## `listAclEntries`

```javascript
listAclEntries({ service_id, acl_id, [page, ], [per_page, ], [sort, ], [direction] })
```

List ACL entries for a specified ACL.

### Example

```javascript
const options = {
  service_id: "service_id_example", // required
  acl_id: "acl_id_example", // required
  page: 56,
  per_page: 20,
  sort: &#39;created&#39;,
  direction: &#39;ascend&#39;,
};

apiInstance.listAclEntries(options)
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
**service_id** | **String** |  |
**acl_id** | **String** |  |
**page** | **Number** | Current page. | [optional]
**per_page** | **Number** | Number of records per page. | [optional] [default to 20]
**sort** | **String** | Field on which to sort. | [optional] [default to &#39;created&#39;]
**direction** | **String** | Direction in which to sort results. | [optional] [default to &#39;ascend&#39;]

### Return type

[**[AclEntryResponse]**](AclEntryResponse.md)


## `updateAclEntry`

```javascript
updateAclEntry({ service_id, acl_id, acl_entry_id, [acl_entry] })
```

Update an ACL entry for a specified ACL.

### Example

```javascript
const options = {
  service_id: "service_id_example", // required
  acl_id: "acl_id_example", // required
  acl_entry_id: "acl_entry_id_example", // required
  acl_entry: {&quot;subnet&quot;:8},
};

apiInstance.updateAclEntry(options)
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
**service_id** | **String** |  |
**acl_id** | **String** |  |
**acl_entry_id** | **String** |  |
**acl_entry** | [**AclEntry**](../Model/AclEntry.md) |  | [optional]

### Return type

[**AclEntry**](AclEntry.md)


[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to README]](../../README.md)
