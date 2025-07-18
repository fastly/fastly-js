/**
 * Fastly API
 * Via the Fastly API you can perform any of the operations that are possible within the management console,  including creating services, domains, and backends, configuring rules or uploading your own application code, as well as account operations such as user administration and billing reports. The API is organized into collections of endpoints that allow manipulation of objects related to Fastly services and accounts. For the most accurate and up-to-date API reference content, visit our [Developer Hub](https://www.fastly.com/documentation/reference/api/) 
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: oss@fastly.com
 *
 * NOTE: This class is auto generated.
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import InlineResponse200 from '../model/InlineResponse200';
import PoolResponse from '../model/PoolResponse';
import PoolResponsePost from '../model/PoolResponsePost';

/**
* Pool service.
* @module api/PoolApi
* @version 12.1.0
*/
export default class PoolApi {

    /**
    * Constructs a new PoolApi. 
    * @alias module:api/PoolApi
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
     * Creates a pool for a particular service and version.
     * @param {Object} options
     * @param {String} options.service_id - Alphanumeric string identifying the service.
     * @param {Number} options.version_id - Integer identifying a service version.
     * @param {String} [options.tls_ca_cert='null'] - A secure certificate to authenticate a server with. Must be in PEM format.
     * @param {String} [options.tls_client_cert='null'] - The client certificate used to make authenticated requests. Must be in PEM format.
     * @param {String} [options.tls_client_key='null'] - The client private key used to make authenticated requests. Must be in PEM format.
     * @param {String} [options.tls_cert_hostname='null'] - The hostname used to verify a server's certificate. It can either be the Common Name (CN) or a Subject Alternative Name (SAN).
     * @param {module:model/Number} [options.use_tls=0] - Whether to use TLS.
     * @param {Date} [options.created_at] - Date and time in ISO 8601 format.
     * @param {Date} [options.deleted_at] - Date and time in ISO 8601 format.
     * @param {Date} [options.updated_at] - Date and time in ISO 8601 format.
     * @param {String} [options.service_id2]
     * @param {String} [options.version]
     * @param {String} [options.name] - Name for the Pool.
     * @param {String} [options.shield='null'] - Selected POP to serve as a shield for the servers. Defaults to `null` meaning no origin shielding if not set. Refer to the [POPs API endpoint](https://www.fastly.com/documentation/reference/api/utils/pops/) to get a list of available POPs used for shielding.
     * @param {String} [options.request_condition] - Condition which, if met, will select this configuration during a request. Optional.
     * @param {String} [options.tls_ciphers] - List of OpenSSL ciphers (see the [openssl.org manpages](https://www.openssl.org/docs/man1.1.1/man1/ciphers.html) for details). Optional.
     * @param {String} [options.tls_sni_hostname] - SNI hostname. Optional.
     * @param {Number} [options.min_tls_version] - Minimum allowed TLS version on connections to this server. Optional.
     * @param {Number} [options.max_tls_version] - Maximum allowed TLS version on connections to this server. Optional.
     * @param {String} [options.healthcheck] - Name of the healthcheck to use with this pool. Can be empty and could be reused across multiple backend and pools.
     * @param {String} [options.comment] - A freeform descriptive note.
     * @param {module:model/String} [options.type] - What type of load balance group to use.
     * @param {String} [options.override_host='null'] - The hostname to [override the Host header](https://www.fastly.com/documentation/guides/full-site-delivery/domains-and-origins/specifying-an-override-host/). Defaults to `null` meaning no override of the Host header will occur. This setting can also be added to a Server definition. If the field is set on a Server definition it will override the Pool setting.
     * @param {Number} [options.between_bytes_timeout=10000] - Maximum duration in milliseconds that Fastly will wait while receiving no data on a download from a backend. If exceeded, the response received so far will be considered complete and the fetch will end. May be set at runtime using `bereq.between_bytes_timeout`.
     * @param {Number} [options.connect_timeout] - How long to wait for a timeout in milliseconds. Optional.
     * @param {Number} [options.first_byte_timeout] - How long to wait for the first byte in milliseconds. Optional.
     * @param {Number} [options.max_conn_default=200] - Maximum number of connections. Optional.
     * @param {Number} [options.quorum=75] - Percentage of capacity (`0-100`) that needs to be operationally available for a pool to be considered up.
     * @param {Number} [options.tls_check_cert] - Be strict on checking TLS certs. Optional.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/PoolResponsePost} and HTTP response
     */
    createServerPoolWithHttpInfo(options = {}) {
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
        'tls_ca_cert': options['tls_ca_cert'],
        'tls_client_cert': options['tls_client_cert'],
        'tls_client_key': options['tls_client_key'],
        'tls_cert_hostname': options['tls_cert_hostname'],
        'use_tls': options['use_tls'],
        'created_at': options['created_at'],
        'deleted_at': options['deleted_at'],
        'updated_at': options['updated_at'],
        'service_id': options['service_id2'],
        'version': options['version'],
        'name': options['name'],
        'shield': options['shield'],
        'request_condition': options['request_condition'],
        'tls_ciphers': options['tls_ciphers'],
        'tls_sni_hostname': options['tls_sni_hostname'],
        'min_tls_version': options['min_tls_version'],
        'max_tls_version': options['max_tls_version'],
        'healthcheck': options['healthcheck'],
        'comment': options['comment'],
        'type': options['type'],
        'override_host': options['override_host'],
        'between_bytes_timeout': options['between_bytes_timeout'],
        'connect_timeout': options['connect_timeout'],
        'first_byte_timeout': options['first_byte_timeout'],
        'max_conn_default': options['max_conn_default'],
        'quorum': options['quorum'],
        'tls_check_cert': options['tls_check_cert']
      };

