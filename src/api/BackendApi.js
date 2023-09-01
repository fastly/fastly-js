/**
 * Fastly API
 * Via the Fastly API you can perform any of the operations that are possible within the management console,  including creating services, domains, and backends, configuring rules or uploading your own application code, as well as account operations such as user administration and billing reports. The API is organized into collections of endpoints that allow manipulation of objects related to Fastly services and accounts. For the most accurate and up-to-date API reference content, visit our [Developer Hub](https://developer.fastly.com/reference/api/) 
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: oss@fastly.com
 *
 * NOTE: This class is auto generated.
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import BackendResponse from '../model/BackendResponse';
import InlineResponse200 from '../model/InlineResponse200';

/**
* Backend service.
* @module api/BackendApi
* @version 6.1.0
*/
export default class BackendApi {

    /**
    * Constructs a new BackendApi. 
    * @alias module:api/BackendApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;

        if (typeof window === 'undefined' && Boolean(process.env.FASTLY_API_TOKEN)) {
            this.apiClient.authenticate(process.env.FASTLY_API_TOKEN);
        }
    }


    /**
     * Create a backend for a particular service and version.
     * @param {Object} options
     * @param {String} options.service_id - Alphanumeric string identifying the service.
     * @param {Number} options.version_id - Integer identifying a service version.
     * @param {String} [options.address] - A hostname, IPv4, or IPv6 address for the backend. This is the preferred way to specify the location of your backend.
     * @param {Boolean} [options.auto_loadbalance] - Whether or not this backend should be automatically load balanced. If true, all backends with this setting that don't have a `request_condition` will be selected based on their `weight`.
     * @param {Number} [options.between_bytes_timeout] - Maximum duration in milliseconds that Fastly will wait while receiving no data on a download from a backend. If exceeded, the response received so far will be considered complete and the fetch will end. May be set at runtime using `bereq.between_bytes_timeout`.
     * @param {String} [options.client_cert] - Unused.
     * @param {String} [options.comment] - A freeform descriptive note.
     * @param {Number} [options.connect_timeout] - Maximum duration in milliseconds to wait for a connection to this backend to be established. If exceeded, the connection is aborted and a synthethic `503` response will be presented instead. May be set at runtime using `bereq.connect_timeout`.
     * @param {Number} [options.first_byte_timeout] - Maximum duration in milliseconds to wait for the server response to begin after a TCP connection is established and the request has been sent. If exceeded, the connection is aborted and a synthethic `503` response will be presented instead. May be set at runtime using `bereq.first_byte_timeout`.
     * @param {String} [options.healthcheck] - The name of the healthcheck to use with this backend.
     * @param {String} [options.hostname] - The hostname of the backend. May be used as an alternative to `address` to set the backend location.
     * @param {String} [options.ipv4] - IPv4 address of the backend. May be used as an alternative to `address` to set the backend location.
     * @param {String} [options.ipv6] - IPv6 address of the backend. May be used as an alternative to `address` to set the backend location.
     * @param {Number} [options.keepalive_time] - How long in seconds to keep a persistent connection to the backend between requests.
     * @param {Number} [options.max_conn] - Maximum number of concurrent connections this backend will accept.
     * @param {String} [options.max_tls_version] - Maximum allowed TLS version on SSL connections to this backend. If your backend server is not able to negotiate a connection meeting this constraint, a synthetic `503` error response will be generated.
     * @param {String} [options.min_tls_version] - Minimum allowed TLS version on SSL connections to this backend. If your backend server is not able to negotiate a connection meeting this constraint, a synthetic `503` error response will be generated.
     * @param {String} [options.name] - The name of the backend.
     * @param {String} [options.override_host] - If set, will replace the client-supplied HTTP `Host` header on connections to this backend. Applied after VCL has been processed, so this setting will take precedence over changing `bereq.http.Host` in VCL.
     * @param {Number} [options.port] - Port on which the backend server is listening for connections from Fastly. Setting `port` to 80 or 443 will also set `use_ssl` automatically (to false and true respectively), unless explicitly overridden by setting `use_ssl` in the same request.
     * @param {String} [options.request_condition] - Name of a Condition, which if satisfied, will select this backend during a request. If set, will override any `auto_loadbalance` setting. By default, the first backend added to a service is selected for all requests.
     * @param {String} [options.share_key] - Value that when shared across backends will enable those backends to share the same health check.
     * @param {String} [options.shield] - Identifier of the POP to use as a [shield](https://docs.fastly.com/en/guides/shielding).
     * @param {String} [options.ssl_ca_cert] - CA certificate attached to origin.
     * @param {String} [options.ssl_cert_hostname] - Overrides `ssl_hostname`, but only for cert verification. Does not affect SNI at all.
     * @param {Boolean} [options.ssl_check_cert=true] - Be strict on checking SSL certs.
     * @param {String} [options.ssl_ciphers] - List of [OpenSSL ciphers](https://www.openssl.org/docs/manmaster/man1/ciphers.html) to support for connections to this origin. If your backend server is not able to negotiate a connection meeting this constraint, a synthetic `503` error response will be generated.
     * @param {String} [options.ssl_client_cert] - Client certificate attached to origin.
     * @param {String} [options.ssl_client_key] - Client key attached to origin.
     * @param {String} [options.ssl_hostname] - Use `ssl_cert_hostname` and `ssl_sni_hostname` to configure certificate validation.
     * @param {String} [options.ssl_sni_hostname] - Overrides `ssl_hostname`, but only for SNI in the handshake. Does not affect cert validation at all.
     * @param {Boolean} [options.use_ssl] - Whether or not to require TLS for connections to this backend.
     * @param {Number} [options.weight] - Weight used to load balance this backend against others. May be any positive integer. If `auto_loadbalance` is true, the chance of this backend being selected is equal to its own weight over the sum of all weights for backends that have `auto_loadbalance` set to true.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/BackendResponse} and HTTP response
     */
    createBackendWithHttpInfo(options = {}) {
      let postBody = null;
      // Verify the required parameter 'service_id' is set.
      if (options['service_id'] === undefined || options['service_id'] === null) {
        throw new Error("Missing the required parameter 'service_id'.");
      }
      // Verify the required parameter 'version_id' is set.
      if (options['version_id'] === undefined || options['version_id'] === null) {
        throw new Error("Missing the required parameter 'version_id'.");
      }

      let pathParams = {
        'service_id': options['service_id'],
        'version_id': options['version_id']
      };
      let pathParamsAllowReserved = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
        'address': options['address'],
        'auto_loadbalance': options['auto_loadbalance'],
        'between_bytes_timeout': options['between_bytes_timeout'],
        'client_cert': options['client_cert'],
        'comment': options['comment'],
        'connect_timeout': options['connect_timeout'],
        'first_byte_timeout': options['first_byte_timeout'],
        'healthcheck': options['healthcheck'],
        'hostname': options['hostname'],
        'ipv4': options['ipv4'],
        'ipv6': options['ipv6'],
        'keepalive_time': options['keepalive_time'],
        'max_conn': options['max_conn'],
        'max_tls_version': options['max_tls_version'],
        'min_tls_version': options['min_tls_version'],
        'name': options['name'],
        'override_host': options['override_host'],
        'port': options['port'],
        'request_condition': options['request_condition'],
        'share_key': options['share_key'],
        'shield': options['shield'],
        'ssl_ca_cert': options['ssl_ca_cert'],
        'ssl_cert_hostname': options['ssl_cert_hostname'],
        'ssl_check_cert': options['ssl_check_cert'],
        'ssl_ciphers': options['ssl_ciphers'],
        'ssl_client_cert': options['ssl_client_cert'],
        'ssl_client_key': options['ssl_client_key'],
        'ssl_hostname': options['ssl_hostname'],
        'ssl_sni_hostname': options['ssl_sni_hostname'],
        'use_ssl': options['use_ssl'],
        'weight': options['weight']
      };

