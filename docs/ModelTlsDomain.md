# FastlyApi.ModelTlsDomain

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | The domain name. | [optional] [readonly] 
**tls_certificates** | **[Object]** | The list of all the [TLS certificates](#tls_certificates) that include this domain in their SAN list. | [optional] 
**tls_activations** | **[Object]** | The list of [TLS activations](#tls_activations) that exist for the domain. If empty, then this domain is not enabled to serve TLS traffic. | [optional] 


