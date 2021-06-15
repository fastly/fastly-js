# FastlyApi.ModelCompatInvitation

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**customer_id** | **Object** | Unique ID of the customer. | [optional] [readonly] 
**service_invitations_id** | **Object** | Unique ID of the service invitation. | [optional] [readonly] 
**service_invitations_permission** | **String** | The permission the accepting user will have in relation to the service. | [optional] [readonly] [default to &#39;full&#39;]
**service_invitations_service_id** | **Object** | Service the accepting user will have access to. | [optional] [readonly] 



## Enum: ServiceInvitationsPermissionEnum


* `full` (value: `"full"`)

* `read_only` (value: `"read_only"`)

* `purge_select` (value: `"purge_select"`)

* `purge_all` (value: `"purge_all"`)




