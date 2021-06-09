# Customer.AccountCustomerApi

All URIs are relative to *https://api.fastly.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteCustomer**](AccountCustomerApi.md#deleteCustomer) | **DELETE** /customer/{customer_id} | Delete a customer
[**getCustomer**](AccountCustomerApi.md#getCustomer) | **GET** /customer/{customer_id} | Get a customer
[**getLoggedInCustomer**](AccountCustomerApi.md#getLoggedInCustomer) | **GET** /current_customer | Get the logged in customer
[**listUsers**](AccountCustomerApi.md#listUsers) | **GET** /customer/{customer_id}/users | List users
[**updateCustomer**](AccountCustomerApi.md#updateCustomer) | **PUT** /customer/{customer_id} | Update a customer



## deleteCustomer

> Object deleteCustomer(customerId)

Delete a customer

Delete a customer.

### Example

```javascript
import Customer from 'customer';
let defaultClient = Customer.ApiClient.instance;
// Configure API key authorization: session_or_token
let session_or_token = defaultClient.authentications['session_or_token'];
session_or_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//session_or_token.apiKeyPrefix = 'Token';

let apiInstance = new Customer.AccountCustomerApi();
let customerId = x4xCwxxJxGCx123Rx5xTx; // String | 
apiInstance.deleteCustomer(customerId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerId** | **String**|  | 

### Return type

**Object**

### Authorization

[session_or_token](../README.md#session_or_token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getCustomer

> InlineResponse2001 getCustomer(customerId)

Get a customer

Get a specific customer.

### Example

```javascript
import Customer from 'customer';
let defaultClient = Customer.ApiClient.instance;
// Configure API key authorization: session_or_token
let session_or_token = defaultClient.authentications['session_or_token'];
session_or_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//session_or_token.apiKeyPrefix = 'Token';

let apiInstance = new Customer.AccountCustomerApi();
let customerId = x4xCwxxJxGCx123Rx5xTx; // String | 
apiInstance.getCustomer(customerId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerId** | **String**|  | 

### Return type

[**InlineResponse2001**](InlineResponse2001.md)

### Authorization

[session_or_token](../README.md#session_or_token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getLoggedInCustomer

> InlineResponse2001 getLoggedInCustomer()

Get the logged in customer

Get the logged in customer.

### Example

```javascript
import Customer from 'customer';
let defaultClient = Customer.ApiClient.instance;
// Configure API key authorization: session_or_token
let session_or_token = defaultClient.authentications['session_or_token'];
session_or_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//session_or_token.apiKeyPrefix = 'Token';

let apiInstance = new Customer.AccountCustomerApi();
apiInstance.getLoggedInCustomer().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**InlineResponse2001**](InlineResponse2001.md)

### Authorization

[session_or_token](../README.md#session_or_token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listUsers

> [InlineResponse200] listUsers(customerId)

List users

List all users from a specified customer id.

### Example

```javascript
import Customer from 'customer';
let defaultClient = Customer.ApiClient.instance;
// Configure API key authorization: session_or_token
let session_or_token = defaultClient.authentications['session_or_token'];
session_or_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//session_or_token.apiKeyPrefix = 'Token';

let apiInstance = new Customer.AccountCustomerApi();
let customerId = x4xCwxxJxGCx123Rx5xTx; // String | 
apiInstance.listUsers(customerId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerId** | **String**|  | 

### Return type

[**[InlineResponse200]**](InlineResponse200.md)

### Authorization

[session_or_token](../README.md#session_or_token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateCustomer

> InlineObject updateCustomer(customerId, opts)

Update a customer

Update a customer.

### Example

```javascript
import Customer from 'customer';
let defaultClient = Customer.ApiClient.instance;
// Configure API key authorization: session_or_token
let session_or_token = defaultClient.authentications['session_or_token'];
session_or_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//session_or_token.apiKeyPrefix = 'Token';

let apiInstance = new Customer.AccountCustomerApi();
let customerId = x4xCwxxJxGCx123Rx5xTx; // String | 
let opts = {
  'createdAt': "createdAt_example", // String | Date and time in ISO 8601 format.
  'deletedAt': "deletedAt_example", // String | Date and time in ISO 8601 format.
  'updatedAt': "updatedAt_example", // String | Date and time in ISO 8601 format.
  'billingContactId': "billingContactId_example", // String | The alphanumeric string representing the primary billing contact.
  'billingNetworkType': "billingNetworkType_example", // String | Customer's current network revenue type. Can be `public` or `private`.
  'billingRef': "billingRef_example", // String | Used for adding purchased orders to customer's account.
  'canConfigureWordpress': true, // Boolean | Whether this customer can view or edit wordpress.
  'canResetPasswords': true, // Boolean | Whether this customer can reset passwords.
  'canUploadVcl': true, // Boolean | Whether this customer can upload VCL.
  'force2fa': true, // Boolean | Specifies whether 2FA is forced or not forced on the customer account. Logs out non-2FA users once 2FA is force enabled.
  'forceSso': true, // Boolean | Specifies whether SSO is forced or not forced on the customer account.
  'hasAccountPanel': true, // Boolean | Specifies whether the account has access or does not have access to the account panel.
  'hasImprovedEvents': true, // Boolean | Specifies whether the account has access or does not have access to the improved events.
  'hasImprovedSslConfig': true, // Boolean | Whether this customer can view or edit the SSL config.
  'hasOpenstackLogging': true, // Boolean | Specifies whether the account has enabled or not enabled openstack logging.
  'hasPci': true, // Boolean | Specifies whether the account can edit PCI for a service.
  'hasPciPasswords': true, // Boolean | Specifies whether PCI passwords are required for the account.
  'id': "id_example", // String | Alphanumeric string identifying the customer.
  'ipWhitelist': "ipWhitelist_example", // String | The range of IP addresses authorized to access the customer account.
  'legalContactId': "legalContactId_example", // String | The alphanumeric string identifying the account's legal contact.
  'name': "name_example", // String | The name of the customer, generally the company name.
  'ownerId': "ownerId_example", // String | The alphanumeric string identifying the account owner.
  'phoneNumber': "phoneNumber_example", // String | The phone number associated with the account.
  'postalAddress': "postalAddress_example", // String | The postal address associated with the account.
  'pricingPlan': "pricingPlan_example", // String | The pricing plan this customer is under.
  'pricingPlanId': "pricingPlanId_example", // String | The alphanumeric string identifying the pricing plan.
  'securityContactId': "securityContactId_example", // String | The alphanumeric string identifying the account's security contact.
  'technicalContactId': "technicalContactId_example" // String | The alphanumeric string identifying the account's technical contact.
};
apiInstance.updateCustomer(customerId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerId** | **String**|  | 
 **createdAt** | **String**| Date and time in ISO 8601 format. | [optional] 
 **deletedAt** | **String**| Date and time in ISO 8601 format. | [optional] 
 **updatedAt** | **String**| Date and time in ISO 8601 format. | [optional] 
 **billingContactId** | **String**| The alphanumeric string representing the primary billing contact. | [optional] 
 **billingNetworkType** | **String**| Customer&#39;s current network revenue type. Can be &#x60;public&#x60; or &#x60;private&#x60;. | [optional] 
 **billingRef** | **String**| Used for adding purchased orders to customer&#39;s account. | [optional] 
 **canConfigureWordpress** | **Boolean**| Whether this customer can view or edit wordpress. | [optional] 
 **canResetPasswords** | **Boolean**| Whether this customer can reset passwords. | [optional] 
 **canUploadVcl** | **Boolean**| Whether this customer can upload VCL. | [optional] 
 **force2fa** | **Boolean**| Specifies whether 2FA is forced or not forced on the customer account. Logs out non-2FA users once 2FA is force enabled. | [optional] 
 **forceSso** | **Boolean**| Specifies whether SSO is forced or not forced on the customer account. | [optional] 
 **hasAccountPanel** | **Boolean**| Specifies whether the account has access or does not have access to the account panel. | [optional] 
 **hasImprovedEvents** | **Boolean**| Specifies whether the account has access or does not have access to the improved events. | [optional] 
 **hasImprovedSslConfig** | **Boolean**| Whether this customer can view or edit the SSL config. | [optional] 
 **hasOpenstackLogging** | **Boolean**| Specifies whether the account has enabled or not enabled openstack logging. | [optional] 
 **hasPci** | **Boolean**| Specifies whether the account can edit PCI for a service. | [optional] 
 **hasPciPasswords** | **Boolean**| Specifies whether PCI passwords are required for the account. | [optional] 
 **id** | **String**| Alphanumeric string identifying the customer. | [optional] 
 **ipWhitelist** | **String**| The range of IP addresses authorized to access the customer account. | [optional] 
 **legalContactId** | **String**| The alphanumeric string identifying the account&#39;s legal contact. | [optional] 
 **name** | **String**| The name of the customer, generally the company name. | [optional] 
 **ownerId** | **String**| The alphanumeric string identifying the account owner. | [optional] 
 **phoneNumber** | **String**| The phone number associated with the account. | [optional] 
 **postalAddress** | **String**| The postal address associated with the account. | [optional] 
 **pricingPlan** | **String**| The pricing plan this customer is under. | [optional] 
 **pricingPlanId** | **String**| The alphanumeric string identifying the pricing plan. | [optional] 
 **securityContactId** | **String**| The alphanumeric string identifying the account&#39;s security contact. | [optional] 
 **technicalContactId** | **String**| The alphanumeric string identifying the account&#39;s technical contact. | [optional] 

### Return type

[**InlineObject**](InlineObject.md)

### Authorization

[session_or_token](../README.md#session_or_token)

### HTTP request headers

- **Content-Type**: application/x-www-form-urlencoded
- **Accept**: application/json

