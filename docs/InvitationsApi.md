# Fastly.InvitationsApi


```javascript
const apiInstance = new Fastly.InvitationsApi();
```
## Methods

Method | Fastly API endpoint | Description
------------- | ------------- | -------------
[**createInvitation**](InvitationsApi.md#createInvitation) | **POST** /invitations | Create an invitation
[**deleteInvitation**](InvitationsApi.md#deleteInvitation) | **DELETE** /invitations/{invitation_id} | Delete an invitation
[**listInvitations**](InvitationsApi.md#listInvitations) | **GET** /invitations | List invitations



## `createInvitation`

```javascript
createInvitation({ [invitation] })
```

Create an invitation.

### Example

```javascript
const options = {
  invitation: {&quot;data&quot;:{&quot;attributes&quot;:{&quot;email&quot;:&quot;thelma@example.com&quot;,&quot;limit_services&quot;:true,&quot;role&quot;:&quot;engineer&quot;},&quot;relationships&quot;:{&quot;customer&quot;:{&quot;data&quot;:{&quot;id&quot;:&quot;44tb1D3asjhhuh2SH8e8YD&quot;,&quot;type&quot;:&quot;customer&quot;}},&quot;service_invitations&quot;:{&quot;data&quot;:[{&quot;attributes&quot;:{&quot;permission&quot;:&quot;purge_all&quot;},&quot;relationships&quot;:{&quot;service&quot;:{&quot;data&quot;:{&quot;id&quot;:&quot;6yrrdleXQ9QDtum9rMB0nr&quot;,&quot;type&quot;:&quot;service&quot;}}},&quot;type&quot;:&quot;service_invitation&quot;}]}},&quot;type&quot;:&quot;invitation&quot;}},
};

apiInstance.createInvitation(options)
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
**invitation** | [**Invitation**](../Model/Invitation.md) |  | [optional]

### Return type

[**InvitationResponse**](InvitationResponse.md)


## `deleteInvitation`

```javascript
deleteInvitation({ invitation_id })
```

Delete an invitation.

### Example

```javascript
const options = {
  invitation_id: "invitation_id_example", // required
};

apiInstance.deleteInvitation(options)
  .then(() => {
    console.log('API called successfully.');
  })
  .catch((error) => {
    console.error(error);
  });
```

### Options

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**invitation_id** | **String** |  |

### Return type

null (empty response body)


## `listInvitations`

```javascript
listInvitations({ [page_number, ][page_size] })
```

List all invitations.

### Example

```javascript
const options = {
  page_number: 56,
  page_size: 20,
};

apiInstance.listInvitations(options)
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
**page_number** | **Number** | Current page. | [optional]
**page_size** | **Number** | Number of records per page. | [optional] [default to 20]

### Return type

[**InvitationsResponse**](InvitationsResponse.md)


[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to README]](../../README.md)
