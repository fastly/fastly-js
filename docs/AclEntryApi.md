# FastlyApi.AclEntryApi



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

> bulkUpdateAclEntries(service_id, acl_id, opts)

Update multiple ACL entries

Update multiple ACL entries on the same ACL.

### Example

```javascript
let apiInstance = new FastlyApi.AclEntryApi();
let service_id = "service_id_example"; // String | 
let acl_id = "acl_id_example"; // String | 
let opts = {
  'acl_entries': {"entries":[{"op":"create","ip":"192.168.0.1","subnet":8},{"op":"update","id":"6yxNzlOpW1V7JfSwvLGtOc","ip":"192.168.0.2","subnet":16},{"op":"delete","id":"6yxNzlOpW1V7JfSwvLGtOc"}]} // AclEntries | 
};
apiInstance.bulkUpdateAclEntries(service_id, acl_id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**service_id** | **String** |  |
**acl_id** | **String** |  |
**acl_entries** | [**AclEntries**](../Model/AclEntries.md) |  | [optional]

### Return type

**Object**


## `createAclEntry`

> createAclEntry(service_id, acl_id, opts)

Create an ACL entry

Add an ACL entry to an ACL.

### Example

```javascript
let apiInstance = new FastlyApi.AclEntryApi();
let service_id = "service_id_example"; // String | 
let acl_id = "acl_id_example"; // String | 
let opts = {
  'acl_entry': {"subnet":0,"ip":"127.0.0.1"} // AclEntry | 
};
apiInstance.createAclEntry(service_id, acl_id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**service_id** | **String** |  |
**acl_id** | **String** |  |
**acl_entry** | [**AclEntry**](../Model/AclEntry.md) |  | [optional]

### Return type

[**AclEntryResponse**](AclEntryResponse.md)


## `deleteAclEntry`

> deleteAclEntry(service_id, acl_id, acl_entry_id)

Delete an ACL entry

Delete an ACL entry from a specified ACL.

### Example

```javascript
let apiInstance = new FastlyApi.AclEntryApi();
let service_id = "service_id_example"; // String | 
let acl_id = "acl_id_example"; // String | 
let acl_entry_id = "acl_entry_id_example"; // String | 
apiInstance.deleteAclEntry(service_id, acl_id, acl_entry_id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**service_id** | **String** |  |
**acl_id** | **String** |  |
**acl_entry_id** | **String** |  |

### Return type

**Object**


## `getAclEntry`

> getAclEntry(service_id, acl_id, acl_entry_id)

Describe an ACL entry

Retrieve a single ACL entry.

### Example

```javascript
let apiInstance = new FastlyApi.AclEntryApi();
let service_id = "service_id_example"; // String | 
let acl_id = "acl_id_example"; // String | 
let acl_entry_id = "acl_entry_id_example"; // String | 
apiInstance.getAclEntry(service_id, acl_id, acl_entry_id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**service_id** | **String** |  |
**acl_id** | **String** |  |
**acl_entry_id** | **String** |  |

### Return type

[**AclEntry**](AclEntry.md)


## `listAclEntries`

> listAclEntries(service_id, acl_id, opts)

List ACL entries

List ACL entries for a specified ACL.

### Example

```javascript
let apiInstance = new FastlyApi.AclEntryApi();
let service_id = "service_id_example"; // String | 
let acl_id = "acl_id_example"; // String | 
let opts = {
  'page': 56, // Number | Current page.
  'per_page': 20, // Number | Number of records per page.
  'sort': "'created'", // String | Field on which to sort.
  'direction': ascend // String | Direction in which to sort results.
};
apiInstance.listAclEntries(service_id, acl_id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

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

> updateAclEntry(service_id, acl_id, acl_entry_id, opts)

Update an ACL entry

Update an ACL entry for a specified ACL.

### Example

```javascript
let apiInstance = new FastlyApi.AclEntryApi();
let service_id = "service_id_example"; // String | 
let acl_id = "acl_id_example"; // String | 
let acl_entry_id = "acl_entry_id_example"; // String | 
let opts = {
  'acl_entry': {"subnet":8} // AclEntry | 
};
apiInstance.updateAclEntry(service_id, acl_id, acl_entry_id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

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
