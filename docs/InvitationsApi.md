# FastlyApi.InvitationsApi

All URIs are relative to *https://api.fastly.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createInvitation**](InvitationsApi.md#createInvitation) | **POST** /invitations | Create an invitation
[**deleteInvitation**](InvitationsApi.md#deleteInvitation) | **DELETE** /invitations/{invitation_id} | Delete an invitation
[**listInvitations**](InvitationsApi.md#listInvitations) | **GET** /invitations | List invitations



## createInvitation

> InlineResponse200 createInvitation(opts)

Create an invitation

Create an invitation.

### Example

```javascript
import FastlyApi from 'fastly_api';

let apiInstance = new FastlyApi.InvitationsApi();
let opts = {
  'inline_object6': new FastlyApi.InlineObject6() // InlineObject6 | 
};
apiInstance.createInvitation(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inline_object6** | [**InlineObject6**](InlineObject6.md)|  | [optional] 

### Return type

[**InlineResponse200**](InlineResponse200.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/vnd.api+json
- **Accept**: application/vnd.api+json


## deleteInvitation

> deleteInvitation(invitation_id)

Delete an invitation

Delete an invitation.

### Example

```javascript
import FastlyApi from 'fastly_api';

let apiInstance = new FastlyApi.InvitationsApi();
let invitation_id = "invitation_id_example"; // String | 
apiInstance.deleteInvitation(invitation_id).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **invitation_id** | **String**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## listInvitations

> Object listInvitations(opts)

List invitations

List all invitations.

### Example

```javascript
import FastlyApi from 'fastly_api';

let apiInstance = new FastlyApi.InvitationsApi();
let opts = {
  'page_number': 56, // Number | Current page.
  'page_size': 20 // Number | Number of records per page.
};
apiInstance.listInvitations(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page_number** | **Number**| Current page. | [optional] 
 **page_size** | **Number**| Number of records per page. | [optional] [default to 20]

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/vnd.api+json

