# FastlyApi.DomainApi



## Methods

Method | Fastly API endpoint | Description
------------- | ------------- | -------------
[**checkDomain**](DomainApi.md#checkDomain) | **GET** /service/{service_id}/version/{version_id}/domain/{domain_name}/check | Validate DNS configuration for a single domain on a service
[**checkDomains**](DomainApi.md#checkDomains) | **GET** /service/{service_id}/version/{version_id}/domain/check_all | Validate DNS configuration for all domains on a service
[**createDomain**](DomainApi.md#createDomain) | **POST** /service/{service_id}/version/{version_id}/domain | Add a domain name to a service
[**deleteDomain**](DomainApi.md#deleteDomain) | **DELETE** /service/{service_id}/version/{version_id}/domain/{domain_name} | Remove a domain from a service
[**getDomain**](DomainApi.md#getDomain) | **GET** /service/{service_id}/version/{version_id}/domain/{domain_name} | Describe a domain
[**listDomains**](DomainApi.md#listDomains) | **GET** /service/{service_id}/version/{version_id}/domain | List domains
[**updateDomain**](DomainApi.md#updateDomain) | **PUT** /service/{service_id}/version/{version_id}/domain/{domain_name} | Update a domain



## `checkDomain`

> [AnyOfobjectstringboolean] checkDomain(service_id, version_id, domain_name)

Validate DNS configuration for a single domain on a service

Checks the status of a specific domain's DNS record for a Service Version. Returns an array in the same format as domain/check_all.

### Example

```javascript
let apiInstance = new FastlyApi.DomainApi();
let service_id = "service_id_example"; // String | 
let version_id = 56; // Number | 
let domain_name = "domain_name_example"; // String | 
apiInstance.checkDomain(service_id, version_id, domain_name).then((data) => {
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
**domain_name** | **String** |  |

### Return type

[**[AnyOfobjectstringboolean]**](AnyOfobjectstringboolean.md)


## `checkDomains`

> [Array] checkDomains(service_id, version_id)

Validate DNS configuration for all domains on a service

Checks the status of all domains' DNS records for a Service Version. Returns an array of 3 items for each domain; the first is the details for the domain, the second is the current CNAME of the domain, and the third is a boolean indicating whether or not it has been properly setup to use Fastly.

### Example

```javascript
let apiInstance = new FastlyApi.DomainApi();
let service_id = "service_id_example"; // String | 
let version_id = 56; // Number | 
apiInstance.checkDomains(service_id, version_id).then((data) => {
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

**[Array]**


## `createDomain`

> DomainResponse createDomain(service_id, version_id, opts)

Add a domain name to a service

Create a domain for a particular service and version.

### Example

```javascript
let apiInstance = new FastlyApi.DomainApi();
let service_id = "service_id_example"; // String | 
let version_id = 56; // Number | 
let opts = {
  'comment': "comment_example", // String | A freeform descriptive note.
  'name': "name_example" // String | The name of the domain or domains associated with this service.
};
apiInstance.createDomain(service_id, version_id, opts).then((data) => {
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
**name** | **String** | The name of the domain or domains associated with this service. | [optional]

### Return type

[**DomainResponse**](DomainResponse.md)


## `deleteDomain`

> Object deleteDomain(service_id, version_id, domain_name)

Remove a domain from a service

Delete the domain for a particular service and versions.

### Example

```javascript
let apiInstance = new FastlyApi.DomainApi();
let service_id = "service_id_example"; // String | 
let version_id = 56; // Number | 
let domain_name = "domain_name_example"; // String | 
apiInstance.deleteDomain(service_id, version_id, domain_name).then((data) => {
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
**domain_name** | **String** |  |

### Return type

**Object**


## `getDomain`

> DomainResponse getDomain(service_id, version_id, domain_name)

Describe a domain

Get the domain for a particular service and version.

### Example

```javascript
let apiInstance = new FastlyApi.DomainApi();
let service_id = "service_id_example"; // String | 
let version_id = 56; // Number | 
let domain_name = "domain_name_example"; // String | 
apiInstance.getDomain(service_id, version_id, domain_name).then((data) => {
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
**domain_name** | **String** |  |

### Return type

[**DomainResponse**](DomainResponse.md)


## `listDomains`

> DomainResponse listDomains(service_id, version_id)

List domains

List all the domains for a particular service and version.

### Example

```javascript
let apiInstance = new FastlyApi.DomainApi();
let service_id = "service_id_example"; // String | 
let version_id = 56; // Number | 
apiInstance.listDomains(service_id, version_id).then((data) => {
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

[**DomainResponse**](DomainResponse.md)


## `updateDomain`

> DomainResponse updateDomain(service_id, version_id, domain_name, opts)

Update a domain

Update the domain for a particular service and version.

### Example

```javascript
let apiInstance = new FastlyApi.DomainApi();
let service_id = "service_id_example"; // String | 
let version_id = 56; // Number | 
let domain_name = "domain_name_example"; // String | 
let opts = {
  'comment': "comment_example", // String | A freeform descriptive note.
  'name': "name_example" // String | The name of the domain or domains associated with this service.
};
apiInstance.updateDomain(service_id, version_id, domain_name, opts).then((data) => {
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
**domain_name** | **String** |  |
**comment** | **String** | A freeform descriptive note. | [optional]
**name** | **String** | The name of the domain or domains associated with this service. | [optional]

### Return type

[**DomainResponse**](DomainResponse.md)


[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to README]](../../README.md)