      let authNames = ['token'];
      let contentTypes = ['application/x-www-form-urlencoded'];
      let accepts = ['application/json'];
      let returnType = PoolResponsePost;
      let basePaths = ['https://api.fastly.com'];
      let basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI
      if (typeof options['_base_path_index'] !== 'undefined') {
        if (options['_base_path_index']  >= basePaths.length || options['_base_path_index'] <  0) {
          throw new Error("Invalid index " + options['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }
        basePath = basePaths[options['_base_path_index']];
      }

      return this.apiClient.callApi(
        '/service/{service_id}/version/{version_id}/pool', 'POST',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath
      );
    }

    /**
     * Creates a pool for a particular service and version.
     * @param {Object} options
     * @param {String} options.service_id - Alphanumeric string identifying the service.
     * @param {Number} options.version_id - Integer identifying a service version.
     * @param {String} [options.tls_ca_cert='null'] - A secure certificate to authenticate a server with. Must be in PEM format.
     * @param {String} [options.tls_client_cert='null'] - The client certificate used to make authenticated requests. Must be in PEM format.
     * @param {String} [options.tls_client_key='null'] - The client private key used to make authenticated requests. Must be in PEM format.
     * @param {String} [options.tls_cert_hostname='null'] - The hostname used to verify a server's certificate. It can either be the Common Name (CN) or a Subject Alternative Name (SAN).
     * @param {module:model/Number} [options.use_tls=0] - Whether to use TLS.
     * @param {Date} [options.created_at] - Date and time in ISO 8601 format.
     * @param {Date} [options.deleted_at] - Date and time in ISO 8601 format.
     * @param {Date} [options.updated_at] - Date and time in ISO 8601 format.
     * @param {String} [options.service_id2]
     * @param {String} [options.version]
     * @param {String} [options.name] - Name for the Pool.
     * @param {String} [options.shield='null'] - Selected POP to serve as a shield for the servers. Defaults to `null` meaning no origin shielding if not set. Refer to the [POPs API endpoint](https://www.fastly.com/documentation/reference/api/utils/pops/) to get a list of available POPs used for shielding.
     * @param {String} [options.request_condition] - Condition which, if met, will select this configuration during a request. Optional.
     * @param {String} [options.tls_ciphers] - List of OpenSSL ciphers (see the [openssl.org manpages](https://www.openssl.org/docs/man1.1.1/man1/ciphers.html) for details). Optional.
     * @param {String} [options.tls_sni_hostname] - SNI hostname. Optional.
     * @param {Number} [options.min_tls_version] - Minimum allowed TLS version on connections to this server. Optional.
     * @param {Number} [options.max_tls_version] - Maximum allowed TLS version on connections to this server. Optional.
     * @param {String} [options.healthcheck] - Name of the healthcheck to use with this pool. Can be empty and could be reused across multiple backend and pools.
     * @param {String} [options.comment] - A freeform descriptive note.
     * @param {module:model/String} [options.type] - What type of load balance group to use.
     * @param {String} [options.override_host='null'] - The hostname to [override the Host header](https://www.fastly.com/documentation/guides/full-site-delivery/domains-and-origins/specifying-an-override-host/). Defaults to `null` meaning no override of the Host header will occur. This setting can also be added to a Server definition. If the field is set on a Server definition it will override the Pool setting.
     * @param {Number} [options.between_bytes_timeout=10000] - Maximum duration in milliseconds that Fastly will wait while receiving no data on a download from a backend. If exceeded, the response received so far will be considered complete and the fetch will end. May be set at runtime using `bereq.between_bytes_timeout`.
     * @param {Number} [options.connect_timeout] - How long to wait for a timeout in milliseconds. Optional.
     * @param {Number} [options.first_byte_timeout] - How long to wait for the first byte in milliseconds. Optional.
     * @param {Number} [options.max_conn_default=200] - Maximum number of connections. Optional.
     * @param {Number} [options.quorum=75] - Percentage of capacity (`0-100`) that needs to be operationally available for a pool to be considered up.
     * @param {Number} [options.tls_check_cert] - Be strict on checking TLS certs. Optional.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PoolResponsePost}
     */
    createServerPool(options = {}) {
      return this.createServerPoolWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * Deletes a specific pool for a particular service and version.
     * @param {Object} options
     * @param {String} options.service_id - Alphanumeric string identifying the service.
     * @param {Number} options.version_id - Integer identifying a service version.
     * @param {String} options.pool_name - Name for the Pool.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse200} and HTTP response
     */
    deleteServerPoolWithHttpInfo(options = {}) {
      let postBody = null;
      // Verify the required parameter 'service_id' is set.
      if (options['service_id'] === undefined || options['service_id'] === null) {
        throw new Error("Missing the required parameter 'service_id'.");
      }
      // Verify the required parameter 'version_id' is set.
      if (options['version_id'] === undefined || options['version_id'] === null) {
        throw new Error("Missing the required parameter 'version_id'.");
      }
      // Verify the required parameter 'pool_name' is set.
      if (options['pool_name'] === undefined || options['pool_name'] === null) {
        throw new Error("Missing the required parameter 'pool_name'.");
      }

      let pathParams = {
        'service_id': options['service_id'],
        'version_id': options['version_id'],
        'pool_name': options['pool_name']
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
        '/service/{service_id}/version/{version_id}/pool/{pool_name}', 'DELETE',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath
      );
    }

    /**
     * Deletes a specific pool for a particular service and version.
     * @param {Object} options
     * @param {String} options.service_id - Alphanumeric string identifying the service.
     * @param {Number} options.version_id - Integer identifying a service version.
     * @param {String} options.pool_name - Name for the Pool.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse200}
     */
    deleteServerPool(options = {}) {
      return this.deleteServerPoolWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * Gets a single pool for a particular service and version.
     * @param {Object} options
     * @param {String} options.service_id - Alphanumeric string identifying the service.
     * @param {Number} options.version_id - Integer identifying a service version.
     * @param {String} options.pool_name - Name for the Pool.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/PoolResponse} and HTTP response
     */
    getServerPoolWithHttpInfo(options = {}) {
      let postBody = null;
      // Verify the required parameter 'service_id' is set.
      if (options['service_id'] === undefined || options['service_id'] === null) {
        throw new Error("Missing the required parameter 'service_id'.");
      }
      // Verify the required parameter 'version_id' is set.
      if (options['version_id'] === undefined || options['version_id'] === null) {
        throw new Error("Missing the required parameter 'version_id'.");
      }
      // Verify the required parameter 'pool_name' is set.
      if (options['pool_name'] === undefined || options['pool_name'] === null) {
        throw new Error("Missing the required parameter 'pool_name'.");
      }

      let pathParams = {
        'service_id': options['service_id'],
        'version_id': options['version_id'],
        'pool_name': options['pool_name']
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
      let returnType = PoolResponse;
      let basePaths = ['https://api.fastly.com'];
      let basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI
      if (typeof options['_base_path_index'] !== 'undefined') {
        if (options['_base_path_index']  >= basePaths.length || options['_base_path_index'] <  0) {
          throw new Error("Invalid index " + options['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }
        basePath = basePaths[options['_base_path_index']];
      }

      return this.apiClient.callApi(
        '/service/{service_id}/version/{version_id}/pool/{pool_name}', 'GET',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath
      );
    }

    /**
     * Gets a single pool for a particular service and version.
     * @param {Object} options
     * @param {String} options.service_id - Alphanumeric string identifying the service.
     * @param {Number} options.version_id - Integer identifying a service version.
     * @param {String} options.pool_name - Name for the Pool.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PoolResponse}
     */
    getServerPool(options = {}) {
      return this.getServerPoolWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * Lists all pools for a particular service and pool.
     * @param {Object} options
     * @param {String} options.service_id - Alphanumeric string identifying the service.
     * @param {Number} options.version_id - Integer identifying a service version.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/PoolResponse>} and HTTP response
     */
    listServerPoolsWithHttpInfo(options = {}) {
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
      let returnType = [PoolResponse];
      let basePaths = ['https://api.fastly.com'];
      let basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI
      if (typeof options['_base_path_index'] !== 'undefined') {
        if (options['_base_path_index']  >= basePaths.length || options['_base_path_index'] <  0) {
          throw new Error("Invalid index " + options['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }
        basePath = basePaths[options['_base_path_index']];
      }

      return this.apiClient.callApi(
        '/service/{service_id}/version/{version_id}/pool', 'GET',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath
      );
    }

    /**
     * Lists all pools for a particular service and pool.
     * @param {Object} options
     * @param {String} options.service_id - Alphanumeric string identifying the service.
     * @param {Number} options.version_id - Integer identifying a service version.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/PoolResponse>}
     */
    listServerPools(options = {}) {
      return this.listServerPoolsWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * Updates a specific pool for a particular service and version.
     * @param {Object} options
     * @param {String} options.service_id - Alphanumeric string identifying the service.
     * @param {Number} options.version_id - Integer identifying a service version.
     * @param {String} options.pool_name - Name for the Pool.
     * @param {String} [options.tls_ca_cert='null'] - A secure certificate to authenticate a server with. Must be in PEM format.
     * @param {String} [options.tls_client_cert='null'] - The client certificate used to make authenticated requests. Must be in PEM format.
     * @param {String} [options.tls_client_key='null'] - The client private key used to make authenticated requests. Must be in PEM format.
     * @param {String} [options.tls_cert_hostname='null'] - The hostname used to verify a server's certificate. It can either be the Common Name (CN) or a Subject Alternative Name (SAN).
     * @param {module:model/Number} [options.use_tls=UseTlsEnum.no_tls] - Whether to use TLS.
     * @param {Date} [options.created_at] - Date and time in ISO 8601 format.
     * @param {Date} [options.deleted_at] - Date and time in ISO 8601 format.
     * @param {Date} [options.updated_at] - Date and time in ISO 8601 format.
     * @param {String} [options.service_id2]
     * @param {String} [options.version]
     * @param {String} [options.name] - Name for the Pool.
     * @param {String} [options.shield='null'] - Selected POP to serve as a shield for the servers. Defaults to `null` meaning no origin shielding if not set. Refer to the [POPs API endpoint](https://www.fastly.com/documentation/reference/api/utils/pops/) to get a list of available POPs used for shielding.
     * @param {String} [options.request_condition] - Condition which, if met, will select this configuration during a request. Optional.
     * @param {String} [options.tls_ciphers] - List of OpenSSL ciphers (see the [openssl.org manpages](https://www.openssl.org/docs/man1.1.1/man1/ciphers.html) for details). Optional.
     * @param {String} [options.tls_sni_hostname] - SNI hostname. Optional.
     * @param {Number} [options.min_tls_version] - Minimum allowed TLS version on connections to this server. Optional.
     * @param {Number} [options.max_tls_version] - Maximum allowed TLS version on connections to this server. Optional.
     * @param {String} [options.healthcheck] - Name of the healthcheck to use with this pool. Can be empty and could be reused across multiple backend and pools.
     * @param {String} [options.comment] - A freeform descriptive note.
     * @param {module:model/String} [options.type] - What type of load balance group to use.
     * @param {String} [options.override_host='null'] - The hostname to [override the Host header](https://www.fastly.com/documentation/guides/full-site-delivery/domains-and-origins/specifying-an-override-host/). Defaults to `null` meaning no override of the Host header will occur. This setting can also be added to a Server definition. If the field is set on a Server definition it will override the Pool setting.
     * @param {Number} [options.between_bytes_timeout=10000] - Maximum duration in milliseconds that Fastly will wait while receiving no data on a download from a backend. If exceeded, the response received so far will be considered complete and the fetch will end. May be set at runtime using `bereq.between_bytes_timeout`.
     * @param {Number} [options.connect_timeout] - How long to wait for a timeout in milliseconds. Optional.
     * @param {Number} [options.first_byte_timeout] - How long to wait for the first byte in milliseconds. Optional.
     * @param {Number} [options.max_conn_default=200] - Maximum number of connections. Optional.
     * @param {Number} [options.quorum=75] - Percentage of capacity (`0-100`) that needs to be operationally available for a pool to be considered up.
     * @param {Number} [options.tls_check_cert] - Be strict on checking TLS certs. Optional.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/PoolResponse} and HTTP response
     */
    updateServerPoolWithHttpInfo(options = {}) {
      let postBody = null;
      // Verify the required parameter 'service_id' is set.
      if (options['service_id'] === undefined || options['service_id'] === null) {
        throw new Error("Missing the required parameter 'service_id'.");
      }
      // Verify the required parameter 'version_id' is set.
      if (options['version_id'] === undefined || options['version_id'] === null) {
        throw new Error("Missing the required parameter 'version_id'.");
      }
      // Verify the required parameter 'pool_name' is set.
      if (options['pool_name'] === undefined || options['pool_name'] === null) {
        throw new Error("Missing the required parameter 'pool_name'.");
      }

      let pathParams = {
        'service_id': options['service_id'],
        'version_id': options['version_id'],
        'pool_name': options['pool_name']
      };
      let pathParamsAllowReserved = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
        'tls_ca_cert': options['tls_ca_cert'],
        'tls_client_cert': options['tls_client_cert'],
        'tls_client_key': options['tls_client_key'],
        'tls_cert_hostname': options['tls_cert_hostname'],
        'use_tls': options['use_tls'],
        'created_at': options['created_at'],
        'deleted_at': options['deleted_at'],
        'updated_at': options['updated_at'],
        'service_id': options['service_id2'],
        'version': options['version'],
        'name': options['name'],
        'shield': options['shield'],
        'request_condition': options['request_condition'],
        'tls_ciphers': options['tls_ciphers'],
        'tls_sni_hostname': options['tls_sni_hostname'],
        'min_tls_version': options['min_tls_version'],
        'max_tls_version': options['max_tls_version'],
        'healthcheck': options['healthcheck'],
        'comment': options['comment'],
        'type': options['type'],
        'override_host': options['override_host'],
        'between_bytes_timeout': options['between_bytes_timeout'],
        'connect_timeout': options['connect_timeout'],
        'first_byte_timeout': options['first_byte_timeout'],
        'max_conn_default': options['max_conn_default'],
        'quorum': options['quorum'],
        'tls_check_cert': options['tls_check_cert']
      };

      let authNames = ['token'];
      let contentTypes = ['application/x-www-form-urlencoded'];
      let accepts = ['application/json'];
      let returnType = PoolResponse;
      let basePaths = ['https://api.fastly.com'];
      let basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI
      if (typeof options['_base_path_index'] !== 'undefined') {
        if (options['_base_path_index']  >= basePaths.length || options['_base_path_index'] <  0) {
          throw new Error("Invalid index " + options['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }
        basePath = basePaths[options['_base_path_index']];
      }

      return this.apiClient.callApi(
        '/service/{service_id}/version/{version_id}/pool/{pool_name}', 'PUT',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath
      );
    }

    /**
     * Updates a specific pool for a particular service and version.
     * @param {Object} options
     * @param {String} options.service_id - Alphanumeric string identifying the service.
     * @param {Number} options.version_id - Integer identifying a service version.
     * @param {String} options.pool_name - Name for the Pool.
     * @param {String} [options.tls_ca_cert='null'] - A secure certificate to authenticate a server with. Must be in PEM format.
     * @param {String} [options.tls_client_cert='null'] - The client certificate used to make authenticated requests. Must be in PEM format.
     * @param {String} [options.tls_client_key='null'] - The client private key used to make authenticated requests. Must be in PEM format.
     * @param {String} [options.tls_cert_hostname='null'] - The hostname used to verify a server's certificate. It can either be the Common Name (CN) or a Subject Alternative Name (SAN).
     * @param {module:model/Number} [options.use_tls=UseTlsEnum.no_tls] - Whether to use TLS.
     * @param {Date} [options.created_at] - Date and time in ISO 8601 format.
     * @param {Date} [options.deleted_at] - Date and time in ISO 8601 format.
     * @param {Date} [options.updated_at] - Date and time in ISO 8601 format.
     * @param {String} [options.service_id2]
     * @param {String} [options.version]
     * @param {String} [options.name] - Name for the Pool.
     * @param {String} [options.shield='null'] - Selected POP to serve as a shield for the servers. Defaults to `null` meaning no origin shielding if not set. Refer to the [POPs API endpoint](https://www.fastly.com/documentation/reference/api/utils/pops/) to get a list of available POPs used for shielding.
     * @param {String} [options.request_condition] - Condition which, if met, will select this configuration during a request. Optional.
     * @param {String} [options.tls_ciphers] - List of OpenSSL ciphers (see the [openssl.org manpages](https://www.openssl.org/docs/man1.1.1/man1/ciphers.html) for details). Optional.
     * @param {String} [options.tls_sni_hostname] - SNI hostname. Optional.
     * @param {Number} [options.min_tls_version] - Minimum allowed TLS version on connections to this server. Optional.
     * @param {Number} [options.max_tls_version] - Maximum allowed TLS version on connections to this server. Optional.
     * @param {String} [options.healthcheck] - Name of the healthcheck to use with this pool. Can be empty and could be reused across multiple backend and pools.
     * @param {String} [options.comment] - A freeform descriptive note.
     * @param {module:model/String} [options.type] - What type of load balance group to use.
     * @param {String} [options.override_host='null'] - The hostname to [override the Host header](https://www.fastly.com/documentation/guides/full-site-delivery/domains-and-origins/specifying-an-override-host/). Defaults to `null` meaning no override of the Host header will occur. This setting can also be added to a Server definition. If the field is set on a Server definition it will override the Pool setting.
     * @param {Number} [options.between_bytes_timeout=10000] - Maximum duration in milliseconds that Fastly will wait while receiving no data on a download from a backend. If exceeded, the response received so far will be considered complete and the fetch will end. May be set at runtime using `bereq.between_bytes_timeout`.
     * @param {Number} [options.connect_timeout] - How long to wait for a timeout in milliseconds. Optional.
     * @param {Number} [options.first_byte_timeout] - How long to wait for the first byte in milliseconds. Optional.
     * @param {Number} [options.max_conn_default=200] - Maximum number of connections. Optional.
     * @param {Number} [options.quorum=75] - Percentage of capacity (`0-100`) that needs to be operationally available for a pool to be considered up.
     * @param {Number} [options.tls_check_cert] - Be strict on checking TLS certs. Optional.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PoolResponse}
     */
    updateServerPool(options = {}) {
      return this.updateServerPoolWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
