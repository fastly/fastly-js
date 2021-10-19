# Fastly.ConditionApi


```javascript
const apiInstance = new Fastly.ConditionApi();
```
## Methods

Method | Fastly API endpoint | Description
------------- | ------------- | -------------
[**createCondition**](ConditionApi.md#createCondition) | **POST** /service/{service_id}/version/{version_id}/condition | Create a condition
[**deleteCondition**](ConditionApi.md#deleteCondition) | **DELETE** /service/{service_id}/version/{version_id}/condition/{condition_name} | Delete a condition
[**getCondition**](ConditionApi.md#getCondition) | **GET** /service/{service_id}/version/{version_id}/condition/{condition_name} | Describe a condition
[**listConditions**](ConditionApi.md#listConditions) | **GET** /service/{service_id}/version/{version_id}/condition | List conditions
[**updateCondition**](ConditionApi.md#updateCondition) | **PUT** /service/{service_id}/version/{version_id}/condition/{condition_name} | Update a condition



## `createCondition`

```javascript
createCondition({ service_id, version_id, [comment, ], [name, ], [priority, ], [statement, ], [type] })
```

Creates a new condition.

### Example

```javascript
const options = {
  service_id: "service_id_example", // required
  version_id: 56, // required
  comment: "comment_example",
  name: "name_example",
  priority: 100,
  statement: "statement_example",
  type: ,
};

apiInstance.createCondition(options)
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
**version_id** | **Number** |  |
**comment** | **String** | A freeform descriptive note. | [optional]
**name** | **String** | Name of the condition. Required. | [optional]
**priority** | **Number** | Priority determines execution order. Lower numbers execute first. | [optional] [default to 100]
**statement** | **String** | A conditional expression in VCL used to determine if the condition is met. | [optional]
**type** | **String** | Type of the condition. Required. | [optional]

### Return type

[**ConditionResponse**](ConditionResponse.md)


## `deleteCondition`

```javascript
deleteCondition({ service_id, version_id, condition_name })
```

Deletes the specified condition.

### Example

```javascript
const options = {
  service_id: "service_id_example", // required
  version_id: 56, // required
  condition_name: "condition_name_example", // required
};

apiInstance.deleteCondition(options)
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
**version_id** | **Number** |  |
**condition_name** | **String** |  |

### Return type

**Object**


## `getCondition`

```javascript
getCondition({ service_id, version_id, condition_name })
```

Gets the specified condition.

### Example

```javascript
const options = {
  service_id: "service_id_example", // required
  version_id: 56, // required
  condition_name: "condition_name_example", // required
};

apiInstance.getCondition(options)
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
**version_id** | **Number** |  |
**condition_name** | **String** |  |

### Return type

[**ConditionResponse**](ConditionResponse.md)


## `listConditions`

```javascript
listConditions({ service_id, version_id })
```

Gets all conditions for a particular service and version.

### Example

```javascript
const options = {
  service_id: "service_id_example", // required
  version_id: 56, // required
};

apiInstance.listConditions(options)
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
**version_id** | **Number** |  |

### Return type

[**[ConditionResponse]**](ConditionResponse.md)


## `updateCondition`

```javascript
updateCondition({ service_id, version_id, condition_name, [comment, ], [name, ], [priority, ], [statement, ], [type] })
```

Updates the specified condition.

### Example

```javascript
const options = {
  service_id: "service_id_example", // required
  version_id: 56, // required
  condition_name: "condition_name_example", // required
  comment: "comment_example",
  name: "name_example",
  priority: 100,
  statement: "statement_example",
  type: ,
};

apiInstance.updateCondition(options)
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
