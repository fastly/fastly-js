# FastlyApi.InvitationsApi



## Methods

Method | Fastly API endpoint | Description
------------- | ------------- | -------------
[**createInvitation**](InvitationsApi.md#createInvitation) | **POST** /invitations | Create an invitation
[**deleteInvitation**](InvitationsApi.md#deleteInvitation) | **DELETE** /invitations/{invitation_id} | Delete an invitation
[**listInvitations**](InvitationsApi.md#listInvitations) | **GET** /invitations | List invitations



## `createInvitation`

> InvitationResponse createInvitation(opts)

Create an invitation

Create an invitation.

### Example

```javascript
let apiInstance = new FastlyApi.InvitationsApi();
let opts = {
  'invitation': {"data":{"type":"invitation","attributes":{"email":"thelma@example.com","limit_services":true,"role":"engineer"},"relationships":{"customer":{"data":{"id":"44tb1D3asjhhuh2SH8e8YD","type":"customer"}},"service_invitations":{"data":[{"type":"service_invitation","attributes":{"permission":"purge_all"},"relationships":{"service":{"data":{"type":"service","id":"6yrrdleXQ9QDtum9rMB0nr"}}}}]}}}} // Invitation | 
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
**invitation** | [**Invitation**](../Model/Invitation.md) |  | [optional]

### Return type

[**InvitationResponse**](InvitationResponse.md)


## `deleteInvitation`

> deleteInvitation(invitation_id)

Delete an invitation

Delete an invitation.

### Example

```javascript
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
**invitation_id** | **String** |  |

### Return type

null (empty response body)


## `listInvitations`

> InvitationsResponse listInvitations(opts)

List invitations

List all invitations.

### Example

```javascript
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
**page_number** | **Number** | Current page. | [optional]
**page_size** | **Number** | Number of records per page. | [optional] [default to 20]

### Return type

[**InvitationsResponse**](InvitationsResponse.md)


[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to README]](../../README.md)
