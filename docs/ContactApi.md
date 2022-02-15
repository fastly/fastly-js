# Fastly.ContactApi

```javascript
const apiInstance = new Fastly.ContactApi();
```
## Methods

Method | Fastly API endpoint | Description
------------- | ------------- | -------------
[**deleteContact**](ContactApi.md#deleteContact) | **DELETE** /customer/{customer_id}/contact/{contact_id} | Delete a contact
[**listContacts**](ContactApi.md#listContacts) | **GET** /customer/{customer_id}/contacts | List contacts


## `deleteContact`

```javascript
deleteContact({ customer_id, contact_id })
```

Delete a contact.

### Example

```javascript
const options = {
  customer_id: "customer_id_example", // required
  contact_id: "contact_id_example", // required
};

apiInstance.deleteContact(options)
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
**customer_id** | **String** | Alphanumeric string identifying the customer. |
**contact_id** | **String** | An alphanumeric string identifying the customer contact. |

### Return type

[**InlineResponse200**](InlineResponse200.md)


## `listContacts`

```javascript
listContacts({ customer_id })
```

List all contacts from a specified customer ID.

### Example

```javascript
const options = {
  customer_id: "customer_id_example", // required
};

apiInstance.listContacts(options)
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
**customer_id** | **String** | Alphanumeric string identifying the customer. |

### Return type

[**[SchemasContactResponse]**](SchemasContactResponse.md)


[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to README]](../../README.md)