      let authNames = ['token'];
      let contentTypes = ['application/x-www-form-urlencoded'];
      let accepts = ['application/json'];
      let returnType = BackendResponse;
      let basePaths = ['https://api.fastly.com'];
      let basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI
      if (typeof options['_base_path_index'] !== 'undefined') {
        if (options['_base_path_index']  >= basePaths.length || options['_base_path_index'] <  0) {
          throw new Error("Invalid index " + options['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }
        basePath = basePaths[options['_base_path_index']];
      }

      return this.apiClient.callApi(
        '/service/{service_id}/version/{version_id}/backend', 'POST',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath
      );
    }

    /**
     * Create a backend for a particular service and version.
     * @param {Object} options
     * @param {String} options.service_id - Alphanumeric string identifying the service.
     * @param {Number} options.version_id - Integer identifying a service version.
     * @param {String} [options.address] - A hostname, IPv4, or IPv6 address for the backend. This is the preferred way to specify the location of your backend.
     * @param {Boolean} [options.auto_loadbalance] - Whether or not this backend should be automatically load balanced. If true, all backends with this setting that don't have a `request_condition` will be selected based on their `weight`.
     * @param {Number} [options.between_bytes_timeout] - Maximum duration in milliseconds that Fastly will wait while receiving no data on a download from a backend. If exceeded, the response received so far will be considered complete and the fetch will end. May be set at runtime using `bereq.between_bytes_timeout`.
     * @param {String} [options.client_cert] - Unused.
     * @param {String} [options.comment] - A freeform descriptive note.
     * @param {Number} [options.connect_timeout] - Maximum duration in milliseconds to wait for a connection to this backend to be established. If exceeded, the connection is aborted and a synthethic `503` response will be presented instead. May be set at runtime using `bereq.connect_timeout`.
     * @param {Number} [options.first_byte_timeout] - Maximum duration in milliseconds to wait for the server response to begin after a TCP connection is established and the request has been sent. If exceeded, the connection is aborted and a synthethic `503` response will be presented instead. May be set at runtime using `bereq.first_byte_timeout`.
     * @param {String} [options.healthcheck] - The name of the healthcheck to use with this backend.
     * @param {String} [options.hostname] - The hostname of the backend. May be used as an alternative to `address` to set the backend location.
     * @param {String} [options.ipv4] - IPv4 address of the backend. May be used as an alternative to `address` to set the backend location.
     * @param {String} [options.ipv6] - IPv6 address of the backend. May be used as an alternative to `address` to set the backend location.
     * @param {Number} [options.keepalive_time] - How long in seconds to keep a persistent connection to the backend between requests.
     * @param {Number} [options.max_conn] - Maximum number of concurrent connections this backend will accept.
     * @param {String} [options.max_tls_version] - Maximum allowed TLS version on SSL connections to this backend. If your backend server is not able to negotiate a connection meeting this constraint, a synthetic `503` error response will be generated.
     * @param {String} [options.min_tls_version] - Minimum allowed TLS version on SSL connections to this backend. If your backend server is not able to negotiate a connection meeting this constraint, a synthetic `503` error response will be generated.
     * @param {String} [options.name] - The name of the backend.
     * @param {String} [options.override_host] - If set, will replace the client-supplied HTTP `Host` header on connections to this backend. Applied after VCL has been processed, so this setting will take precedence over changing `bereq.http.Host` in VCL.
     * @param {Number} [options.port] - Port on which the backend server is listening for connections from Fastly. Setting `port` to 80 or 443 will also set `use_ssl` automatically (to false and true respectively), unless explicitly overridden by setting `use_ssl` in the same request.
     * @param {String} [options.request_condition] - Name of a Condition, which if satisfied, will select this backend during a request. If set, will override any `auto_loadbalance` setting. By default, the first backend added to a service is selected for all requests.
     * @param {String} [options.share_key] - Value that when shared across backends will enable those backends to share the same health check.
     * @param {String} [options.shield] - Identifier of the POP to use as a [shield](https://docs.fastly.com/en/guides/shielding).
     * @param {String} [options.ssl_ca_cert] - CA certificate attached to origin.
     * @param {String} [options.ssl_cert_hostname] - Overrides `ssl_hostname`, but only for cert verification. Does not affect SNI at all.
     * @param {Boolean} [options.ssl_check_cert=true] - Be strict on checking SSL certs.
     * @param {String} [options.ssl_ciphers] - List of [OpenSSL ciphers](https://www.openssl.org/docs/manmaster/man1/ciphers.html) to support for connections to this origin. If your backend server is not able to negotiate a connection meeting this constraint, a synthetic `503` error response will be generated.
     * @param {String} [options.ssl_client_cert] - Client certificate attached to origin.
     * @param {String} [options.ssl_client_key] - Client key attached to origin.
     * @param {String} [options.ssl_hostname] - Use `ssl_cert_hostname` and `ssl_sni_hostname` to configure certificate validation.
     * @param {String} [options.ssl_sni_hostname] - Overrides `ssl_hostname`, but only for SNI in the handshake. Does not affect cert validation at all.
     * @param {Boolean} [options.use_ssl] - Whether or not to require TLS for connections to this backend.
     * @param {Number} [options.weight] - Weight used to load balance this backend against others. May be any positive integer. If `auto_loadbalance` is true, the chance of this backend being selected is equal to its own weight over the sum of all weights for backends that have `auto_loadbalance` set to true.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/BackendResponse}
     */
    createBackend(options = {}) {
      return this.createBackendWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * Delete the backend for a particular service and version.
     * @param {Object} options
     * @param {String} options.service_id - Alphanumeric string identifying the service.
     * @param {Number} options.version_id - Integer identifying a service version.
     * @param {String} options.backend_name - The name of the backend.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse200} and HTTP response
     */
    deleteBackendWithHttpInfo(options = {}) {
      let postBody = null;
      // Verify the required parameter 'service_id' is set.
      if (options['service_id'] === undefined || options['service_id'] === null) {
        throw new Error("Missing the required parameter 'service_id'.");
      }
      // Verify the required parameter 'version_id' is set.
      if (options['version_id'] === undefined || options['version_id'] === null) {
        throw new Error("Missing the required parameter 'version_id'.");
      }
      // Verify the required parameter 'backend_name' is set.
      if (options['backend_name'] === undefined || options['backend_name'] === null) {
        throw new Error("Missing the required parameter 'backend_name'.");
      }

      let pathParams = {
        'service_id': options['service_id'],
        'version_id': options['version_id'],
        'backend_name': options['backend_name']
      };
      let pathParamsAllowReserved = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['token'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = InlineResponse200;
      let basePaths = ['https://api.fastly.com'];
      let basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI
      if (typeof options['_base_path_index'] !== 'undefined') {
        if (options['_base_path_index']  >= basePaths.length || options['_base_path_index'] <  0) {
          throw new Error("Invalid index " + options['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }
        basePath = basePaths[options['_base_path_index']];
      }

      return this.apiClient.callApi(
        '/service/{service_id}/version/{version_id}/backend/{backend_name}', 'DELETE',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath
      );
    }

    /**
     * Delete the backend for a particular service and version.
     * @param {Object} options
     * @param {String} options.service_id - Alphanumeric string identifying the service.
     * @param {Number} options.version_id - Integer identifying a service version.
     * @param {String} options.backend_name - The name of the backend.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse200}
     */
    deleteBackend(options = {}) {
      return this.deleteBackendWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * Get the backend for a particular service and version.
     * @param {Object} options
     * @param {String} options.service_id - Alphanumeric string identifying the service.
     * @param {Number} options.version_id - Integer identifying a service version.
     * @param {String} options.backend_name - The name of the backend.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/BackendResponse} and HTTP response
     */
    getBackendWithHttpInfo(options = {}) {
      let postBody = null;
      // Verify the required parameter 'service_id' is set.
      if (options['service_id'] === undefined || options['service_id'] === null) {
        throw new Error("Missing the required parameter 'service_id'.");
      }
      // Verify the required parameter 'version_id' is set.
      if (options['version_id'] === undefined || options['version_id'] === null) {
        throw new Error("Missing the required parameter 'version_id'.");
      }
      // Verify the required parameter 'backend_name' is set.
      if (options['backend_name'] === undefined || options['backend_name'] === null) {
        throw new Error("Missing the required parameter 'backend_name'.");
      }

      let pathParams = {
        'service_id': options['service_id'],
        'version_id': options['version_id'],
        'backend_name': options['backend_name']
      };
      let pathParamsAllowReserved = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['token'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = BackendResponse;
      let basePaths = ['https://api.fastly.com'];
      let basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI
      if (typeof options['_base_path_index'] !== 'undefined') {
        if (options['_base_path_index']  >= basePaths.length || options['_base_path_index'] <  0) {
          throw new Error("Invalid index " + options['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }
        basePath = basePaths[options['_base_path_index']];
      }

      return this.apiClient.callApi(
        '/service/{service_id}/version/{version_id}/backend/{backend_name}', 'GET',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath
      );
    }

    /**
     * Get the backend for a particular service and version.
     * @param {Object} options
     * @param {String} options.service_id - Alphanumeric string identifying the service.
     * @param {Number} options.version_id - Integer identifying a service version.
     * @param {String} options.backend_name - The name of the backend.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/BackendResponse}
     */
    getBackend(options = {}) {
      return this.getBackendWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * List all backends for a particular service and version.
     * @param {Object} options
     * @param {String} options.service_id - Alphanumeric string identifying the service.
     * @param {Number} options.version_id - Integer identifying a service version.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/BackendResponse>} and HTTP response
     */
    listBackendsWithHttpInfo(options = {}) {
      let postBody = null;
      // Verify the required parameter 'service_id' is set.
      if (options['service_id'] === undefined || options['service_id'] === null) {
        throw new Error("Missing the required parameter 'service_id'.");
      }
      // Verify the required parameter 'version_id' is set.
      if (options['version_id'] === undefined || options['version_id'] === null) {
        throw new Error("Missing the required parameter 'version_id'.");
      }

      let pathParams = {
        'service_id': options['service_id'],
        'version_id': options['version_id']
      };
      let pathParamsAllowReserved = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['token'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [BackendResponse];
      let basePaths = ['https://api.fastly.com'];
      let basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI
      if (typeof options['_base_path_index'] !== 'undefined') {
        if (options['_base_path_index']  >= basePaths.length || options['_base_path_index'] <  0) {
          throw new Error("Invalid index " + options['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }
        basePath = basePaths[options['_base_path_index']];
      }

      return this.apiClient.callApi(
        '/service/{service_id}/version/{version_id}/backend', 'GET',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath
      );
    }

    /**
     * List all backends for a particular service and version.
     * @param {Object} options
     * @param {String} options.service_id - Alphanumeric string identifying the service.
     * @param {Number} options.version_id - Integer identifying a service version.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/BackendResponse>}
     */
    listBackends(options = {}) {
      return this.listBackendsWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * Update the backend for a particular service and version.
     * @param {Object} options
     * @param {String} options.service_id - Alphanumeric string identifying the service.
     * @param {Number} options.version_id - Integer identifying a service version.
     * @param {String} options.backend_name - The name of the backend.
     * @param {String} [options.address] - A hostname, IPv4, or IPv6 address for the backend. This is the preferred way to specify the location of your backend.
     * @param {Boolean} [options.auto_loadbalance] - Whether or not this backend should be automatically load balanced. If true, all backends with this setting that don't have a `request_condition` will be selected based on their `weight`.
     * @param {Number} [options.between_bytes_timeout] - Maximum duration in milliseconds that Fastly will wait while receiving no data on a download from a backend. If exceeded, the response received so far will be considered complete and the fetch will end. May be set at runtime using `bereq.between_bytes_timeout`.
     * @param {String} [options.client_cert] - Unused.
     * @param {String} [options.comment] - A freeform descriptive note.
     * @param {Number} [options.connect_timeout] - Maximum duration in milliseconds to wait for a connection to this backend to be established. If exceeded, the connection is aborted and a synthethic `503` response will be presented instead. May be set at runtime using `bereq.connect_timeout`.
     * @param {Number} [options.first_byte_timeout] - Maximum duration in milliseconds to wait for the server response to begin after a TCP connection is established and the request has been sent. If exceeded, the connection is aborted and a synthethic `503` response will be presented instead. May be set at runtime using `bereq.first_byte_timeout`.
     * @param {String} [options.healthcheck] - The name of the healthcheck to use with this backend.
     * @param {String} [options.hostname] - The hostname of the backend. May be used as an alternative to `address` to set the backend location.
     * @param {String} [options.ipv4] - IPv4 address of the backend. May be used as an alternative to `address` to set the backend location.
     * @param {String} [options.ipv6] - IPv6 address of the backend. May be used as an alternative to `address` to set the backend location.
     * @param {Number} [options.keepalive_time] - How long in seconds to keep a persistent connection to the backend between requests.
     * @param {Number} [options.max_conn] - Maximum number of concurrent connections this backend will accept.
     * @param {String} [options.max_tls_version] - Maximum allowed TLS version on SSL connections to this backend. If your backend server is not able to negotiate a connection meeting this constraint, a synthetic `503` error response will be generated.
     * @param {String} [options.min_tls_version] - Minimum allowed TLS version on SSL connections to this backend. If your backend server is not able to negotiate a connection meeting this constraint, a synthetic `503` error response will be generated.
     * @param {String} [options.name] - The name of the backend.
     * @param {String} [options.override_host] - If set, will replace the client-supplied HTTP `Host` header on connections to this backend. Applied after VCL has been processed, so this setting will take precedence over changing `bereq.http.Host` in VCL.
     * @param {Number} [options.port] - Port on which the backend server is listening for connections from Fastly. Setting `port` to 80 or 443 will also set `use_ssl` automatically (to false and true respectively), unless explicitly overridden by setting `use_ssl` in the same request.
     * @param {String} [options.request_condition] - Name of a Condition, which if satisfied, will select this backend during a request. If set, will override any `auto_loadbalance` setting. By default, the first backend added to a service is selected for all requests.
     * @param {String} [options.share_key] - Value that when shared across backends will enable those backends to share the same health check.
     * @param {String} [options.shield] - Identifier of the POP to use as a [shield](https://docs.fastly.com/en/guides/shielding).
     * @param {String} [options.ssl_ca_cert] - CA certificate attached to origin.
     * @param {String} [options.ssl_cert_hostname] - Overrides `ssl_hostname`, but only for cert verification. Does not affect SNI at all.
     * @param {Boolean} [options.ssl_check_cert=true] - Be strict on checking SSL certs.
     * @param {String} [options.ssl_ciphers] - List of [OpenSSL ciphers](https://www.openssl.org/docs/manmaster/man1/ciphers.html) to support for connections to this origin. If your backend server is not able to negotiate a connection meeting this constraint, a synthetic `503` error response will be generated.
     * @param {String} [options.ssl_client_cert] - Client certificate attached to origin.
     * @param {String} [options.ssl_client_key] - Client key attached to origin.
     * @param {String} [options.ssl_hostname] - Use `ssl_cert_hostname` and `ssl_sni_hostname` to configure certificate validation.
     * @param {String} [options.ssl_sni_hostname] - Overrides `ssl_hostname`, but only for SNI in the handshake. Does not affect cert validation at all.
     * @param {Boolean} [options.use_ssl] - Whether or not to require TLS for connections to this backend.
     * @param {Number} [options.weight] - Weight used to load balance this backend against others. May be any positive integer. If `auto_loadbalance` is true, the chance of this backend being selected is equal to its own weight over the sum of all weights for backends that have `auto_loadbalance` set to true.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/BackendResponse} and HTTP response
     */
    updateBackendWithHttpInfo(options = {}) {
      let postBody = null;
      // Verify the required parameter 'service_id' is set.
      if (options['service_id'] === undefined || options['service_id'] === null) {
        throw new Error("Missing the required parameter 'service_id'.");
      }
      // Verify the required parameter 'version_id' is set.
      if (options['version_id'] === undefined || options['version_id'] === null) {
        throw new Error("Missing the required parameter 'version_id'.");
      }
      // Verify the required parameter 'backend_name' is set.
      if (options['backend_name'] === undefined || options['backend_name'] === null) {
        throw new Error("Missing the required parameter 'backend_name'.");
      }

      let pathParams = {
        'service_id': options['service_id'],
        'version_id': options['version_id'],
        'backend_name': options['backend_name']
      };
      let pathParamsAllowReserved = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
        'address': options['address'],
        'auto_loadbalance': options['auto_loadbalance'],
        'between_bytes_timeout': options['between_bytes_timeout'],
        'client_cert': options['client_cert'],
        'comment': options['comment'],
        'connect_timeout': options['connect_timeout'],
        'first_byte_timeout': options['first_byte_timeout'],
        'healthcheck': options['healthcheck'],
        'hostname': options['hostname'],
        'ipv4': options['ipv4'],
        'ipv6': options['ipv6'],
        'keepalive_time': options['keepalive_time'],
        'max_conn': options['max_conn'],
        'max_tls_version': options['max_tls_version'],
        'min_tls_version': options['min_tls_version'],
        'name': options['name'],
        'override_host': options['override_host'],
        'port': options['port'],
        'request_condition': options['request_condition'],
        'share_key': options['share_key'],
        'shield': options['shield'],
        'ssl_ca_cert': options['ssl_ca_cert'],
        'ssl_cert_hostname': options['ssl_cert_hostname'],
        'ssl_check_cert': options['ssl_check_cert'],
        'ssl_ciphers': options['ssl_ciphers'],
        'ssl_client_cert': options['ssl_client_cert'],
        'ssl_client_key': options['ssl_client_key'],
        'ssl_hostname': options['ssl_hostname'],
        'ssl_sni_hostname': options['ssl_sni_hostname'],
        'use_ssl': options['use_ssl'],
        'weight': options['weight']
      };

      let authNames = ['token'];
      let contentTypes = ['application/x-www-form-urlencoded'];
      let accepts = ['application/json'];
      let returnType = BackendResponse;
      let basePaths = ['https://api.fastly.com'];
      let basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI
      if (typeof options['_base_path_index'] !== 'undefined') {
        if (options['_base_path_index']  >= basePaths.length || options['_base_path_index'] <  0) {
          throw new Error("Invalid index " + options['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }
        basePath = basePaths[options['_base_path_index']];
      }

      return this.apiClient.callApi(
        '/service/{service_id}/version/{version_id}/backend/{backend_name}', 'PUT',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath
      );
    }

    /**
     * Update the backend for a particular service and version.
     * @param {Object} options
     * @param {String} options.service_id - Alphanumeric string identifying the service.
     * @param {Number} options.version_id - Integer identifying a service version.
     * @param {String} options.backend_name - The name of the backend.
     * @param {String} [options.address] - A hostname, IPv4, or IPv6 address for the backend. This is the preferred way to specify the location of your backend.
     * @param {Boolean} [options.auto_loadbalance] - Whether or not this backend should be automatically load balanced. If true, all backends with this setting that don't have a `request_condition` will be selected based on their `weight`.
     * @param {Number} [options.between_bytes_timeout] - Maximum duration in milliseconds that Fastly will wait while receiving no data on a download from a backend. If exceeded, the response received so far will be considered complete and the fetch will end. May be set at runtime using `bereq.between_bytes_timeout`.
     * @param {String} [options.client_cert] - Unused.
     * @param {String} [options.comment] - A freeform descriptive note.
     * @param {Number} [options.connect_timeout] - Maximum duration in milliseconds to wait for a connection to this backend to be established. If exceeded, the connection is aborted and a synthethic `503` response will be presented instead. May be set at runtime using `bereq.connect_timeout`.
     * @param {Number} [options.first_byte_timeout] - Maximum duration in milliseconds to wait for the server response to begin after a TCP connection is established and the request has been sent. If exceeded, the connection is aborted and a synthethic `503` response will be presented instead. May be set at runtime using `bereq.first_byte_timeout`.
     * @param {String} [options.healthcheck] - The name of the healthcheck to use with this backend.
     * @param {String} [options.hostname] - The hostname of the backend. May be used as an alternative to `address` to set the backend location.
     * @param {String} [options.ipv4] - IPv4 address of the backend. May be used as an alternative to `address` to set the backend location.
     * @param {String} [options.ipv6] - IPv6 address of the backend. May be used as an alternative to `address` to set the backend location.
     * @param {Number} [options.keepalive_time] - How long in seconds to keep a persistent connection to the backend between requests.
     * @param {Number} [options.max_conn] - Maximum number of concurrent connections this backend will accept.
     * @param {String} [options.max_tls_version] - Maximum allowed TLS version on SSL connections to this backend. If your backend server is not able to negotiate a connection meeting this constraint, a synthetic `503` error response will be generated.
     * @param {String} [options.min_tls_version] - Minimum allowed TLS version on SSL connections to this backend. If your backend server is not able to negotiate a connection meeting this constraint, a synthetic `503` error response will be generated.
     * @param {String} [options.name] - The name of the backend.
     * @param {String} [options.override_host] - If set, will replace the client-supplied HTTP `Host` header on connections to this backend. Applied after VCL has been processed, so this setting will take precedence over changing `bereq.http.Host` in VCL.
     * @param {Number} [options.port] - Port on which the backend server is listening for connections from Fastly. Setting `port` to 80 or 443 will also set `use_ssl` automatically (to false and true respectively), unless explicitly overridden by setting `use_ssl` in the same request.
     * @param {String} [options.request_condition] - Name of a Condition, which if satisfied, will select this backend during a request. If set, will override any `auto_loadbalance` setting. By default, the first backend added to a service is selected for all requests.
     * @param {String} [options.share_key] - Value that when shared across backends will enable those backends to share the same health check.
     * @param {String} [options.shield] - Identifier of the POP to use as a [shield](https://docs.fastly.com/en/guides/shielding).
     * @param {String} [options.ssl_ca_cert] - CA certificate attached to origin.
     * @param {String} [options.ssl_cert_hostname] - Overrides `ssl_hostname`, but only for cert verification. Does not affect SNI at all.
     * @param {Boolean} [options.ssl_check_cert=true] - Be strict on checking SSL certs.
     * @param {String} [options.ssl_ciphers] - List of [OpenSSL ciphers](https://www.openssl.org/docs/manmaster/man1/ciphers.html) to support for connections to this origin. If your backend server is not able to negotiate a connection meeting this constraint, a synthetic `503` error response will be generated.
     * @param {String} [options.ssl_client_cert] - Client certificate attached to origin.
     * @param {String} [options.ssl_client_key] - Client key attached to origin.
     * @param {String} [options.ssl_hostname] - Use `ssl_cert_hostname` and `ssl_sni_hostname` to configure certificate validation.
     * @param {String} [options.ssl_sni_hostname] - Overrides `ssl_hostname`, but only for SNI in the handshake. Does not affect cert validation at all.
     * @param {Boolean} [options.use_ssl] - Whether or not to require TLS for connections to this backend.
     * @param {Number} [options.weight] - Weight used to load balance this backend against others. May be any positive integer. If `auto_loadbalance` is true, the chance of this backend being selected is equal to its own weight over the sum of all weights for backends that have `auto_loadbalance` set to true.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/BackendResponse}
     */
    updateBackend(options = {}) {
      return this.updateBackendWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
