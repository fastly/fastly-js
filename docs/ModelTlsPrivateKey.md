# FastlyApi.ModelTlsPrivateKey

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_at** | **String** | Time-stamp (GMT) when the private key was created. | [optional] [readonly] 
**name** | **String** | A customizable name for your private key. Optional. | [optional] 
**key** | **String** | The contents of the private key. Must be a PEM-formatted key. Not returned in response body. Required. | [optional] 
**key_length** | **Number** | The key length used to generate the private key. | [optional] [readonly] 
**key_type** | **String** | The algorithm used to generate the private key. Must be &#x60;RSA&#x60;. | [optional] [readonly] 
**replace** | **Boolean** | A recommendation from Fastly to replace this private key and all associated certificates. | [optional] [readonly] 
**public_key_sha1** | **String** | Useful for safely identifying the key. | [optional] [readonly] 


