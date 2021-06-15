# FastlyApi.ModelTlsCertificate

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cert_blob** | **String** | The PEM-formatted certificate blob. Required. | [optional] 
**created_at** | **String** | Time-stamp (GMT) when the certificate was created. | [optional] [readonly] 
**issued_to** | **String** | The hostname for which a certificate was issued. | [optional] [readonly] 
**issuer** | **String** | The certificate authority that issued the certificate. | [optional] [readonly] 
**name** | **String** | A customizable name for your certificate. Defaults to the certificate&#39;s Common Name or first Subject Alternative Names (SAN) entry. Optional. | [optional] 
**not_after** | **String** | Time-stamp (GMT) when the certificate will expire. Must be in the future to be used to terminate TLS traffic. | [optional] [readonly] 
**not_before** | **String** | Time-stamp (GMT) when the certificate will become valid. Must be in the past to be used to terminate TLS traffic. | [optional] [readonly] 
**replace** | **Boolean** | A recommendation from Fastly indicating the key associated with this certificate is in need of rotation. | [optional] [readonly] 
**serial_number** | **String** | A value assigned by the issuer that is unique to a certificate. | [optional] [readonly] 
**signature_algorithm** | **String** | The algorithm used to sign the certificate. | [optional] [readonly] 
**updated_at** | **String** | Time-stamp (GMT) when the certificate was last updated. | [optional] [readonly] 
**tls_domains** | **[Object]** | All the domains (including wildcard domains) that are listed in any certificate&#39;s Subject Alternative Names (SAN) list. | [optional] 


