# FastlyApi.CustomerApi

All URIs are relative to *https://api.fastly.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteCustomer**](CustomerApi.md#deleteCustomer) | **DELETE** /customer/{customer_id} | Delete a customer
[**getCustomer**](CustomerApi.md#getCustomer) | **GET** /customer/{customer_id} | Get a customer
[**getLoggedInCustomer**](CustomerApi.md#getLoggedInCustomer) | **GET** /current_customer | Get the logged in customer
[**listUsers**](CustomerApi.md#listUsers) | **GET** /customer/{customer_id}/users | List users
[**updateCustomer**](CustomerApi.md#updateCustomer) | **PUT** /customer/{customer_id} | Update a customer



## deleteCustomer

> Object deleteCustomer(customer_id)

Delete a customer

Delete a customer.

### Example

```javascript
import FastlyApi from 'fastly_api';
let defaultClient = FastlyApi.ApiClient.instance;
// Configure API key authorization: token
let token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

let apiInstance = new FastlyApi.CustomerApi();
let customer_id = "customer_id_example"; // String | 
apiInstance.deleteCustomer(customer_id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customer_id** | **String**|  | 

### Return type

**Object**

### Authorization

[token](../README.md#token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getCustomer

> ModelCustomer getCustomer(customer_id)

Get a customer

Get a specific customer.

### Example

```javascript
import FastlyApi from 'fastly_api';
let defaultClient = FastlyApi.ApiClient.instance;
// Configure API key authorization: token
let token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

let apiInstance = new FastlyApi.CustomerApi();
let customer_id = "customer_id_example"; // String | 
apiInstance.getCustomer(customer_id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customer_id** | **String**|  | 

### Return type

[**ModelCustomer**](ModelCustomer.md)

### Authorization

[token](../README.md#token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getLoggedInCustomer

> ModelCustomer getLoggedInCustomer()

Get the logged in customer

Get the logged in customer.

### Example

```javascript
import FastlyApi from 'fastly_api';
let defaultClient = FastlyApi.ApiClient.instance;
// Configure API key authorization: token
let token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

let apiInstance = new FastlyApi.CustomerApi();
apiInstance.getLoggedInCustomer().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**ModelCustomer**](ModelCustomer.md)

### Authorization

[token](../README.md#token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listUsers

> [SchemasModelUser] listUsers(customer_id)

List users

List all users from a specified customer id.

### Example

```javascript
import FastlyApi from 'fastly_api';
let defaultClient = FastlyApi.ApiClient.instance;
// Configure API key authorization: token
let token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

let apiInstance = new FastlyApi.CustomerApi();
let customer_id = "customer_id_example"; // String | 
apiInstance.listUsers(customer_id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customer_id** | **String**|  | 

### Return type

[**[SchemasModelUser]**](SchemasModelUser.md)

### Authorization

[token](../README.md#token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateCustomer

> ModelCustomer updateCustomer(customer_id, opts)

Update a customer

Update a customer.

### Example

```javascript
import FastlyApi from 'fastly_api';
let defaultClient = FastlyApi.ApiClient.instance;
// Configure API key authorization: token
let token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

let apiInstance = new FastlyApi.CustomerApi();
let customer_id = "customer_id_example"; // String | 
let opts = {
  'created_at': "created_at_example", // String | Date and time in ISO 8601 format.
  'deleted_at': "deleted_at_example", // String | Date and time in ISO 8601 format.
  'updated_at': "updated_at_example", // String | Date and time in ISO 8601 format.
  'billing_contact_id': "billing_contact_id_example", // String | The alphanumeric string representing the primary billing contact.
  'billing_network_type': "billing_network_type_example", // String | Customer's current network revenue type. Can be `public` or `private`.
  'billing_ref': "billing_ref_example", // String | Used for adding purchased orders to customer's account.
  'can_configure_wordpress': true, // Boolean | Whether this customer can view or edit wordpress.
  'can_reset_passwords': true, // Boolean | Whether this customer can reset passwords.
  'can_upload_vcl': true, // Boolean | Whether this customer can upload VCL.
  'force_2fa': true, // Boolean | Specifies whether 2FA is forced or not forced on the customer account. Logs out non-2FA users once 2FA is force enabled.
  'force_sso': true, // Boolean | Specifies whether SSO is forced or not forced on the customer account.
  'has_account_panel': true, // Boolean | Specifies whether the account has access or does not have access to the account panel.
  'has_improved_events': true, // Boolean | Specifies whether the account has access or does not have access to the improved events.
  'has_improved_ssl_config': true, // Boolean | Whether this customer can view or edit the SSL config.
  'has_openstack_logging': true, // Boolean | Specifies whether the account has enabled or not enabled openstack logging.
  'has_pci': true, // Boolean | Specifies whether the account can edit PCI for a service.
  'has_pci_passwords': true, // Boolean | Specifies whether PCI passwords are required for the account.
  'id': "id_example", // String | Alphanumeric string identifying the customer.
  'ip_whitelist': "ip_whitelist_example", // String | The range of IP addresses authorized to access the customer account.
  'legal_contact_id': "legal_contact_id_example", // String | The alphanumeric string identifying the account's legal contact.
  'name': "name_example", // String | The name of the customer, generally the company name.
  'owner_id': "owner_id_example", // String | The alphanumeric string identifying the account owner.
  'phone_number': "phone_number_example", // String | The phone number associated with the account.
  'postal_address': "postal_address_example", // String | The postal address associated with the account.
  'pricing_plan': "pricing_plan_example", // String | The pricing plan this customer is under.
  'pricing_plan_id': "pricing_plan_id_example", // String | The alphanumeric string identifying the pricing plan.
  'security_contact_id': "security_contact_id_example", // String | The alphanumeric string identifying the account's security contact.
  'technical_contact_id': "technical_contact_id_example" // String | The alphanumeric string identifying the account's technical contact.
};
apiInstance.updateCustomer(customer_id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customer_id** | **String**|  | 
 **created_at** | **String**| Date and time in ISO 8601 format. | [optional] 
 **deleted_at** | **String**| Date and time in ISO 8601 format. | [optional] 
 **updated_at** | **String**| Date and time in ISO 8601 format. | [optional] 
 **billing_contact_id** | **String**| The alphanumeric string representing the primary billing contact. | [optional] 
 **billing_network_type** | **String**| Customer&#39;s current network revenue type. Can be &#x60;public&#x60; or &#x60;private&#x60;. | [optional] 
 **billing_ref** | **String**| Used for adding purchased orders to customer&#39;s account. | [optional] 
 **can_configure_wordpress** | **Boolean**| Whether this customer can view or edit wordpress. | [optional] 
 **can_reset_passwords** | **Boolean**| Whether this customer can reset passwords. | [optional] 
 **can_upload_vcl** | **Boolean**| Whether this customer can upload VCL. | [optional] 
 **force_2fa** | **Boolean**| Specifies whether 2FA is forced or not forced on the customer account. Logs out non-2FA users once 2FA is force enabled. | [optional] 
 **force_sso** | **Boolean**| Specifies whether SSO is forced or not forced on the customer account. | [optional] 
 **has_account_panel** | **Boolean**| Specifies whether the account has access or does not have access to the account panel. | [optional] 
 **has_improved_events** | **Boolean**| Specifies whether the account has access or does not have access to the improved events. | [optional] 
 **has_improved_ssl_config** | **Boolean**| Whether this customer can view or edit the SSL config. | [optional] 
 **has_openstack_logging** | **Boolean**| Specifies whether the account has enabled or not enabled openstack logging. | [optional] 
 **has_pci** | **Boolean**| Specifies whether the account can edit PCI for a service. | [optional] 
 **has_pci_passwords** | **Boolean**| Specifies whether PCI passwords are required for the account. | [optional] 
 **id** | **String**| Alphanumeric string identifying the customer. | [optional] 
 **ip_whitelist** | **String**| The range of IP addresses authorized to access the customer account. | [optional] 
 **legal_contact_id** | **String**| The alphanumeric string identifying the account&#39;s legal contact. | [optional] 
 **name** | **String**| The name of the customer, generally the company name. | [optional] 
 **owner_id** | **String**| The alphanumeric string identifying the account owner. | [optional] 
 **phone_number** | **String**| The phone number associated with the account. | [optional] 
 **postal_address** | **String**| The postal address associated with the account. | [optional] 
 **pricing_plan** | **String**| The pricing plan this customer is under. | [optional] 
 **pricing_plan_id** | **String**| The alphanumeric string identifying the pricing plan. | [optional] 
 **security_contact_id** | **String**| The alphanumeric string identifying the account&#39;s security contact. | [optional] 
 **technical_contact_id** | **String**| The alphanumeric string identifying the account&#39;s technical contact. | [optional] 

### Return type

[**ModelCustomer**](ModelCustomer.md)

### Authorization

[token](../README.md#token)

### HTTP request headers

- **Content-Type**: application/x-www-form-urlencoded
- **Accept**: application/json

