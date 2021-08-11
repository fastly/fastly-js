# FastlyApi.ConditionApi



## Methods

Method | Fastly API endpoint | Description
------------- | ------------- | -------------
[**createCondition**](ConditionApi.md#createCondition) | **POST** /service/{service_id}/version/{version_id}/condition | Create a condition
[**deleteCondition**](ConditionApi.md#deleteCondition) | **DELETE** /service/{service_id}/version/{version_id}/condition/{condition_name} | Delete a condition
[**getCondition**](ConditionApi.md#getCondition) | **GET** /service/{service_id}/version/{version_id}/condition/{condition_name} | Describe a condition
[**listConditions**](ConditionApi.md#listConditions) | **GET** /service/{service_id}/version/{version_id}/condition | List conditions
[**updateCondition**](ConditionApi.md#updateCondition) | **PUT** /service/{service_id}/version/{version_id}/condition/{condition_name} | Update a condition



## `createCondition`

> ConditionResponse createCondition(service_id, version_id, opts)

Create a condition

Creates a new condition.

### Example

```javascript
let apiInstance = new FastlyApi.ConditionApi();
let service_id = "service_id_example"; // String | 
let version_id = 56; // Number | 
let opts = {
  'comment': "comment_example", // String | A freeform descriptive note.
  'name': "name_example", // String | Name of the condition. Required.
  'priority': 100, // Number | Priority determines execution order. Lower numbers execute first.
  'statement': "statement_example", // String | A conditional expression in VCL used to determine if the condition is met.
  'type': "type_example" // String | Type of the condition. Required.
};
apiInstance.createCondition(service_id, version_id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**service_id** | **String** |  |
**version_id** | **Number** |  |
**comment** | **String** | A freeform descriptive note. | [optional]
**name** | **String** | Name of the condition. Required. | [optional]
**priority** | **Number** | Priority determines execution order. Lower numbers execute first. | [optional] [default to 100]
**statement** | **String** | A conditional expression in VCL used to determine if the condition is met. | [optional]
**type** | **String** | Type of the condition. Required. | [optional]

### Return type

[**ConditionResponse**](ConditionResponse.md)


## `deleteCondition`

> Object deleteCondition(service_id, version_id, condition_name)

Delete a condition

Deletes the specified condition.

### Example

```javascript
let apiInstance = new FastlyApi.ConditionApi();
let service_id = "service_id_example"; // String | 
let version_id = 56; // Number | 
let condition_name = "condition_name_example"; // String | 
apiInstance.deleteCondition(service_id, version_id, condition_name).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**service_id** | **String** |  |
**version_id** | **Number** |  |
**condition_name** | **String** |  |

### Return type

**Object**


## `getCondition`

> ConditionResponse getCondition(service_id, version_id, condition_name)

Describe a condition

Gets the specified condition.

### Example

```javascript
let apiInstance = new FastlyApi.ConditionApi();
let service_id = "service_id_example"; // String | 
let version_id = 56; // Number | 
let condition_name = "condition_name_example"; // String | 
apiInstance.getCondition(service_id, version_id, condition_name).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**service_id** | **String** |  |
**version_id** | **Number** |  |
**condition_name** | **String** |  |

### Return type

[**ConditionResponse**](ConditionResponse.md)


## `listConditions`

> [ConditionResponse] listConditions(service_id, version_id)

List conditions

Gets all conditions for a particular service and version.

### Example

```javascript
let apiInstance = new FastlyApi.ConditionApi();
let service_id = "service_id_example"; // String | 
let version_id = 56; // Number | 
apiInstance.listConditions(service_id, version_id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**service_id** | **String** |  |
**version_id** | **Number** |  |

### Return type

[**[ConditionResponse]**](ConditionResponse.md)


## `updateCondition`

> ConditionResponse updateCondition(service_id, version_id, condition_name, opts)

Update a condition

Updates the specified condition.

### Example

```javascript
let apiInstance = new FastlyApi.ConditionApi();
let service_id = "service_id_example"; // String | 
let version_id = 56; // Number | 
let condition_name = "condition_name_example"; // String | 
let opts = {
  'comment': "comment_example", // String | A freeform descriptive note.
  'name': "name_example", // String | Name of the condition. Required.
  'priority': 100, // Number | Priority determines execution order. Lower numbers execute first.
  'statement': "statement_example", // String | A conditional expression in VCL used to determine if the condition is met.
  'type': "type_example" // String | Type of the condition. Required.
};
apiInstance.updateCondition(service_id, version_id, condition_name, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**service_id** | **String** |  |
**version_id** | **Number** |  |
**condition_name** | **String** |  |
**comment** | **String** | A freeform descriptive note. | [optional]
**name** | **String** | Name of the condition. Required. | [optional]
**priority** | **Number** | Priority determines execution order. Lower numbers execute first. | [optional] [default to 100]
**statement** | **String** | A conditional expression in VCL used to determine if the condition is met. | [optional]
**type** | **String** | Type of the condition. Required. | [optional]

### Return type

[**ConditionResponse**](ConditionResponse.md)


[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to README]](../../README.md)
