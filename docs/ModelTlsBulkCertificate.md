# FastlyApi.ModelTlsBulkCertificate

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allow_untrusted_root** | **Boolean** | Allow certificates that chain to untrusted roots. | [optional] [default to false]
**cert_blob** | **String** | The PEM-formatted certificate blob. Required. | [optional] 
**created_at** | **String** | Time-stamp (GMT) when the certificate was created. | [optional] [readonly] 
**intermediates_blob** | **String** | The PEM-formatted chain of intermediate blobs. Required. | [optional] 
**not_after** | **String** | Time-stamp (GMT) when the certificate will expire. Must be in the future to be used to terminate TLS traffic. | [optional] [readonly] 
**not_before** | **String** | Time-stamp (GMT) when the certificate will become valid. Must be in the past to be used to terminate TLS traffic. | [optional] [readonly] 
**replace** | **Boolean** | A recommendation from Fastly indicating the key associated with this certificate is in need of rotation. | [optional] [readonly] 
**updated_at** | **String** | Time-stamp (GMT) when the certificate was last updated. | [optional] [readonly] 
**tls_domains** | **[Object]** | All the domains (including wildcard domains) that are listed in any certificate&#39;s Subject Alternative Names (SAN) list. | [optional] [readonly] 


