# Backend.InlineResponse200

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**serviceId** | **String** | Alphanumeric string identifying the service. | [optional] [readonly] 
**version** | **Number** | Integer identifying a service version. | [optional] [readonly] 
**address** | **String** | A hostname, IPv4, or IPv6 address for the backend. This is the preferred way to specify the location of your backend. | [optional] 
**autoLoadbalance** | **Boolean** | Whether or not this backend should be automatically load balanced. If true, all backends with this setting that don&#39;t have a &#x60;request_condition&#x60; will be selected based on their &#x60;weight&#x60;. | [optional] 
**betweenBytesTimeout** | **Number** | Maximum duration in milliseconds that Fastly will wait while receiving no data on a download from a backend. If exceeded, the response received so far will be considered complete and the fetch will end. May be set at runtime using &#x60;bereq.between_bytes_timeout&#x60;. | [optional] 
**clientCert** | **String** | Unused. | [optional] 
**comment** | **String** | A freeform descriptive note. | [optional] [default to &#39;&#39;]
**connectTimeout** | **Number** | Maximum duration in milliseconds to wait for a connection to this backend to be established. If exceeded, the connection is aborted and a synthethic &#x60;503&#x60; response will be presented instead. May be set at runtime using &#x60;bereq.connect_timeout&#x60;. | [optional] 
**firstByteTimeout** | **Number** | Maximum duration in milliseconds to wait for the server response to begin after a TCP connection is established and the request has been sent. If exceeded, the connection is aborted and a synthethic &#x60;503&#x60; response will be presented instead. May be set at runtime using &#x60;bereq.first_byte_timeout&#x60;. | [optional] 
**healthcheck** | **String** | The name of the healthcheck to use with this backend. | [optional] 
**hostname** | **String** | The hostname of the backend. May be used as an alternative to &#x60;address&#x60; to set the backend location. | [optional] 
**ipv4** | **String** | IPv4 address of the backend. May be used as an alternative to &#x60;address&#x60; to set the backend location. | [optional] 
**ipv6** | **String** | IPv6 address of the backend. May be used as an alternative to &#x60;address&#x60; to set the backend location. | [optional] 
**locked** | **Boolean** | Indicates whether the version of the service this backend is attached to accepts edits. | [optional] [readonly] 
**maxConn** | **Number** | Maximum number of concurrent connections this backend will accept. | [optional] 
**maxTlsVersion** | **String** | Maximum allowed TLS version on SSL connections to this backend. If your backend server is not able to negotiate a connection meeting this constraint, a synthetic &#x60;503&#x60; error response will be generated. | [optional] 
**minTlsVersion** | **String** | Minimum allowed TLS version on SSL connections to this backend. If your backend server is not able to negotiate a connection meeting this constraint, a synthetic &#x60;503&#x60; error response will be generated. | [optional] 
**name** | **String** | The name of the backend. | [optional] 
**overrideHost** | **String** | If set, will replace the client-supplied HTTP &#x60;Host&#x60; header on connections to this backend. Applied after VCL has been processed, so this setting will take precedence over changing &#x60;bereq.http.Host&#x60; in VCL. | [optional] 
**port** | **Number** | Port on which the backend server is listening for connections from Fastly. Setting &#x60;port&#x60; to 80 or 443 will also set &#x60;use_ssl&#x60; automatically (to false and true respectively), unless explicitly overridden by setting &#x60;use_ssl&#x60; in the same request. | [optional] 
**requestCondition** | **String** | Name of a Condition, which if satisfied, will select this backend during a request. If set, will override any &#x60;auto_loadbalance&#x60; setting. By default, the first backend added to a service is selected for all requests. | [optional] 
**shield** | **String** | Data center POP code of the data center to use as a [shield](https://docs.fastly.com/en/guides/shielding). | [optional] 
**sslCaCert** | **String** | CA certificate attached to origin. | [optional] 
**sslCertHostname** | **String** | Overrides &#x60;ssl_hostname&#x60;, but only for cert verification. Does not affect SNI at all. | [optional] 
**sslCheckCert** | **Boolean** | Be strict on checking SSL certs. | [optional] [default to true]
**sslCiphers** | **String** | List of [OpenSSL ciphers](https://www.openssl.org/docs/manmaster/man1/ciphers.html) to support for connections to this origin. If your backend server is not able to negotiate a connection meeting this constraint, a synthetic &#x60;503&#x60; error response will be generated. | [optional] 
**sslClientCert** | **String** | Client certificate attached to origin. | [optional] 
**sslClientKey** | **String** | Client key attached to origin. | [optional] 
**sslHostname** | **String** | Use &#x60;ssl_cert_hostname&#x60; and &#x60;ssl_sni_hostname&#x60; to configure certificate validation. | [optional] 
**sslSniHostname** | **String** | Overrides &#x60;ssl_hostname&#x60;, but only for SNI in the handshake. Does not affect cert validation at all. | [optional] 
**useSsl** | **Boolean** | Whether or not to require TLS for connections to this backend. | [optional] 
**weight** | **Number** | Weight used to load balance this backend against others. May be any positive integer. If &#x60;auto_loadbalance&#x60; is true, the chance of this backend being selected is equal to its own weight over the sum of all weights for backends that have &#x60;auto_loadbalance&#x60; set to true. | [optional] 


